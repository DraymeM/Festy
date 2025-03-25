import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../AuthContext';

function Header() {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);
    const navListRef = useRef(null);
    const { userId } = useAuth(); // Get userId from the AuthContext

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const handleClick = () => {
        const audio = new Audio('/sounds/click-sound.mp3'); // Directly reference the file
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    };

    // Function to handle clicks outside the header and nav
    const handleClickOutside = (event) => {
        if (
            headerRef.current &&
            !headerRef.current.contains(event.target) &&
            navListRef.current &&
            !navListRef.current.contains(event.target)
        ) {
            setShowNav(false); // Close the nav if clicked outside
        }
    };

    useEffect(() => {
        // Add event listener for detecting clicks outside the nav
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className={`header ${showNav ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <ul ref={navListRef} className={`navList ${showNav ? 'show' : ''}`}>
                    <li className="navItem">
                        <Link
                            to="/festy"
                            className={location.pathname === '/festy' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            to="/festy/programs"
                            className={location.pathname === '/festy/programs' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            Programs
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            to="/festy/performers"
                            className={location.pathname === '/festy/performers' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            Performers
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            to="/festy/tickets"
                            className={location.pathname === '/festy/tickets' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            Tickets
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            to="/festy/cats"
                            className={location.pathname === '/festy/cats' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            Cats
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            to="/festy/aboutus"
                            className={location.pathname === '/festy/aboutus' ? 'activeLink' : 'link'}
                            onClick={handleClick}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="navItem">
                        {userId ? (
                            <Link
                                to="/festy/account-details"
                                className={location.pathname === '/festy/account-details' ? 'activeLink' : 'link'}
                                onClick={handleClick}
                            >
                                Account
                            </Link>
                        ) : (
                            <Link
                                to="/festy/login"
                                className={location.pathname === '/festy/login' ? 'activeLink' : 'link'}
                                onClick={handleClick}
                            >
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;