// /client/src/layouts/AdminLayout.jsx
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

// --- Style Objects ---
const layoutStyle = { display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' };
const sidebarStyle = {
  width: '250px',
  background: '#2c3e50', // A dark sidebar color
  color: 'white',
  padding: '20px',
};
const sidebarLinkStyle = {
  display: 'block',
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  marginBottom: '5px',
};
const contentStyle = {
  flex: 1, // Takes up the remaining space
  padding: '30px',
  background: '#f4f6f9', // A light gray background for the content area
};
const logoutButtonStyle = { ...sidebarLinkStyle, background: '#e74c3c', textAlign: 'center', marginTop: 'auto' };
// --- End Style Objects ---

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('authToken');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div style={layoutStyle}>
      <aside style={sidebarStyle}>
        <h3>Admin Panel</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
          <Link to="/admin/dashboard" style={sidebarLinkStyle}>Dashboard</Link>
          <Link to="/admin/posts" style={sidebarLinkStyle}>Manage Posts</Link>
          <Link to="/admin/categories" style={sidebarLinkStyle}>Manage Categories</Link>
          {/* Add more links here as we build pages */}
          
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        </nav>
      </aside>
      <main style={contentStyle}>
        {/* The Outlet component will render the specific admin page we are on */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;