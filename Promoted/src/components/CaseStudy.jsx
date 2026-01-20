import { useEffect, useRef } from "react";

export default function CaseStudy() {

    const scrollRefs = useRef([]);
    const bodyRefs = useRef([]);

    const casestudyData = [
        {
            id: 1,

            h3: "Case Study",
            h1: "From paid placements to co-creation labs",
            
            quote: "How we transformed Agent.ai's marketing strategy from traditional advertising to innovative creator partnerships, driving authentic engagement and scalable growth.",

            firstTitle: "Clien Overview",
            firstTitleText: "Agent.ai is a marketplace and professional network for AI agents and the people who love them. You can discover, connect with and hire AI agents to do useful things. Builders can create advanced AI agents using an easy, extensible, no-code platform with data tools and access to frontier LLMs.",

            secondTitle: "Objectives",
            secondTitleText: "Engage the technical community to build and showcase AI agents, creating the first class of Agent.ai builders",

            thirdTitle: "Our approach:",
            thirdTitleText: [
                "Partnered with Dev.to for a comprehensive hackathon experience",
                "Created tiered challenge prompts to accommodate different skill levels",
                "Implemented multi-channel promotion strategy"
            ],

            fourthTitle: "Results Delivered",
            fourthTitleText: [
                "Valid submissions from participants 184 from 139",
                "Total post pageviews 55,271",
                "Reactions and comments 515 + 248"
            ],

            color: "#f6f9fa"
        },
        {
            id: 2,
            h3: "Case Study",
            h1: "From paid placements to co-creation labs",
            
            quote: "How we transformed Agent.ai's marketing strategy from traditional advertising to innovative creator partnerships, driving authentic engagement and scalable growth.",

            firstTitle: "Clien Overview",
            firstTitleText: "Agent.ai is a marketplace and professional network for AI agents and the people who love them. You can discover, connect with and hire AI agents to do useful things. Builders can create advanced AI agents using an easy, extensible, no-code platform with data tools and access to frontier LLMs.",

            secondTitle: "Objectives",
            secondTitleText: "Engage the technical community to build and showcase AI agents, creating the first class of Agent.ai builders",

            thirdTitle: "Our approach:",
            thirdTitleText: [
                "Partnered with Dev.to for a comprehensive hackathon experience",
                "Created tiered challenge prompts to accommodate different skill levels",
                "Implemented multi-channel promotion strategy"
            ],

            fourthTitle: "Results Delivered",
            fourthTitleText: [
                "Valid submissions from participants 184 from 139",
                "Total post pageviews 55,271",
                "Reactions and comments 515 + 248"
            ],

            color: "#d6e8fa"
        },
        {   id: 3,
             h3: "Case Study",
            h1: "From paid placements to co-creation labs",
            
            quote: "How we transformed Agent.ai's marketing strategy from traditional advertising to innovative creator partnerships, driving authentic engagement and scalable growth.",

            firstTitle: "Clien Overview",
            firstTitleText: "Agent.ai is a marketplace and professional network for AI agents and the people who love them. You can discover, connect with and hire AI agents to do useful things. Builders can create advanced AI agents using an easy, extensible, no-code platform with data tools and access to frontier LLMs.",

            secondTitle: "Objectives",
            secondTitleText: "Engage the technical community to build and showcase AI agents, creating the first class of Agent.ai builders",

            thirdTitle: "Our approach:",
            thirdTitleText: [
                "Partnered with Dev.to for a comprehensive hackathon experience",
                "Created tiered challenge prompts to accommodate different skill levels",
                "Implemented multi-channel promotion strategy"
            ],

            fourthTitle: "Results Delivered",
            fourthTitleText: [
                "Valid submissions from participants 184 from 139",
                "Total post pageviews 55,271",
                "Reactions and comments 515 + 248"
            ],
            color: "#3adecd"
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

        

        // useEffect(() => {
        //     scrollRefs.current.forEach((scrollEl, idx) => {
        //       const bodyEl = bodyRefs.current[idx];
        //       if (!scrollEl || !bodyEl) return;
        

        //       const max =
        //       scrollEl.scrollHeight - bodyEl.clientHeight;
      
        //     scrollEl.style.setProperty(
        //       "--scroll-distance",
        //       max > 0 ? `-${max}px` : "0px"
        //     );
        //   });
        //   }, [activeId]);

        //   const startScroll = (idx) => {
        //     const el = scrollRefs.current[idx];
        //     if (!el) return;
        
        //     const dist = Math.abs(
        //       parseFloat(
        //         el.style.getPropertyValue("--scroll-distance")
        //       )
        //     );
        
        //     if (!dist) return;
        
        //     el.style.animation = `autoScroll ${dist / 20}s linear infinite alternate`;
        //   };
        
        //   const stopScroll = (idx) => {
        //     const el = scrollRefs.current[idx];
        //     if (el) el.style.animation = "";
        // };
    

        useEffect(() => {
            // calculate scroll distance for each card
            scrollRefs.current.forEach((scrollEl, idx) => {
              const bodyEl = bodyRefs.current[idx];
              if (!scrollEl || !bodyEl) return;
        
              const contentHeight = scrollEl.scrollHeight;
              const visibleHeight = bodyEl.clientHeight;
              const distance = contentHeight - visibleHeight;
        
              if (distance > 0) {
                scrollEl.style.setProperty("--scroll-distance", `-${distance}px`);
              } else {
                scrollEl.style.setProperty("--scroll-distance", `0px`);
              }
            });
          }, []);
        
          const handleMouseEnter = (idx) => {
            const scrollEl = scrollRefs.current[idx];
            if (!scrollEl) return;
        
            const distance = scrollEl.style.getPropertyValue("--scroll-distance");
            if (!distance || distance === "0px") return;
        
            // calculate duration based on distance (pixels / speed factor)
            const px = Math.abs(parseFloat(distance));
            const duration = px / 20; // 20px per second speed
        
            scrollEl.style.animation = `autoScroll ${duration}s linear infinite alternate`;
          };
        
          const handleMouseLeave = (idx) => {
            const scrollEl = scrollRefs.current[idx];
            if (!scrollEl) return;
            scrollEl.style.animation = "";
          };
    
    return(
        <>
            <div className="casestudy-section"> 
                
                <div className="casestudy-content">       {casestudyData.map((item, idx) => ( 
                    <div 
                        key={item.id} className= "casestudy-card"  style={{backgroundColor: item.color}}
                    >

                    <div className="casestudy-body"   
                    ref={(el) => (bodyRefs.current[idx] = el)} 
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                    > 

                        <div className="casestudy-scroll" ref={(el) => (scrollRefs.current[idx] = el)}>
                        
                            <p className="casestudy-h3">{item.h3}</p>
                            <h1 className="casestudy-h1">{item.h1}</h1>
                        
                            <p className="casestudy-quote">"{item.quote}"</p> 

                            <hr />
                            
                            <h2 className="casestudy-firsttitle">{item.firstTitle}</h2>
                            <p className="casestudy-firsttitletext">{item.firstTitleText}</p>
                            
                            <hr />
                            <h2 className="casestudy-secondtitle">{item.secondTitle}</h2>
                            <p className="casestudy-secondtitletext">{item.secondTitleText}</p>
                            <hr />
                            <h2 className="casestudy-thirdtitle">{item.thirdTitle}</h2>  
                            <ul className="casestudy-thirdtitletext">
                            {item.thirdTitleText.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                            </ul>
                            <hr />
                            <h2 className="casestudy-fourthtitle">{item.fourthTitle}</h2>
                            <ul className="casestudy-fourthtitletext">
                            {item.fourthTitleText.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                            </ul>
                        </div>

                        
                    
                        </div>
                        
                        <button href="#" className="case-study-button"> View the Case Study <i class="fa-solid fa-arrow-right-long"></i> </button> 
                    </div> 
                
                ))} 
            </div> 
            <div className="casestudy-cta">
                
            </div> 
            </div> 
        </>
                
    )
}