import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
