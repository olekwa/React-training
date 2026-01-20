import { useState, useEffect, useRef } from 'react'
import Hero from './Hero'
import Company from './Company';
import Services from './Services';
import About from './About';

import Footer from './Footer';
import BackToTop from '../BackToTop';


import TestimonialCasestudySection from './TestimonialCasestudySection';

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const header = (
  <header className="header-bg">
    <div className="header-inner">

      <div className="logo">
        <img src="./logo.png" alt="Promoted" />
      </div>

      {/* DESKTOP NAV */}
      <nav className="nav-desktop">
        <div className='nav-bar'><a href="/pricing">Pricing</a></div>
        <div className='nav-bar'><a href="/case-study">Case Studies</a></div>
        <div className='nav-bar'><a href="/company">Company</a></div>
        <div className='nav-bar'><a href="/blog">Blog</a></div>
        <button className='nav-button'>Get Started</button>
      </nav>

      {/* HAMBURGER BUTTON */}
      <button 
        className="hamburger" 
        onClick={toggleMobileMenu}
        ref={hamburgerRef}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

    </div>
    {/* MOBILE MENU BELOW THE HEADER */}
    {isMobileMenuOpen && (
      <nav className="nav-mobile" ref={mobileMenuRef}>
        <a className='nav-bar-mobile' href="/pricing">Pricing</a>
        <a className='nav-bar-mobile' href="/case-study">Case Studies</a>
        <a className='nav-bar-mobile' href="/company">Company</a>
        <a className='nav-bar-mobile' href="/blog">Blog</a>
        <a className='nav-bar-mobile mobile-btn' href="/get-started">Get Started</a>
      </nav>

    )}
  </header>

  )

  return (
    <>
      
      <Hero>
        {header}
      </Hero>
      <Company />
      <Services />
      <About />
      <TestimonialCasestudySection />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout