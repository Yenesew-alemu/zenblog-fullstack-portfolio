// /client/src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    // We wrap with a main tag to provide top margin for the fixed header
    <main id="main"> 
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">

            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="content">
                <h3>Who We Are</h3>
                <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                </p>
                <div className="text-center text-lg-start">
                  {/* Using a Link component for internal navigation might be better here */}
                  <Link to="/contact" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Contact Us</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center">
              {/* Ensure the image path is correct relative to the /public folder */}
              <img src="/assets/img/about.jpg" className="img-fluid" alt="About Us" />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;