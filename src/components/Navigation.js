import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <nav className={`navigation ${theme}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">My Blog</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/post/1" className="nav-link">Sample Post</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
