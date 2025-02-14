// server.js
const express = require('express');
const mysql = require('mysql2');
// const mysqllive = require('mysql-live');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3003; // Set your desired port

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Create MySQL connection
const db = mysql.createConnection({
    host: '*********', // Update with your actual DB host
    port: 4201,
    user: 'user',
    password: 'Secret123',
    database: 'festy',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Registration endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Hash the password with bcrypt
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ message: "Server error during registration" });
        }

        // SQL query to insert a new user into the database
        const sql = "INSERT INTO Users (email, password) VALUES (?, ?)";
        const values = [email, hash];

        // Execute the query
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Database error during registration" });
            }
            res.status(201).json({ message: "Registration successful" });
        });
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const sql = "SELECT * FROM Users WHERE email = ?";

    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Database error during login" });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).json({ message: "Server error during login" });
            }

            if (isMatch) {
                res.status(200).json({ message: "Login successful", userId: user.id });
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        });
    });
});

// Fetch tickets
app.get('/tickets', (req, res) => {
    const sql = 'SELECT * FROM Tickets';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Error fetching tickets." });
        }
        res.status(200).json(results);
    });
});

// Check if the user already owns a ticket
app.post('/check-ticket', (req, res) => {
    const { userId, ticketId } = req.body;

    if (!userId || !ticketId) {
        return res.status(400).json({ message: "User ID and Ticket ID are required." });
    }

    const checkTicketSql = `
        SELECT COUNT(*) AS count 
        FROM UserTickets 
        WHERE user_id = ? AND ticket_id = ?`;

    db.query(checkTicketSql, [userId, ticketId], (err, results) => {
        if (err) {
            console.error("Error checking ticket ownership:", err);
            return res.status(500).json({ message: "Error checking ticket ownership." });
        }

        if (results[0].count > 0) {
            return res.status(200).json({ purchased: true });
        }

        return res.status(200).json({ purchased: false });
    });
});

// Buy tickets
app.post('/purchase', (req, res) => {
    const { userId, ticketType } = req.body;

    console.log("Purchase Request:", req.body); // Debug log

    if (!userId || !ticketType) {
        return res.status(400).json({ message: "User ID and Ticket Type are required." });
    }

    // Start a transaction
    db.beginTransaction((transactionErr) => {
        if (transactionErr) {
            console.error("Error starting transaction:", transactionErr);
            return res.status(500).json({ message: "Could not start transaction." });
        }

        // Get the ticket by type
        const getTicketSql = 'SELECT id, available_quantity FROM Tickets WHERE type = ?';
        db.query(getTicketSql, [ticketType], (err, results) => {
            if (err || results.length === 0) {
                db.rollback(() => {
                    console.error("Error fetching ticket type:", err);
                    return res.status(500).json({ message: "Ticket type not found." });
                });
                return;
            }

            const { id: ticketId, available_quantity: availableQuantity } = results[0];

            if (availableQuantity <= 0) {
                db.rollback(() => {
                    return res.status(400).json({ message: "No tickets available." });
                });
                return;
            }

            // Update the ticket availability
            const updateTicketSql = 'UPDATE Tickets SET available_quantity = available_quantity - 1 WHERE id = ?';
            db.query(updateTicketSql, [ticketId], (updateErr) => {
                if (updateErr) {
                    db.rollback(() => {
                        console.error("Error updating ticket quantity:", updateErr);
                        return res.status(500).json({ message: "Error updating ticket quantity." });
                    });
                    return;
                }

                // Add the purchase to the UserTickets table
                const addUserTicketSql = 'INSERT INTO UserTickets (user_id, ticket_id) VALUES (?, ?)';
                db.query(addUserTicketSql, [userId, ticketId], (insertErr) => {
                    if (insertErr) {
                        db.rollback(() => {
                            console.error("Error adding ticket to user:", insertErr);
                            return res.status(500).json({ message: "Error recording purchase." });
                        });
                        return;
                    }

                    // Commit the transaction
                    db.commit((commitErr) => {
                        if (commitErr) {
                            db.rollback(() => {
                                console.error("Error committing transaction:", commitErr);
                                return res.status(500).json({ message: "Error completing transaction." });
                            });
                            return;
                        }

                        res.status(200).json({ message: "Ticket purchased successfully!" });
                    });
                });
            });
        });
    });
});


// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on "https://backend.festy.clusterfuck.hu/"`);
});
