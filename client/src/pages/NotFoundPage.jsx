// /client/src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '50px 20px',
    minHeight: '300px',
  };

  const h1Style = {
    fontSize: '72px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const pStyle = {
    fontSize: '18px',
    marginBottom: '30px',
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '10px 25px',
    backgroundColor: '#0d6efd',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  return (
    <section className="section">
      <div className="container">
        <div style={pageStyle}>
          <h1 style={h1Style}>404</h1>
          <p style={pStyle}>Oops! The page you are looking for does not exist.</p>
          <Link to="/" style={linkStyle}>Go Back to Homepage</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;