# ZenBlog: A Full-Stack Blog Application

![ZenBlog Screenshot](https://via.placeholder.com/800x450.png?text=Add+a+Screenshot+of+Your+Homepage+Here)
*Add a compelling screenshot of your finished application's homepage here.*

## Table of Contents
- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Technical Challenges & Solutions](#technical-challenges--solutions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)

## Project Overview

ZenBlog is a complete, full-stack blog platform built from the ground up. The project was developed to demonstrate a comprehensive understanding of modern web development, from backend API design and database management to dynamic frontend implementation with React. The frontend is based on the "ZenBlog" Bootstrap template, which has been converted into a fully interactive and dynamic Single Page Application (SPA).

This project showcases a professional development workflow, including a secure, token-based authentication system for the admin panel, a RESTful API for content management, and a reusable, component-based frontend architecture.

## Live Demo

**(Optional but Highly Recommended)**
You can view a live version of the deployed application here:
[https://your-live-demo-url.com](https://your-live-demo-url.com)
*(We will get this URL when we deploy the project in the next step!)*

## Features

### Public-Facing Site
- **Dynamic Homepage:** Features a hero slider, a "trending" section, and multiple category-specific sections, all populated with data from the backend API.
- **Single Post View:** Users can click on any post to read the full article on a dedicated page.
- **Category Archives:** Browse all posts belonging to a specific category.
- **Author Pages:** View a specific author's bio and a list of all their posts.
- **Functional Search:** A search bar that returns a list of posts matching a user's query.
- **Working Contact Form:** Submits data to the backend, which can be logged or configured to send an email.
- **Responsive Design:** Fully responsive layout that adapts to desktop, tablet, and mobile screens.

### Admin Panel
- **Secure Authentication:** A JWT (JSON Web Token) based login system protects all admin routes.
- **Post Management (CRUD):** A secure dashboard for creating, reading, updating, and deleting blog posts using a rich text editor.
- **Category Management (CRUD):** An interface for creating and deleting categories.
- **(Optional: Mention the Layout System)** A system to assign different visual layouts to different categories directly from the admin panel.

## Technologies Used

- **Frontend:**
  - **React.js** (with Vite)
  - **React Router DOM** for client-side routing.
  - **Axios** for API communication.
  - **React Quill** for the rich text editor.
  - **Swiper.js** for the hero slider.
- **Backend:**
  - **Node.js**
  - **Express.js** for the RESTful API server.
  - **MySQL** as the relational database.
  - **JWT (JSON Web Token)** for authentication.
  - **bcrypt.js** for password hashing.
  - **CORS** for enabling cross-origin requests.
- **Database:**
  - **MySQL**

## Technical Challenges & Solutions

This section is very important for showing your problem-solving skills. Here are some examples of what you can write.

- **Challenge:** Converting a static, multi-page HTML/CSS template into a dynamic React Single Page Application, especially ensuring that the template's JavaScript (for sliders, animations, etc.) worked correctly within the React component lifecycle.
- **Solution:** I created a custom React hook (`useTemplateScripts`) that re-initializes the necessary JavaScript libraries (like AOS and Swiper) after the components have mounted. This solved the problem of animations not firing and interactive elements not working after a client-side navigation event.

- **Challenge:** The static template had several different visual layouts for its category sections. Creating a unique component for each one would not have been scalable.
- **Solution:** I implemented a "Configuration over Code" strategy. I created a reusable component for each *unique layout pattern*. Then, I added a `layout_type` field to the `categories` table in the database, which an admin can set. The homepage then dynamically reads this configuration and renders the appropriate layout component for each category, making the system scalable to any number of new categories or layouts.

## Getting Started

Instructions for setting up and running the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [MySQL](https://www.mysql.com/) (or a tool like XAMPP/WAMP)
- An account with [Cloudinary](https://cloudinary.com/) for image uploads (if you implement it).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/zenblog-app.git
   cd zenblog-app
   ```
2. **Setup the Backend:**
   ```bash
   cd server
   npm install
   ```
   - Create a `.env` file in the `/server` directory and add your database credentials and a JWT secret. (You can provide a `.env.example` file).
   - Run the database schema files to create the necessary tables.
3. **Setup the Frontend:**
   ```bash
   cd ../client
   npm install
   ```
4. **Run the Application:**
   - In one terminal, run the backend server from the `/server` directory: `npm start`
   - In another terminal, run the frontend client from the `/client` directory: `npm run dev`
   - The application will be available at `http://localhost:5173`.

## Screenshots

**(Optional but Recommended)**
Add a few more screenshots here to show off different parts of your application.

- A screenshot of the `Single Post Page`.
- A screenshot of the `Admin Login Page`.
- A screenshot of the `Admin Dashboard` showing the "Manage Posts" table.