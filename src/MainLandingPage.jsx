import React from 'react';
import FeaturedArtists from './assets/PerformerCardContainer.jsx'; // Import the new component
import FestivalHighlights from './assets/FestivalHighlights.jsx'; // Import the FestivalHighlights component
import './MainLandingPage.css'; // Import the CSS file

function MainLandingPage() {
    // Generate an array of bars for the sound wave
    const numberOfBars = 15; // Adjust for more or fewer bars
    const soundWaveBars = Array.from({ length: numberOfBars }, (_, index) => (
        <div
            key={index}
            className="soundWaveBar"
            style={{ animationDelay: `${index * 0.1}s` }} // Stagger the animations
        ></div>
    ));

    // Define festival highlights data
    const highlightsData = [
        { title: 'Live Performances', image: 'https://i1.sndcdn.com/artworks-jbrpZd8sDOGb1DtD-HcAqoA-t500x500.jpg' },
        { title: 'Cats', image: 'https://m.media-amazon.com/images/I/619bSYEuSZL._AC_.jpg' },
        { title: 'Fun Activities', image: 'https://aegwebprod.blob.core.windows.net/content/filtered_tile_images/469/kz30vTpasN3zOzXnfXIcEVv8H37SiNexdRsWHvHE.jpg' },

    ];

    return (
        <div className="container">
            <h1 className="title">Step into the Unknown!</h1>
            <p className="description">
                Join us for an unforgettable experience filled with amazing performances, food, fun, and most importantly CATS!
            </p>

            {/* Sound Wave Animation */}
            <div className="soundWaveContainer">
                {soundWaveBars}
            </div>

            <h2 className="subTitle">Festival Highlights</h2>
            <div className="highlightsGrid">
                {highlightsData.map((highlight, index) => (
                    <FestivalHighlights key={index} title={highlight.title} image={highlight.image} />
                ))}
            </div>
            
            <a href="/tickets" className="buttonB">
                Buy Tickets Now
            </a>

            {/* Use the FeaturedArtists component */}
            <FeaturedArtists />
        </div>
    );
}

export default MainLandingPage;
