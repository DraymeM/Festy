import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import AuthContext for user state management

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();
    const { saveUserIdToContext } = useAuth(); // Import saveUserIdToContext

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://backend.festy.clusterfuck.hu/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login successful:", data.message);
                const userId = data.userId; // Extract userId from response
                saveUserIdToContext(userId); // Save it to your auth context or state
                navigate('/festy/account-details'); // Navigate to account page
            }
            else {
                setErrorText(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorText("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Login</h2>
                {errorText && <p style={styles.errorText}>{errorText}</p>}
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
                <div style={styles.linkContainer}>
                    <p style={styles.linkText}>
                        Don't have an account? <Link to="/festy/register" style={styles.link}>Register here</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    form: {
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#00ffcc',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#FFF',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        textAlign: 'left',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px',
        width: '100%',
        color: 'white',
        backgroundColor: '#ff4081',
        border: 'none',
        clipPath: 'polygon(0 1vh, 1vh 0, calc(100% - 1vh) 0, 100% 1vh, 100% calc(100% - 1vh), calc(100% - 1vh) 100%, 1vh 100%, 0 calc(100% - 1vh))',
        cursor: 'pointer',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    linkContainer: {
        textAlign: 'center',
        marginTop: '15px',
    },
    linkText: {
        color: '#FFF',
    },
    link: {
        color: '#00ffcc',
        textDecoration: 'underline',
    },
};

export default LoginForm;
