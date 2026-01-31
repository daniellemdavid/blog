# My Blog - React App with Theme Switching

A modern, responsive blog application built with React that features theme switching capabilities (light/dark mode) across all pages.

## Features

- 🎨 **Theme Switching**: Toggle between light and dark themes with persistence via localStorage
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🧭 **Multiple Pages**: Home, About, and Blog Post pages
- 🎯 **React Router**: Client-side routing for smooth navigation
- ⚡ **Modern React**: Built with React 19 and functional components with Hooks
- 💾 **State Persistence**: Theme preference is saved and restored across sessions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create a production build:
```bash
npm run build
```

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navigation.js   # Main navigation bar
│   ├── Navigation.css
│   ├── ThemeToggle.js  # Theme toggle button
│   └── ThemeToggle.css
├── pages/             # Page components
│   ├── Home.js        # Home page with blog post list
│   ├── Home.css
│   ├── About.js       # About page
│   ├── About.css
│   ├── BlogPost.js    # Individual blog post page
│   └── BlogPost.css
├── ThemeContext.js    # Theme context and provider
├── App.js             # Main app component with routing
├── App.css
└── index.js           # App entry point
```

## How It Works

### Theme Management

The app uses React Context API to manage theme state globally:
- `ThemeContext.js` provides the theme state and toggle function
- Theme preference is stored in localStorage
- All pages and components can access and use the current theme

### Routing

React Router handles navigation between pages:
- `/` - Home page with blog post listings
- `/about` - About page
- `/post/:id` - Individual blog post pages

### Theme Toggle

Click the moon (🌙) or sun (☀️) icon in the navigation bar to switch between themes. The preference is automatically saved.

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **React Context API** - State management
- **CSS3** - Styling with transitions and animations
- **localStorage** - Theme persistence

## Browser Support

Works in all modern browsers that support ES6+ and React 19.

## License

This project is open source and available for educational purposes.
