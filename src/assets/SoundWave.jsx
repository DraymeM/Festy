// SoundWave.jsx
import React from 'react';
import './SoundWave.css'; // Import the CSS file for the wave effect

const SoundWave = () => {
    const numberOfBars = 15; // Number of bars in the sound wave
    const soundWaveBars = Array.from({ length: numberOfBars }, (_, index) => (
        <div
            key={index}
            className="soundWaveBar"
            style={{ animationDelay: `${index * 0.1}s` }} // Stagger the animations
        ></div>
    ));

    return (
        <div className="soundWaveContainer">
            {soundWaveBars}
        </div>
    );
};

export default SoundWave;
