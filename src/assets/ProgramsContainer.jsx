// assets/ProgramsContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from './ProgramCard';


function ProgramsContainer() {
    const programs = [
        {
            day: '1st Day',
            intro: 'Kickoff event with exciting performances!',
            details: [
                { title: '10:00 AM', description: 'Opening Ceremony' },
                { title: '11:00 AM', description: <Link to="/performers/6" style={linkStyle}> LittleV concert</Link>},
                { title: '3:00 PM', description: 'Cat Zoo' },
                { title: '5:00 PM', description: <Link to="/performers/5" style={linkStyle}> Electric Callboy concert</Link> },
                { title: '8:00 PM', description: 'Culinary enlightenment with Péter Magyar' },
                { title: '9:00 PM', description: <Link to="/performers/1" style={linkStyle}> Falling in Reverse concert</Link> },
                
            ],
        },
        {
            day: '2nd Day',
            intro: 'A day filled with collaborations and talks.',
            details: [
                { title: '9:00 AM', description: 'Fishing with cats' },
                { title: '11:00 AM', description: 'Guest Speaker: George Soros' },
                { title: '12:00 PM', description: <Link to="/performers/4" style={linkStyle}> Motionless in White concert</Link> },
                { title: '3:00 PM', description: 'Cat Beauty Contest'},
                { title: '4:00 PM', description: 'The King (Zámbó Jimmy)'},
                { title: '5:00 PM', description: <Link to="/performers/2" style={linkStyle}> Bring Me The Horizon concert</Link> },
                { title: '6:30 PM', description: <Link to="/performers/3" style={linkStyle}> Bring Me The Horizon x Baby Metal concert</Link> },
                { title: '7:30 PM', description: <Link to="/performers/3" style={linkStyle}> Baby Metal concert</Link> },
                { title: '9:30 PM', description: <Link to="/performers/0" style={linkStyle}> Black Veil Brides concert</Link> },
            ],
        },
        {
            day: '3rd Day',
            intro: 'Finale',
            details: [
                { title: '10:00 AM', description: 'Rehearsal' },
                { title: '11:30 AM', description: <Link to="/performers/7" style={linkStyle}> Chilling with Dixon Dallas</Link> },
                { title: '1:00 PM', description: <Link to="/performers/2" style={linkStyle}> Bring Me The Horizon brings us the horizon</Link> },
                { title: '5:00 PM', description: <Link to="/performers/5" style={linkStyle}>  Goffing with Electric Callboy again</Link> },
                { title: '9:00 AM', description: <Link to="/performers/6" style={linkStyle}> LittleV back with more Covers</Link>},
                { title: '11:00 PM', description: 'Closing Ceremony' },
            ],
        },
    ];

    return (
        <div style={styles.container}>
            {programs.map((program, index) => (
                <ProgramCard
                    key={index}
                    day={program.day}
                    intro={program.intro}
                    details={program.details}
                />
            ))}
        </div>
    );
}

const styles = {
    container: {
        overflowX: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '5vh',
        marginTop: '15vh',
        minHeight: '60vh',
        width: '100vw', 
    },
};
const linkStyle = {
    color: '#00ffcc', 
    textDecoration: 'none', 
};

export default ProgramsContainer;
