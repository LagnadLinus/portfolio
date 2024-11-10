import React, { useEffect, useState, useMemo } from 'react';
import './App.css';


import Header from './components/Header'; // Import your Header component
import About from './components/About'; // Import About component
import Footer from './components/Footer'; // Import Footer component
import Contact from './components/Contact'; // Import Contact component
import Skills from './components/Skills'; // Import the Skill component
import Projects from './components/Projects'; // Import the Projects component


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  // Check localStorage for mode preference and apply it
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }
  }, []);
  
  // Scrolling to top
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    const handleScroll = () => {
      if (scrollToTopBtn) { // Ensure scrollToTopBtn is not null
        if (window.pageYOffset > 300) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);
  

    // Toggle dark mode
    const toggleDarkMode = () => {
      if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
      setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    // Typing effect
    const roles = useMemo(() =>
    [
      'Full-Stack Developer',
      'Python AI Developer',
      'Tech Support',
    ], []);

    const [displayedRole, setDisplayedRole] = useState(roles[0]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      // If deleting, remove one character at a time
      timer = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 100); // Adjust the typing speed here
      if (charIndex === 0) {
        setIsDeleting(false); // Switch to typing after finishing deleting
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    } else {
      // If typing, add one character at a time
      timer = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 200); // Adjust the typing speed here
      if (charIndex === currentRole.length) {
        setIsDeleting(true); // Start deleting after finishing typing
      }
    }

    return () => clearTimeout(timer);
  }, [isDeleting, charIndex, currentRoleIndex, roles]);

    return (
      <div>
        <Header
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
          />

      <button id="scrollToTopBtn" title="Go to top">Top</button>

        <div className={`app-container ${isMenuOpen ? 'blur' : ''}`}>
          {/* Background based on dark mode */}
          <div className={isDarkMode ? 'night-mode-background' : 'day-mode-background'}></div>
      

        {/* Apply background based on the mode */}
        <div className={`app-container ${isMenuOpen ? 'blur' : ''}`}> </div>
          <section id="about">

            {/* About component here */}
            <About
              displayedRole={displayedRole} 
              toggleDarkMode={toggleDarkMode} 
              isDarkMode={isDarkMode}
            />

          </section>

          <Skills isDarkMode={isDarkMode} />  {/* Skills component here */}

          <Projects /> {/* Projects component here */}

          <Contact /> {/* Contact component here */} 

          <Footer /> {/* Include Footer component here */}
        </div>
      </div>
  );
}

export default App;
