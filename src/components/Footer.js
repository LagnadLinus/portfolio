

import React from 'react';
import '../styles/Footer.css'; // Importing its CSS file
import linkedinLogo from '../images/linkedin_logo.svg';
import githubLogo from '../images/github_logo.svg';



function Footer() {
    return (
        <footer>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sunildangal/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/LagnadLinus" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
        </div>

        <div className="footer-text">
          <p>Copyright ©2024 All rights reserved.</p>
          <p>Template Designed by <strong>Sunil Dangal</strong></p>
        </div>
      </footer>        
    )
}

export default Footer;