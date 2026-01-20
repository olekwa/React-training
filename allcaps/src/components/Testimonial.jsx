export default function Testimonial(){
    const testimonialCards = [
        {
            id: 1,
            imgSrc: "./image/test-img1.png",
            altText: "Text Image1",
            name:"Nina Dulic",
            position:"Site Manager at Kryptoszene.de",
            icon: <a href="#"><i className="fa-brands fa-square-linkedin linkedin"></i></a>,
            bodyText: "“ Working with Allcaps is great. The team does an excellent job and always completes our text assignments on time. What we  like is the fact that they stay in touch with us and  ask if we are satisfied with their services.“"
        },
        {
            id: 2,
            imgSrc: "./image/test-img2.jpeg",
            altText: "Text Image1",
            name:"Dennis Kussel",
            position:"Head of Content at Techopedia.com",
            icon: <a href="#"><i className="fa-brands fa-square-linkedin linkedin"></i></a>,
            bodyText: "“ Working with the Allcaps team is incredibly easy and above all efficient. The pace and adaptability for different types of content are definitely the main USPs of the Allcaps team.“"
        },
        {
            id: 3,
            imgSrc: "./image/test-img3.jpeg",
            altText: "Text Image1",
            name:"Silvia Pedrotti",
            position:"Head of SEO at Game Lounge Ltd.",
            icon: <a href="#"><i className="fa-brands fa-square-linkedin linkedin"></i></a>,
            bodyText: "“ They delivered high-quality sports betting content with precision, adhering to the set timeline and briefings, presenting the material in an organized manner tailored for our American audience.“"
        }
    ]
    
    
    return(
        <>
            <div id="testimonial" className="testimonial-section">
                <div className="testimonial-bg">
                <hr/>
                    <h3>
                        " We have been working with Allcaps for a year now and it’s been a very productive partnership. 
                        <br />
                        <br />
                        As an agency that demands high quality but a lot of flexibility, the team at Allcaps has been great. Together we’ve made a lot of improvements to our content process and article quality, and we feel like Allcaps is more of an extension of our agency versus a separate service provider. 
                        <br />
                        <br />
                        Communication is extremely important with any agency relationship and we’ve been well supported by Allcaps who are always available to discuss ideas and issues."
                    </h3>

                    <p>CEO at Blockovate.io</p>
                </div>
                <div className="testonial-card-container">
                    <div className="testimonial-cards">
                        {testimonialCards.map((cards) => (
                            <div key={cards.id} className="testimonial-card">
                                <div className="card-img">
                                    <img src={cards.imgSrc} alt={cards.altText} />   
                                </div>
                                <div className="card-names">
                                    <h1>{cards.name}</h1>
                                    <p>{cards.position}</p>
                                </div>
                                <div className="card-icon">
                                    {cards.icon}
                                </div>
                                <div className="card-body-text">
                                <p>
                                        {cards.bodyText}
                                    </p> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hero-btn ">
                        <a className="mobile-btn testimonial-btn" href="#contact">Request a free article</a>
                    </div>
                </div>
            </div>
        </>
    )
}