import React from 'react';

// Functional component representing the overall layout of the application
const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/home.png')", // Background image for the layout
        backgroundRepeat: 'no-repeat', // Background image property: no-repeat
        backgroundSize: 'cover', // Background image property: cover
      }}
    >
      {/* Menu */}
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
          <li>
            <a href="/">Home</a> {/* Link to the Home page */}
          </li>
          <li>
            <a href="/about">About</a> {/* Link to the About page */}
          </li>
        </ul>
      </nav>

      {children} {/* Render the content inside the layout */}
    </div>
  );
};

export default Layout;
