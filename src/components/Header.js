

import React, { useEffect } from 'react';
import '../styles/Header.css'; // Importing its CSS file
import logo from '../images/logo.png'; // Adjusted to correct imports
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons


function Header({ toggleDarkMode, isDarkMode, toggleMenu, isMenuOpen, closeMenu }) {
    // Close the menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                closeMenu(); // Close the menu when scrolling
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen, closeMenu]); // Dependencies: closeMenu and isMenuOpen

    return (
        <header className={isMenuOpen ? 'open' : ''} >
            <nav id="navbar">
                <div className="logo">
                    <img src={logo} alt="Your Logo" />
                    <h1>Sunil Dangal</h1>
                </div>

                {/* Sun and Moon toggle button */}
                <button id="mode-toggle" onClick={toggleDarkMode} className={isDarkMode ? 'moon' : 'sun'}>
                    {isDarkMode ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
                </button>

                
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {/* Hamburger Icon */}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#my-tools" onClick={closeMenu}>My Tools</a></li>
                    <li><a href="#my-works" onClick={closeMenu}>My Works</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
        );
}

export default Header;