import React, { useState } from 'react';

function ProgramCard({ day, intro, details }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);  // Track hover state

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={{
                ...styles.pcard,
                ...(isHovered ? styles.cardHover : {}),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={styles.dayContainers}>
                <h2>{day}</h2>
            </div>
            <div style={styles.introContainer}>
                <p>{intro}</p>
                <button onClick={toggleDetails} style={styles.buttonback}>
                    {isOpen ? 'Show Less' : 'Show More'}
                </button>
                {isOpen && (
                    <ul style={styles.detailsList}>
                        {details.map((item, index) => (
                            <li key={index} style={styles.detailItem}>
                                <strong>{item.title}</strong>: {item.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
const styles = {
    pcard: {
        display: 'flex',
        width: '90vw',
        marginBottom: '2vh',
        border: '0.1vh solid #ccc',
        borderRadius: '2vh',
        overflow: 'hidden',
        backgroundColor: 'rgba(77, 77, 77, 0.4)',
        transition: 'transform 0.3s ease',  // Smooth transition
    },
    cardHover: {
        transform: 'scale(1.05)',  // Grows by 5% when hovered
    },
    dayContainers: {
        width: '20vw',
        backgroundColor: '#226357',
        padding: '5vh',
        textAlign: 'center, center',
        clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)',
    },
    introContainer: {
        padding: '1vh',
        width: '70vw',
        color: '#6bffe1',
        fontSize: '3vh',
    },
    buttonback: {
        marginTop: '10px',
        padding: '5px 10px',
        backgroundColor: '#ff4081',
        color: 'white',
        border: 'none',
        clipPath: 'polygon(0 1vh, 1vh 0, calc(100% - 1vh) 0, 100% 1vh, 100% calc(100% - 1vh), calc(100% - 1vh) 100%, 1vh 100%, 0 calc(100% - 1vh))',
        cursor: 'pointer',
    },
    detailsList: {
        marginTop: '10px',
        listStyleType: 'none',
        padding: '0',
        color: 'white',
        backgroundColor: 'black',
        fontSize: '2vh',
        clipPath: 'polygon(0 2vh, 2vh 0, calc(100% - 2vh) 0, 100% 2vh, 100% calc(100% - 2vh), calc(100% - 2vh) 100%, 2vh 100%, 0 calc(100% - 2vh))',
    },
    detailItem: {
        marginBottom: '0.5vh',
        padding: '1vh',
    },
};

export default ProgramCard;
