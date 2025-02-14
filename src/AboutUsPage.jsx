import React from 'react';

function AboutUsPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>The Festy Team</h1>
            
            <p style={styles.paragraph}>
                Welcome to Festy! We organize unique festivals that are not only fun but also pet-friendly, so don't hesitate to bring your cat along for the experience! 
                Our events are designed with a niche audience in mind, reflecting in our choice of featured artists and performances. 
                If you're looking for something a bit different, you've come to the right place!
            </p>
            <p style={styles.paragraph}>
                Our team works tirelessly to make each event unforgettable, focusing on providing an inclusive and fun environment for both attendees and performers.
            </p>
            <p style={styles.paragraph}>
                Thank you for being a part of the Festy community. We can't wait to see you at our next event!
            </p>
            <p style={styles.paragraph}>
                Do you have further questions?
            </p>

            {/* Contact Information with icons */}
            <div style={styles.contactInfo}>
                <p style={styles.contactItem}>
                    <i className="fas fa-phone"></i> +1 (555) 123-4567
                </p>
                <p style={styles.contactItem}>
                    <i className="fas fa-envelope"></i> contact@festy.com
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
        margin: '0',
    },



    heading: {
        marginTop: '5vh',
        fontSize: '10vh',
        marginBottom: '5vh',
        color: '#00ffcc',
        textShadow: '0 0 5px #00ffcc',
    },

    paragraph: {
        marginTop: '2vh',
        marginBottom: '2vh',
        fontSize: '3vh',
    },

    link: {
        color: '#00ffcc',
        textDecoration: 'none',
    },

    contactInfo: {
        marginTop: '3vh',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '0.1vh solid #87ffcb',
        borderRadius: '2vh',
    },

    contactItem: {
        fontSize: '2.5vh',
        margin: '1vh 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ff4081',
        padding: '2vh'
    },
};

export default AboutUsPage;
