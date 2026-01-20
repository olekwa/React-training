export default function Services(){
    return (
        <>
            <div className="service-container">
                <div className="service-section">
                    <p>Services</p>
                    <h1>We can fill any gap in your funnel <span className="top-color">top to bottom</span>.</h1>
                </div>

                <div className="service-card ">
                    <div className="service-box service-card-1">
                        <div className="service-card-img">
                            <img src="/images/prom.png" alt="Ads" />
                        </div> 
                        <div className="service-card-text">
                            <p>Capture Demand</p>
                            <h3>Intent Based Advertising</h3>
                            <p>We help manage, optimize, and bring life into always-on demand capture environments like pay-per-click search and remarketing. We can install and/or manage your attribution infrastructure for tightly integrated data-driven optimization and management of campaigns.</p>
                        </div>
                    </div>
                    <div className="service-box service-card-2">
                        <div className="service-card-img-2">
                            <img src="/images/prom1.png" alt="Ads" />
                        </div> 
                        <div className="service-card-text">
                            <p>Create Demand</p>
                            <h3>Sponsorship, Partnership, and Content-Driven Marketing</h3>
                            <p>By collaborating with influencers, email newsletters, online-communities, affiliates, and producing sponsored content, we help you create demand and drive brand awareness through authentic engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}