

import React from 'react';
import '../styles/About.css'; // linking styles



function About({ displayedRole }) {
    return (
        <section id="about">
          <div className="banner">Welcome to My Portfolio</div> {/* New Banner */}
          <h2 className="changing-title">
            Hi, I am a{' '}
            <span className="result-streaming">
              {displayedRole}
            </span>
          </h2>

          <div className="about-box">
            <p>
              Customer-oriented with a background in ICT. Skilled in coding, resolving issues/bugs, troubleshooting, maintaining, and managing IT environments. Skilled in hardware and software installation and replacement, adhering to procurement processes. Adept at communicating complex technical concepts in a clear and concise manner, ensuring customer satisfaction, and fostering positive relationships. Demonstrated ability to work collaboratively in fast-paced environments, consistently meeting service level agreements. Committed to delivering exceptional IT support and driving overall customer success in a dynamic and evolving IT landscape.
            </p>
          </div>

          <div className="button-container">
          <a href="/resume/Resume_sunil.docx" className="download-button">Download Resume</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>

    </section>
    );
};

export default About;



            

