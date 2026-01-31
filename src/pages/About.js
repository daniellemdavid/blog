import React from 'react';
import { useTheme } from '../ThemeContext';
import './About.css';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`page about ${theme}`}>
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className={`about-content ${theme}`}>
          <p>
            Welcome! I'm a passionate web developer who loves to write about 
            technology, programming, and web development.
          </p>
          
          <h2>What I Write About</h2>
          <ul>
            <li>React and Modern JavaScript</li>
            <li>Web Development Best Practices</li>
            <li>UI/UX Design</li>
            <li>Programming Tips and Tricks</li>
          </ul>
          
          <h2>My Journey</h2>
          <p>
            I've been working in web development for several years, building 
            various applications and learning new technologies along the way. 
            This blog is where I share my experiences and knowledge with the community.
          </p>
          
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out if you have questions or just want to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
