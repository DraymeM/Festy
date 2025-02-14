import React from 'react';
import PerformerCard from './PerformerCard'; 
import performers from '../performersData.jsx'; // Import the performers array

// Component that renders Performer Cards
function FeaturedArtists() {
    // Map the first 5 performers from the imported array
    const featuredArtists = performers.slice(0, 5);

    return (
        <section style={styles.featuredArtists}>
            <h2 style={styles.sectionTitle}>Featured Artists</h2>
            <div style={styles.artistCardContainer}>
                {featuredArtists.map((artist, index) => (
                    <PerformerCard
                        key={artist.id} // Use artist id as the key
                        name={artist.name}
                        imageUrl={artist.imageUrl}
                        description={artist.description}
                        id={artist.id}
                    />
                ))}
            </div>
        </section>
    );
}

// Styles specific to FeaturedArtists
const styles = {
    featuredArtists: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        clipPath: 'polygon(0 3vh, 3vh 0, calc(100% - 3vh) 0, 100% 3vh, 100% calc(100% - 3vh), calc(100% - 3vh) 100%, 3vh 100%, 0 calc(100% - 3vh))',
        width: '90%',
    },
    sectionTitle: {
        fontSize: '24px',
        color: '#00ffcc',
        marginBottom: '20px',
    },
    artistCardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
};

export default FeaturedArtists;
