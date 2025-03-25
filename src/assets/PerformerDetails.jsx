import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CustomAudioPlayer from './CustomAudioPlayer'; // Import your custom audio player

function PerformerDetails({ performers }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const performer = performers[parseInt(id)]; // Convert id to an integer
    const [isHovered, setIsHovered] = useState(false);

    if (!performer) {
        return <div>Performer not found</div>;
    }

    return (
        <div style={styles.container}>
            <button
                onClick={() => navigate('/festy/performers')}
                style={{
                    ...styles.backButton,
                    ...(isHovered ? styles.backButtonHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Back to Performers
            </button>
            <div style={styles.imageContainer}>
                <img src={performer.imageUrl} alt={performer.name} style={styles.cardImage} />
            </div>
            <h2 style={styles.name}>{performer.name}</h2>

               <p>Listen to some tunes from {performer.name}</p>
            {/* Container for SoundWave and audio player */}
            <div style={styles.audioContainer}>
                <CustomAudioPlayer audioSrc={performer.sample} />
            </div>
            <p style={styles.description}>{performer.description}</p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    backButton: {
        display: 'block',
        margin: '10vh auto 5vh',
        backgroundColor: '#ff4081',
        cursor: 'pointer',
        fontSize: '3vh',
        padding: '1vh 2vh',
        border: 'none',
        color: '#fff',
        fontFamily: 'Impact, Charcoal, sans-serif',
        transition: 'transform 0.3s ease',
        clipPath: 'polygon(2vh 0, calc(100% - 2vh) 0, 100% 2vh, 100% calc(100% - 2vh), calc(100% - 2vh) 100%, 2vh 100%, 0 calc(100% - 2vh), 0 2vh)',
    },
    backButtonHover: {
        transform: 'scale(1.1)',
    },
    imageContainer: {
        position: 'relative',
        zIndex: 1,
        height: '50vh',
        width: '50vh',
        borderRadius: '8px',
        border: 'solid 0.1vh #76f5db',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        padding: 0,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    name: {
        fontSize: '5vh',
        margin: '2vh 0',
        color: '#00ffcc',
    },
    description: {
        fontSize: '3vh',
        marginTop: '2vh',
        width: '81vw',
        padding: '1vh',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '1vh',
    },
    audioContainer: {
        width: '40vw', // Default width for larger screens
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3vh auto 0',
    },
    audioPlayer: {
        width: '40vw',
        marginTop: '-2.4vh',
    },

    // Mobile view adjustments
    '@media (max-width: 768px)': {
        container: {
            width: '100vw',
        },
        imageContainer: {
            width: '80vw',
            height: '80vw',
            margin: '0 auto',
            padding: 0,
        },
        cardImage: {
            width: '100%',
            height: '100%',
        },
        audioContainer: {
            width: '100vw',  // Stretch the audio container to 100% of the viewport width on mobile
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',   // Centering container
            padding: 0,          // No extra padding to ensure full width
            boxSizing: 'border-box',  // Ensure total width remains 100vw
        },
        audioPlayer: {
            width: '100vw',  // Ensure full width of the audio player
            boxSizing: 'border-box', // Make sure no borders/padding impact width
        },
    },


};


export default PerformerDetails;