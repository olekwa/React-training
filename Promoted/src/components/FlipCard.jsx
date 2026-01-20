import { useState, useEffect, useRef } from 'react';
import './FlipCard.css';

export default function FlipCard({ id, testimonialData, caseStudyData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const scrollRef = useRef(null);
  const bodyRef = useRef(null);

  const testimonial = testimonialData.find(item => item.id === id);
  const caseStudy = caseStudyData.find(item => item.id === id);

  // Auto-scroll setup for case study
  useEffect(() => {
    if (isFlipped && scrollRef.current && bodyRef.current) {
      const contentHeight = scrollRef.current.scrollHeight;
      const visibleHeight = bodyRef.current.clientHeight;
      const distance = contentHeight - visibleHeight;
      
      if (distance > 0) {
        // Set CSS custom property for scroll distance
        scrollRef.current.style.setProperty('--scroll-distance', `-${distance}px`);
        
        // Calculate animation duration
        const duration = distance / 25; // Adjust speed here (25px per second)
        scrollRef.current.style.animation = `autoScroll ${duration}s linear infinite alternate`;
      }
    }
    
    // Cleanup animation when component unmounts or flips back
    return () => {
      if (scrollRef.current) {
        scrollRef.current.style.animation = '';
      }
    };
  }, [isFlipped]);

  // Handle mouse enter/leave for scroll animation
  const handleMouseEnter = () => {
    if (isFlipped && scrollRef.current) {
      const distance = scrollRef.current.style.getPropertyValue('--scroll-distance');
      if (distance && distance !== '0px') {
        scrollRef.current.style.animationPlayState = 'running';
      }
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  if (!testimonial || !caseStudy) return null;

  return (
    <div 
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT SIDE - Testimonial */}
        <div className="flip-card-side flip-card-front">
          <div className="card-content testimonial-card" style={{ backgroundColor: testimonial.color }}>
            <div className="logo-container">
              <img 
                src={testimonial.imgSrc} 
                alt={testimonial.altText}
                className="company-logo"
              />
            </div>
            
            <div className="quote-container">
              <p className="quote-text">"{testimonial.quote}"</p>
            </div>
            
            <div className="author-info">
              <hr className="divider" />
              <p className="author-name">{testimonial.name}</p>
              <p className="author-role">{testimonial.position}</p>
            </div>
            
            <button className="action-button">
              View Case Study <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>

        {/* BACK SIDE - Case Study */}
        <div className="flip-card-side flip-card-back">
          <div 
            className="card-content casestudy-card" 
            style={{ backgroundColor: caseStudy.color }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="case-content" ref={bodyRef} >
              <div ref={scrollRef} className="case-scrollable-area">

                <div className="case-header" >
                  <span className="case-badge">Case Study</span>
                  <h3 className="case-title">{caseStudy.h1}</h3>
                  <p className="case-intro">"{caseStudy.quote}"</p>
                </div>
                
                {/* Scrollable content area with auto-scroll */}
                <div className="scrollable-content">
                  <div 
                    className="scroll-content-wrapper">
                    <div className="case-section">
                      <h4 className="section-title">{caseStudy.firstTitle}</h4>
                      <p className="section-text">{caseStudy.firstTitleText}</p>
                    </div>
                    
                    <div className="case-section">
                      <h4 className="section-title">{caseStudy.secondTitle}</h4>
                      <p className="section-text">{caseStudy.secondTitleText}</p>
                    </div>
                    
                    <div className="case-section">
                      <h4 className="section-title">{caseStudy.thirdTitle}</h4>
                      <ul className="bullet-list">
                        {caseStudy.thirdTitleText.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="case-section">
                      <h4 className="section-title">{caseStudy.fourthTitle}</h4>
                      <ul className="bullet-list">
                        {caseStudy.fourthTitleText.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="action-button">
              View Case Study <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}