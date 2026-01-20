


export default function About(){
    return(
        <>
            <div className="about-section">
                <div className="about-img-container">
                    <img src="./image/videothumnail.jpeg" alt="" />
                </div>
                <div className="hero-text-container">
                    <div className="about-text-bold">
                        <h1>
                            Allcaps System: For agencies & media companies
                        </h1>
                    </div>
                    <div className="hero-text-check">
                        <div className="about-body-text">
                                <p>
                                Over the years, Allcaps has built a highly specialized team of writers, organized by industry and native in a variety of languages.
                                <br /> 
                                <br />
                                Our services cover every step of the content creation process—from thorough topic research and crafting detailed SEO briefs to producing high-quality content and rigorously managing SEO and quality control. We ensure every piece meets the highest standards before seamlessly publishing it into the CMS. 
                            </p>
                        </div>
                        
                    </div>
                    <div className="hero-btn">
                        <a className="mobile-btn" href="#contact">Request a free article</a>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <div className="stats">
                    <h1>+1500</h1>
                    <p>Ø articles written per month</p>
                </div>
                <div className="stats">
                    <h1>+89%</h1>
                    <p>Ø Costs saved per client</p>
                </div>
                <div className="stats">
                    <h1>+12</h1>
                    <p>Languages</p>
                </div>
                <div className="stats">
                    <h1>+45</h1>
                    <p>SEO writers, editors, QC- & Content Managers</p>
                </div>
            </div>
        </>
    )
}