// RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (password !== passwordAgain) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('https://backend.festy.clusterfuck.hu/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            let data;
            try {
                data = await response.json();
            } catch (parseError) {
                data = { message: 'Server returned a non-JSON response' };
            }

            if (!response.ok) {
                setErrorMessage(data.message || 'Error registering');
            } else {
                setErrorMessage('User registered successfully');
                console.log('ez is lefut')
                navigate('/login'); // Navigate to login page after successful registration

            }
        } catch (error) {
            setErrorMessage('Server error');
            console.error('Error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Register</h2>
                {errorMessage && <div style={styles.error}>{errorMessage}</div>}
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
                <div style={styles.formGroup}>
                    <label htmlFor="passwordagain" style={styles.label}>Password Again</label>
                    <input
                        type="password"
                        id="passwordagain"
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Register</button>
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
        cursor: 'pointer',
        fontFamily: 'Impact, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
    },
};

export default RegisterForm;
