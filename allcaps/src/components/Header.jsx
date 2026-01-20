import { useState, useEffect, useRef } from 'react'



export default function Header() {
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
  
    return (
    <>
        <div className="header-container">
            <div className="logo">
                <img src="./image/md2x.png" alt="ALLCAPS Logo" />
            </div>
            <div className="nav-desktop">
                  <nav>
                    <ul>
                        <li><a href="#strategy">Strategy</a></li>
                        <li><a href="#our-team">Our team</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="nav-button">
                        <div className="hero-btn ">
                          <a className="mobile-btn header-btn" href="#contact">Request a free article</a>
                        </div>
                        <a href="http://linkedin.com.com" target="_blank" rel="noopener noreferrer"><i  className="fa-brands fa-square-linkedin linkedin"></i></a>
                        <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer"><i  className="fa-brands fa-whatsapp whatsapp"></i></a>
                    </div>
                </nav>
            </div>

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
        <nav 
            className={`nav-mobile ${isMobileMenuOpen ? "open" : ""}`} 
            ref={mobileMenuRef}
        >
            <ul>
                <li><a href="#strategy">Strategy</a></li>
                <li><a href="#our-team">Our team</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a className="mobile-btn" href="#contact">Request a free article</a>

            <div className="mobile-socio-icon">
                <a href="#"><i className="fa-brands fa-square-linkedin linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp whatsapp"></i></a>
            </div>
        </nav>
    </>
  )
}

    


           
            