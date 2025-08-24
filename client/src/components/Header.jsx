// /client/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { closeMobileNav } from '../hooks/useTemplateScripts';

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">ZenBlog</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
           <li><Link to="/" onClick={closeMobileNav} className="active">Home</Link></li>
            <li><Link to="/about" onClick={closeMobileNav}>About</Link></li>
            <li><Link to="/post/some-slug" onClick={closeMobileNav}>Single Post</Link></li> {/* Example Link */}

            {/* --- FULL DROPDOWN MENU --- */}
            <li className="dropdown">
              <a href="#">
                <span>Categories</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                {/* We will make these links dynamic with real categories later */}
                <li><Link to="/category/1">Category 1</Link></li>
                
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                
                <li><Link to="/category/2">Category 2</Link></li>
                <li><Link to="/category/3">Category 3</Link></li>
                <li><Link to="/category/4">Category 4</Link></li>
              </ul>
            </li>
            
            <li><Link to="/contact" onClick={closeMobileNav}>Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </header>
  );
}

export default Header;