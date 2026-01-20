


export default function Hero(){
    return(
        <>
            <div className="hero-section">
                <div className="hero-text-container">
                    <div className="hero-seo-btn">
                        <button>
                         Seo Content at scale
                        </button>
                    </div>
                    <div>
                        <div className="hero-text-bold">
                            <h1>
                                Your partner for  content management in iGaming
                            </h1>
                        </div>
                        <div className="hero-text-check">
                            <div className="check">
                                 <i class="fa-solid fa-circle-check"></i>
                                 <p>Quality-checked, human-written SEO content.</p>
                            </div>
                            <div className="check">
                                 <i class="fa-solid fa-circle-check"></i>
                                 <p>Expertise in iGaming, Gambling, Betting, and more</p>
                            </div>
                            <div className="check">
                                <i class="fa-solid fa-circle-check"></i>
                                <p>Skilled writing team, fluent in 12 native languages</p>
                            </div>
                        </div>
                        <div className="hero-btn">
                            <a className="mobile-btn" href="#contact">Request a free article</a>
                        </div>
                        <div className="partners">
                            <img className="bc" src="./image/bc.png" alt="Better Collectives" />
                            <img className="gig" src="./image/gig.png" alt="GiG" />
                            <img className="finixio" src="./image/finixio.png" alt="Finixio" />
                            <img className="northstar" src="./image/northstar.png" alt="Northstar" />
                        </div>
                    </div>

                </div>
                <div className="hero-img-container">
                    <img src="./image/md2x.jpeg" alt="" />
                </div>
            </div>
        </>
    )
}