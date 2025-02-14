import React from 'react';
import { Link } from 'react-router-dom';
import './PerformerCard.css'; // Import the CSS file

function PerformerCard({ name, imageUrl, description, id, sample }) {
    return (
        <Link to={`/performers/${id}`} className="card">
            <div className="image-container"> {/* Add a container around the image */}
                <img src={imageUrl} alt={name} className="card-image" />
            </div>
            <h2 className="card-name">{name}</h2>
            {/* Add the audio player for the sample */}
            <audio controls className="audio-player">
                <source src={sample} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </Link>
    );
}

export default PerformerCard;

