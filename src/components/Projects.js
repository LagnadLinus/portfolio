

import React from 'react';
import '../styles/Projects.css'; // Importing its CSS file



function Projects() {
    return(
        <section id="my-works">
          <h2 className="section-title">Featured Works</h2>
          <div className="portfolio-grid">

          {/* Project 1 */}
            <div className="portfolio-item">
              <a href="https://dansun.pythonanywhere.com" target="_blank" rel="noopener noreferrer">
                <img src={require('../images/digital_resume.png')} alt="Digital Resume" />
                <div className="overlay">
                  <h3>Online Portfolio</h3>
                  <p>Python | Django | Javascript | HTML | CSS</p>
                </div>
              </a>
            </div>

          {/* Project 2 */}
            <div class="portfolio-item">
                    <a href="https://www.raspberrypi.com/tutorials/running-pi-hole-on-a-raspberry-pi/" target="_blank" rel="noopener noreferrer">
                        <img src={require ("../images/ad_blocker.jpg")} alt="Ad-Blocker" />
                        <div class="overlay">
                            <h3>Ad Blocking Project</h3>
                            <p>Ubuntu | Raspberry Pi 4</p>
                        </div>
                    </a>
                </div>

          {/* Project 3 */}
            <div class="portfolio-item">
                <a href="https://github.com/LagnadLinus/Chandra-Yan" target="_blank" rel="noopener noreferrer">
                    <img src={require ("../images/galaxy_game.png")} alt="Galaxy Game" />
                    <div class="overlay">
                        <h3>Galaxy Game Chandra Yan</h3>
                        <p>Python | Kivy</p>
                    </div>
                </a>
            </div>

          {/* Project 4 */}
            <div class="portfolio-item">
                <a href="https://github.com/LagnadLinus/open_gov_data_visualisation" target="_blank" rel="noopener noreferrer">
                    <img src={require ("../images/hackathon.png")} alt="Hackathon Project" />
                    <div class="overlay">
                        <h3>Open Gov Data Visualisation</h3>
                        <p>Python | Javascript | HTML | CSS</p>
                    </div>
                </a>
            </div>

          </div>
        </section>
    );
};

export default Projects;