import React from 'react';
import { useNavigate } from 'react-router-dom';

function FestivalHighlights({ title, image }) {
    const navigate = useNavigate();

    const containerStyle = {
        width: '50vh',
        height: '50vh',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative', 
        margin: '1vh',
        overflow: 'hidden',
        cursor: 'pointer',
        clipPath: 'polygon(0 3vh, 3vh 0, calc(100% - 3vh) 0, 100% 3vh, 100% calc(100% - 3vh), calc(100% - 3vh) 100%, 3vh 100%, 0 calc(100% - 3vh))',
        transition: 'transform 0.3s',
    };

    const highlightItemStyle = {
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 2, 
        transition: 'z-index 0.3s', 
    };

    const imageStyle = {
        width: '40vh',
        height: '40vh',
        objectFit: 'cover',
        margin: '1vh',
        zIndex: 2, 
        transition: 'z-index 0.3s', 
    };

    const titleStyle = {
        fontSize: '3vh',
        color: '#00ffcc',
        margin: '0',
        zIndex: 2, 
        transition: 'z-index 0.3s', 
    };

    // Update the handleClick to route to /cats if the title is "Cats"
    const handleClick = () => {
        if (title === 'Cats') {
            navigate('/cats');
        } else {
            navigate('/programs');
        }
    };

    return (
        <div
            style={containerStyle}
            onClick={handleClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; 
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; 
            }}
        >
            <div style={highlightItemStyle}>
                <h2 style={titleStyle}>{title}</h2>
                <img src={image} alt={title} style={imageStyle} />
            </div>
        </div>
    );
}

export default FestivalHighlights;
