// TicketContainer.js
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import Ticket from './Ticket.jsx';
import { useNavigate } from 'react-router-dom';

const TicketContainer = () => {
    const { userId } = useAuth(); // Retrieve userId from AuthContext
    const navigate = useNavigate();
    console.log("User ID in TicketContainer:", userId); // Debug log
    const [ticketTypes, setTicketTypes] = useState([]);

    // Fetch ticket types from the backend
    const fetchTickets = async () => {
        try {
            const response = await fetch('https://backend.festy.clusterfuck.hu/tickets');
            const data = await response.json();
            setTicketTypes(data);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    // Handle ticket purchase
    const handlePurchase = async (ticketType) => {
        if (!userId) {
            navigate('/login'); // Navigate to login page if not logged in
            return;
        }

        try {
            const response = await fetch('https://backend.festy.clusterfuck.hu/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, ticketType }), // Use userId from context
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);

                // Update local state to reflect the new ticket quantity
                setTicketTypes(prevTickets =>
                    prevTickets.map(ticket =>
                        ticket.type === ticketType
                            ? { ...ticket, available_quantity: ticket.available_quantity - 1 }
                            : ticket
                    )
                );
            } else {
                console.error("Purchase failed:", data.message);
            }
        } catch (error) {
            console.error("Error during purchase:", error);
        }
    };

    return (
        <div style={styles.ticketContainer}>
            <h2 style={styles.title}>Available Tickets</h2>
            <div style={styles.ticketsWrapper}>
                {ticketTypes.map(ticket => (
                    <Ticket
                        key={ticket.id}
                        ticketType={ticket.type}
                        available_quantity={ticket.available_quantity}
                        price={ticket.price}
                        onPurchase={() => handlePurchase(ticket.type)} // Pass ticket type to onPurchase
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    ticketContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        width: '100vw',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: '6vh',
        marginBottom: '6vh',
        marginTop: '6vh',
        color: '#00ffcc',
        textShadow: '0 0 5px #00ffcc',
    },
    ticketsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Allows wrapping of tickets on smaller screens
    },
};

export default TicketContainer;
