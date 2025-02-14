import React, { useState } from 'react';
import PerformerCard from './assets/PerformerCard';
import performers from './performersData'; // Import the performers data

function PerformersPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase()); // Convert input to lowercase for case-insensitive matching
    };

    // Filter performers based on search term
    const filteredPerformers = performers.filter((performer) => {
        const matchesName = performer.name.toLowerCase().includes(searchTerm);
        const matchesDay = performer.days.some(day => day.toLowerCase().includes(searchTerm)); // Check if any day matches the search term
        return matchesName || matchesDay; // Return true if either condition is met
    });

    return (
        <div style={styles.performersContainer}>
            <div style={styles.searchContainer}>
            <span style={styles.searchIcon}>🔍</span>
                <input
                    type="text"
                    placeholder="Search performers by name or day..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={styles.searchInput}
                />
                {/* Magnifying glass emoji */}
                
            </div>

            <div style={styles.cardsContainer}>
                {filteredPerformers.map((performer) => (
                    <PerformerCard
                        key={performer.id}
                        id={performer.id}
                        name={performer.name}
                        imageUrl={performer.imageUrl}
                        description={performer.description}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    performersContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        width: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box',
    },
    searchContainer: {
        textAlign: 'center',
        marginTop: '1vh',
        marginBottom: '3vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(0, 255, 204, 0.6) ',
        borderColor: 'rgba(0, 255, 204, 0.6)',
        padding: '0',

    },
    searchInput: {
        padding: '1.2vh',
        fontSize: '3vh',
        width: '50vh', // Set a fixed width for the search input
        border: 'none',
    },
    searchIcon: {
        
        fontSize: '3vh',   // Adjust size of the emoji
        backgroundColor: 'rgba(77, 77, 77, 0.6)',
        padding: '1vh'
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1vw',
    },
};

export default PerformersPage;
