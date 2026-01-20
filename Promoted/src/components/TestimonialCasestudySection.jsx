import FlipCard from './FlipCard';
import './FlipCard.css'; 

export default function TestimonialCasestudySection() {
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
      altText: "Bolt Logo",
      quote: "They didn't just take orders—they brought insights about our audiences and made sure we were buying the right media, not just available media.",
      name: "Mitchell Wright",
      position: "Head of Marketing",
      color: "#d6e8fa"
    },
    {
      id: 3,
      imgSrc: "/images/block.gif",
      altText: "Block Logo",
      quote: "Promoted helped us scale our endemic and direct media program during an incredibly hectic time, making it possible to plan and execute our holiday campaign.",
      name: "Jason Karsh",
      position: "Business Lead",
      color: "#3adecd"
    },
  ];

  const casestudyData = [
    {
      id: 1,
      h1: "From paid placements to co-creation labs",
      quote: "How we transformed Agent.ai's marketing strategy from traditional advertising to innovative creator partnerships, driving authentic engagement and scalable growth.",
      firstTitle: "Client Overview",
      firstTitleText: "Agent.ai is a marketplace and professional network for AI agents and the people who love them. You can discover, connect with and hire AI agents to do useful things.",
      secondTitle: "Objectives",
      secondTitleText: "Engage the technical community to build and showcase AI agents, creating the first class of Agent.ai builders.",
      thirdTitle: "Our Approach",
      thirdTitleText: [
        "Partnered with Dev.to for a comprehensive hackathon experience",
        "Created tiered challenge prompts to accommodate different skill levels",
        "Implemented multi-channel promotion strategy"
      ],
      fourthTitle: "Results Delivered",
      fourthTitleText: [
        "Valid submissions from participants: 184 from 139",
        "Total post pageviews: 55,271",
        "Reactions and comments: 515 + 248"
      ],
      color: "#f6f9fa"
    },
    {
      id: 2,
      h1: "How Bolt.new Cut Ad Costs 17% While Accessing Previously Unavailable Premium Inventory",
      quote: "When your marketing team is stretched thin but growth can't wait, you need partners who function as true extensions of your team—not just order-takers.",
      firstTitle: "Client Overview",
      firstTitleText: "Bolt.new is a web-based tool that lets you create websites, apps, or prototypes by giving instructions in natural language.",
      secondTitle: "The Challenge",
      secondTitleText: "Bolt.new faced the common startup challenge: a lean team with growing responsibilities and limited time. They needed to scale their marketing efforts but didn't have the bandwidth to drive media buying execution themselves.",
      thirdTitle: "Our Approach",
      thirdTitleText: [
        "Instead of traditional agency oversight, Promoted integrated directly into Bolt.new's strategy and execution. We became an extension of their marketing team, bringing both strategic insights and execution expertise."
      ],
      fourthTitle: "Results Delivered",
      fourthTitleText: [
        "17% Cost savings on ads",
        "Secured exclusive Adobe Behance advertising access—first time offered in 10+ years",
        "Lightspeed Activation"
      ],
      color: "#d6e8fa"
    },
    {
      id: 3,
      h1: "Scaling holiday campaigns",
      quote: "Supporting Block's rapid growth during peak season through strategic media planning and execution.",
      firstTitle: "Client Overview",
      firstTitleText: "Block is a financial services and digital payments company providing tools for businesses and individuals.",
      secondTitle: "Objectives",
      secondTitleText: "Successfully scale holiday marketing campaigns while maintaining message consistency and budget efficiency.",
      thirdTitle: "Our Approach",
      thirdTitleText: [
        "Phased campaign rollout across key markets",
        "Integrated cross-channel marketing strategy",
        "Proactive budget allocation and optimization"
      ],
      fourthTitle: "Results Delivered",
      fourthTitleText: [
        "Campaign scaled to 300% of previous year's reach",
        "Maintained 95% message consistency across channels",
        "Achieved 150% of holiday sales targets"
      ],
      color: "#3adecd"
    },
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-text">
        <p>What everyone is saying</p>
        <h2>Trusted by industry leaders.</h2>
      </div>
      
      <div className="flip-grid">
        {testimonialData.map((testimonial) => (
          <FlipCard
            key={testimonial.id}
            id={testimonial.id}
            testimonialData={testimonialData}
            caseStudyData={casestudyData}
          />
        ))}
      </div>
      
      <div className="testimonial-cta">
        <div className="cta">
          <p>
            Join the best sellers in the business and start using Promoted to hit your targets today.
          </p>
          <a className="get-started-button" href="#">
            Get Started Now
            <i className="fa-solid fa-arrow-right-long"></i>
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
  );
}