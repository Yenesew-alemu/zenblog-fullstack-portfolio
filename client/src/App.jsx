// /client/src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Layouts ---
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// --- Components ---
import ProtectedRoute from './components/ProtectedRoute';

// --- Public Pages ---
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SinglePostPage from './pages/SinglePostPage';
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AuthorPage from './pages/AuthorPage';
import NotFoundPage from './pages/NotFoundPage';

// --- Auth Page ---
import LoginPage from './pages/LoginPage';

// --- Admin Pages ---
import AdminDashboard from './pages/admin/AdminDashboard';
import ManagePostsPage from './pages/admin/ManagePostsPage';
import PostEditorPage from './pages/admin/PostEditorPage';
import ManageCategoriesPage from './pages/admin/ManageCategoriesPage';


function App() {
  return (
    <Routes>
      
      {/* =================== AUTH ROUTE (Standalone) ===================== */}
      <Route path="/login" element={<LoginPage />} />

      {/* =================== PROTECTED ADMIN ROUTES ================== */}
      {/* All routes inside here are protected and will have the AdminLayout */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          
          {/* Post Management */}
          <Route path="posts" element={<ManagePostsPage />} />
          <Route path="posts/new" element={<PostEditorPage />} />
          <Route path="posts/edit/:id" element={<PostEditorPage />} />
          
          {/* Category Management */}
          <Route path="categories" element={<ManageCategoriesPage />} />
        </Route>
      </Route>

      {/* =================== PUBLIC ROUTES ================== */}
      {/* All routes inside here will have the main Header and Footer */}
      {/* The 404 route is placed last inside this block to catch any public route misses */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="post/:slug" element={<SinglePostPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="author/:id" element={<AuthorPage />} />
        
        {/* The "catch-all" 404 Not Found route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  );
}

export default App;