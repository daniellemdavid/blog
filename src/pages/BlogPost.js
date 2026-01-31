import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const posts = {
    '1': {
      title: "Getting Started with React",
      date: "January 15, 2026",
      content: `
        React is a powerful JavaScript library for building user interfaces. 
        It was developed by Facebook and has become one of the most popular 
        choices for modern web development.
        
        In this post, we'll explore the fundamentals of React and why it's 
        become such a popular choice among developers.
        
        ## Key Features of React
        
        React offers several key features that make it stand out:
        
        1. **Component-Based Architecture**: Build encapsulated components that 
           manage their own state.
        2. **Virtual DOM**: React uses a virtual DOM for efficient updates.
        3. **JSX**: Write HTML-like syntax directly in your JavaScript.
        4. **Unidirectional Data Flow**: Makes your application more predictable.
        
        ## Getting Started
        
        To start building with React, you can use Create React App:
        
        \`\`\`bash
        npx create-react-app my-app
        cd my-app
        npm start
        \`\`\`
        
        This will set up a new React project with all the necessary tooling 
        configured for you.
        
        ## Conclusion
        
        React has revolutionized the way we build web applications. Its 
        component-based approach and efficient rendering make it an excellent 
        choice for projects of all sizes.
      `
    },
    '2': {
      title: "Understanding Hooks",
      date: "January 20, 2026",
      content: `
        React Hooks have transformed the way we write React components. 
        Introduced in React 16.8, Hooks allow you to use state and other 
        React features without writing a class.
        
        ## What are Hooks?
        
        Hooks are functions that let you "hook into" React state and lifecycle 
        features from function components.
        
        ## Common Hooks
        
        - **useState**: Manage local state in function components
        - **useEffect**: Perform side effects in function components
        - **useContext**: Access context values
        - **useReducer**: Manage complex state logic
        
        These hooks make your code more reusable and easier to understand.
      `
    },
    '3': {
      title: "State Management in React",
      date: "January 25, 2026",
      content: `
        Managing state in React applications is crucial for building 
        scalable and maintainable applications.
        
        ## Approaches to State Management
        
        There are several approaches to managing state in React:
        
        1. **Local State**: Using useState for component-specific state
        2. **Context API**: For sharing state across components
        3. **Redux**: For complex, global state management
        4. **Zustand/Jotai**: Modern, lightweight alternatives
        
        Choose the right approach based on your application's needs.
      `
    }
  };

  const post = posts[id] || {
    title: "Post Not Found",
    date: "",
    content: "The blog post you're looking for doesn't exist."
  };

  return (
    <div className={`page blog-post ${theme}`}>
      <div className="container">
        <article className={`post-content ${theme}`}>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <div className="post-body">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
