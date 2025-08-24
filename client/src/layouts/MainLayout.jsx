// /client/src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useTemplateScripts from '../hooks/useTemplateScripts'; // <-- 1. IMPORT THE HOOK

function MainLayout() {
  useTemplateScripts();
  // Style objects for fixing common template layout issues in React
  const layoutWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Forces the layout to be at least the full screen height
  };

  const mainContentStyle = {
    flex: 1, // Allows the main content to grow, pushing the footer down
  };

  return (
    <div style={layoutWrapperStyle}>
      <Header />
      <main id="main" style={mainContentStyle}>
        {/* The Outlet is where our page components (like HomePage) will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;