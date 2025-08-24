// /client/src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet /> {/* The content of our public pages will go here */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;