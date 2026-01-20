import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of content do you offer?",
      answer: "We offer a wide range of content types including blog posts, articles, website copy, social media content, product descriptions, whitepapers, case studies, email newsletters, and more."
    },
    {
      question: "How does the AI-assisted content differ from human-written content?",
      answer: "Our AI-assisted content combines the efficiency of artificial intelligence with human expertise. AI generates initial drafts quickly, which are then refined, fact-checked, and polished by our experienced human editors to ensure quality, tone, and brand alignment."
    },
    {
      question: "How do you ensure the quality of the content?",
      answer: "We implement a multi-step quality control process: 1) AI-generated content creation, 2) Human editing and refinement, 3) Plagiarism checks, 4) SEO optimization review, 5) Final proofreading. All content is reviewed by our team of experienced writers and editors."
    },
    {
      question: "Do you offer SEO optimization?",
      answer: "Yes, all our content includes basic SEO optimization with keyword integration, meta descriptions, and SEO-friendly structure. We also offer advanced SEO packages that include keyword research, competitor analysis, and ongoing performance tracking."
    },
    {
      question: "Can you handle large-scale content projects?",
      answer: "Absolutely! We specialize in large-scale content projects with scalable solutions. Our AI-assisted system allows us to handle high-volume requests while maintaining quality. We've successfully managed projects requiring 100+ articles per month for various clients."
    },
    {
      question: "What is the typical turnaround time for content delivery?",
      answer: "Standard turnaround is 3-5 business days for most content types. For urgent requests, we offer expedited services with 24-48 hour delivery. Large-scale projects are handled with phased deliveries to ensure consistent quality and timely completion."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">FAQ</h2>
          <p className="faq-subtitle">Frequently Asked Questions</p>
        </div>
        
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;