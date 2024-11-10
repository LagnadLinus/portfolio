


import React, { useEffect, useRef} from 'react';
import '../styles/Skills.css'; // linking styles
import { Chart, registerables } from 'chart.js'; // Ensure to import registerables


import githubLogo from '../images/github_logo.svg';
import jsLogo from '../images/js_logo.svg';
import tsLogo from '../images/ts_logo.svg';
import swiftLogo from '../images/swift_logo.svg';
import htmlLogo from '../images/html_logo.svg';
import sqlLogo from '../images/sql_logo.svg';
import cssLogo from '../images/css_logo.svg';
import pythonLogo from '../images/python_logo.svg';
import djangoLogo from '../images/django_logo.svg';
import reactLogo from '../images/react_logo.svg';
import expressLogo from '../images/express_logo.svg';
import nodeLogo from '../images/node_logo.svg';
import awsLogo from '../images/aws_logo.svg';
import postgresqlLogo from '../images/postgresql_logo.svg';
import bootstrapLogo from '../images/bootstrap_logo.svg';


function Skills({ isDarkMode }) {
    const pieChartRef = useRef(null); // Create a ref for the pie chart canvas
    const barChartRef = useRef(null); // Create a ref for the bar chart canvas

    // Chart creation effect
    useEffect(() => {
      Chart.register(...registerables);    // Register Chart.js components


        // Create Pie Chart  
        const ctxPie = pieChartRef.current.getContext('2d');
        const newPieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: [
                'Continous Learning',
                'Problem Solving',
                'Communication',
                'Team Work & Collaboration',
                'Time Management',
                'Attention to Detail',
                'Critical Thinking'
                ],
                datasets: [{
                label: 'Level',
                data: [15, 15, 15, 15, 10, 15, 15], // Percentages for each skill
                backgroundColor: [],
                borderColor: '#000', // Black border
                borderWidth: 2
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Ensures responsiveness
                plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Key Skills'
                }
                },
            },
            });

        // Bar Chart with logos in the base 
        const skillLogos = [
            jsLogo,    // JavaScript
            tsLogo,    // TypeScript
            swiftLogo, // Swift
            htmlLogo,  // HTML
            sqlLogo,   // SQL
            cssLogo,   // CSS
            pythonLogo,// Python
            djangoLogo,// Django
            reactLogo, // React.js
            expressLogo,// Express.js
            nodeLogo,  // Node.js
            awsLogo,   // AWS
            githubLogo,// GitHub
            postgresqlLogo, // PostgreSQL
            bootstrapLogo  // Bootstrap
        ];

        // Preload logos to ensure they load before being rendered
        const preloadedLogos = skillLogos.map((logoSrc) => {
            const img = new Image();
            img.src = logoSrc;
            return img;
          });

        
        // Custom Plugin to render preloaded logos at the base (below each bar)
        const logoPlugin = {
        id: 'customLogoPlugin',
        afterDatasetsDraw: function (chart) {
            const ctx = chart.ctx;
            chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
                const logo = preloadedLogos[index];  // Use the preloaded logo
                const barWidth = bar.width;  // Get the bar width to fit the logo
                const logoHeight = 19;       // Set the logo height
                const logoWidth = barWidth;  // Make the logo width the same as the bar
        
                // Draw the logo below the bar at the base of the chart (just above x-axis)
                const xPosition = bar.x - logoWidth / 2; // Center the logo under the bar
                const yPosition = chart.scales.y.bottom + 10;  // Adjust the position as needed
        
                // Ensure the logo is fully loaded before drawing
                ctx.drawImage(logo, xPosition, yPosition, logoWidth, logoHeight);
            });
            });
        }
        };


        // Bar Chart for Coding Skills
        const ctxBar = barChartRef.current.getContext('2d');
        const newBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // Remove text labels
            datasets: [{
            label: 'Level',
            data: [50, 50, 70, 95, 60, 95, 80, 55, 50, 50, 50, 40, 45, 30, 60], // Skill levels
            backgroundColor: [],
            borderColor: '#000', // Black border
            borderWidth: 2
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100 // Assuming max skill level is 100
                }
            },
            plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Key Tools'
            }
            },
        },
        plugins: [logoPlugin]  // Add the custom logo plugin
        });


        // Function to update chart colors based on light/dark mode
        function updateChartColors(isDarkMode) {
            const pieBackgroundColors = isDarkMode
              ? ['#3e155d', '#9f6ecd', '#5a5ed2', '#3d347f', '#8b8b8b', '#6a98c7', '#d9d9d9']  // Dark mode variant
              : ['#5a2083', '#bf8aef', '#7276f8', '#4f44aa', '#C0C0C0', '#9dc5fd', '#FFFFFF'];  // Light mode variant
              
            const barBackgroundColors = isDarkMode
              ? ['#3e155d', '#9f6ecd', '#5a5ed2', '#3d347f', '#8b8b8b', '#6a98c7', '#d9d9d9', '#3e155d', '#070567', '#237eb5', '#dbb9db', '#2b4b94', '#7b287e', '#2f77ba', '#3e155d']  // Dark mode variant
              : ['#5a2083', '#bf8aef', '#7276f8', '#4f44aa', '#C0C0C0', '#9dc5fd', '#FFFFFF', '#5a2083', '#0a079d', '#30bcfb', '#ffccff', '#3a68ce', '#9d3ca2', '#4198fd', '#5a2083'];  // Light mode variant
              
            // Update Pie Chart colors  
            newPieChart.data.datasets[0].backgroundColor = pieBackgroundColors;
            newPieChart.update();
            
            // Update Bar Chart colors
            newBarChart.data.datasets[0].backgroundColor = barBackgroundColors;
            newBarChart.update();
          }

        // Initial color update based on the current mode
        updateChartColors(isDarkMode);

        
        // Cleanup function to destroy charts when component unmounts
        return () => {
            newPieChart.destroy();
            newBarChart.destroy();
          };
        }, [isDarkMode]);   // Re-run the effect whenever isDarkMode changes


    return (
        <section id="my-tools">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="charts-container">

            <div className="chart" id="key-skills">
              <canvas ref={pieChartRef}></canvas> {/* Correct ref usage */}
            </div>

            <div className="chart" id="coding-skills">
              <canvas ref={barChartRef}></canvas> {/* Correct ref usage */}
            </div>
          </div>
        </section>
    );

}

export default Skills;