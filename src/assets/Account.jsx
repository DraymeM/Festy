import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AccountDetails() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchAccountDetails = async () => {
    //         try {
    //             const response = await fetch('/account-details', {
    //                 method: 'GET',
    //                 credentials: 'include',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             });

    //             // Log the response for debugging
    //             console.log('Response:', response);

    //             const contentType = response.headers.get("content-type");
    //             if (!response.ok || !contentType || !contentType.includes("application/json")) {
    //                 const text = await response.text();
    //                 throw new Error(`Failed to fetch account details: ${text}`);
    //             }

    //             const data = await response.json();
    //             setUserData(data.user);
    //         } catch (error) {
    //             console.error('Error fetching account details:', error);
    //             setError('Could not load account details. Please try again later.');
    //         }
    //     };

    //     fetchAccountDetails();
    // }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Logout successful');
                navigate('/login'); // Redirect to the login page
            } else {
                const errorText = await response.text();
                console.error('Logout failed:', errorText);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={styles.container}>
            {userData ? (
                <>
                    <h2 style={styles.title}>Account Details</h2>
                    <p style={styles.text}>Email: {userData.email}</p>
                </>
            ) : (
                <br />
            )}
            <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
            </button>
            <div style={styles.linkContainer}>
                <Link to="/" style={styles.link}>Back to Home</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'left',
        color: '#FFF',
        backgroundColor: '#282c34',
        minHeight: '100vh',
    },
    title: {
        marginBottom: '10px',
        color: '#00ffcc',
    },
    text: {
        color: '#FFF',
    },
    logoutButton: {
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
        marginTop: '20px',
    },
    linkContainer: {
        marginTop: '20px',
    },
    link: {
        color: '#00ffcc',
        textDecoration: 'underline',
    },
};

export default AccountDetails;
