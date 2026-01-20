
import { useHover } from "./HoverContext";

export default function Testimonial() {
  const { setActiveId } = useHover();
  
  const testimonialData = [
    {
      id: 1,
      imgSrc: "/images/agentaii.gif",
      altText: "agentai Logo",
      quote: "Promoted has become essential to hitting our goals. From media planning to execution, it's hard to imagine scaling without them as a part of our team.",
      name: "Sam Mallikarjunan",
      position: "General Manager",
      color: "#f6f9fa"
    },
    {
      id: 2,
      imgSrc: "/images/bolt.svg",
      altText: "agentai Logo",
      quote: "They didn't just take orders—they brought insights about our audiences and made sure we were buying the right media, not just available media.",
      name: "Mitchell Wright",
      position: "Head of Marketing",
      color: "#d6e8fa"
    },
  {   id: 3,
      imgSrc: "/images/block.gif",
      altText: "agentai Logo",
      quote: "Promoted helped us scale our endemic and direct media program during an incredibly hectic time, making it possible to plan and execute our holiday campaign.",
      name: "Jason Karsh",
      position: "Business Lead",
      color: "#4ae1d1"
    },

    // {
    //     id: 4,
    //     imgSrc: "/images/mailchimp.gif",
    //     altText: "agentai Logo",
    //     quote: "Promoted helps us find niche audiences where they live, from newsletters to communities.",
    //     name: "Palmer Houchins",
    //     position: "Former Marketing Director",
    //     color: "#ffe649"
    // }
  ]
    

    
    
    
    
  return(
    <>
      <div className="testimonial-section"> 
        <div className="testimonial-text">
            <p>What everyone is saying</p>
            <h2>
                Trusted by industry leaders.
            </h2>
        </div>
          
          <div className="testimonial-content">       {testimonialData.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}  onMouseEnter={() => setActiveId(testimonial.id)}
            onMouseLeave={() => setActiveId(null)} style={{backgroundColor: testimonial.color}}
            > 
                
              <img className="testimonial-image" src={testimonial.imgSrc} alt={testimonial.altText}  /> 
              <p className="testimonial-quote">"{testimonial.quote}"</p> 

              <hr />
              
              <p className="testimonial-name">{testimonial.name}</p> 
              
              <p className="testimonial-position">{testimonial.position}</p> 
              
              <button className="case-study-button"> View the Case Study <i class="fa-solid fa-arrow-right-long"></i> </button> 
            </div>
          ))}

        </div> 
        <div className="testimonial-cta">
            <div className="cta">
                <p>
                    Join the best sellers in the business and start using Promoted to hit your targets today.
                </p>

                <a className="get-started-button" href="http://" target="_blank" rel="noopener noreferrer">
                Get Started Now
                <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
            <div className="slider-box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> 
      </div> 
    </>             
  )
}
