import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { theme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building modern web applications.",
      date: "January 15, 2026"
    },
    {
      id: 2,
      title: "Understanding Hooks",
      excerpt: "Deep dive into React Hooks and how they transform functional components.",
      date: "January 20, 2026"
    },
    {
      id: 3,
      title: "State Management in React",
      excerpt: "Explore different approaches to managing state in React applications.",
      date: "January 25, 2026"
    }
  ];

  return (
    <div className={`page home ${theme}`}>
      <div className="container">
        <h1 className="page-title">Welcome to My Blog</h1>
        <p className="page-subtitle">Thoughts on web development, React, and more.</p>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <article key={post.id} className={`blog-post-card ${theme}`}>
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="read-more">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
