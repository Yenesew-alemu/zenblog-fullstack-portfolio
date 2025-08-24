// /client/src/hooks/useTemplateScripts.js
import { useEffect } from 'react';

// --- Named Export: Helper Function to close mobile nav ---
export const closeMobileNav = () => {
  const body = document.querySelector('body');
  if (body.classList.contains('mobile-nav-active')) {
    body.classList.remove('mobile-nav-active');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.classList.remove('bi-x');
      mobileNavToggle.classList.add('bi-list');
    }
  }
};


// --- Default Export: The Main Hook ---
const useTemplateScripts = () => {
  useEffect(() => {
    // Helper function
    const select = (el, all = false) => {
      el = el.trim();
      return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    };

    // --- 1. AOS Initialization (already working) ---
    setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false });
      }
    }, 100);

    // --- 2. Sticky Header (already working) ---
    const selectHeader = select('#header');
    const handleScroll = () => {
      if (selectHeader && window.scrollY > 100) selectHeader.classList.add('sticked');
      else if (selectHeader) selectHeader.classList.remove('sticked');
    };
    document.addEventListener('scroll', handleScroll);

    // --- 3. Mobile Navigation Toggle (already working) ---
    const mobileNavToggle = select('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function(e) {
        select('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }

    // --- 4. Search Form Toggle (You may not have this, but it's here if needed) ---
    // If your template has a search icon that opens a form, this logic is for that.
    // Based on your latest Header HTML, you might not need this.
    const searchOpen = select('.js-search-open');
    const searchClose = select('.js-search-close');
    const searchWrap = select('.search-form-wrap');
    if (searchOpen && searchClose && searchWrap) {
      searchOpen.addEventListener('click', (e) => { e.preventDefault(); searchWrap.classList.add('active'); });
      searchClose.addEventListener('click', (e) => { e.preventDefault(); searchWrap.classList.remove('active'); });
    }

    // --- 5. Navigation Menu Dropdown Logic (THIS IS THE FIX) ---
    const navDropdowns = select('.navmenu .dropdown > a', true);
    navDropdowns.forEach(navDropdown => {
      navDropdown.addEventListener('click', function(e) {
        // This is mainly for the mobile view
        if (select('.mobile-nav-active')) {
          e.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');
        }
      });
    });

    // --- 6. Cleanup Function ---
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
};

export default useTemplateScripts;