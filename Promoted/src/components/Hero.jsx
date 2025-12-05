export default function Hero({children}){
  return(
    <>
      <div className="hero-section">
        {children}
        <div className="hero-section-text">
          <h1>
            Experience an agency that understands your business.
          </h1>
        </div>
        <div className="hero-section-sectext"> 
          <div className="hero-sectext">
            <p>
              17 years of proven results, hundreds of millions in ad spend, and deep technical expertise. We run your campaigns from start to finish so you can focus on what really matters.
            </p>
          </div>
          <div className="btn-hero">
            <button className="btn-1">Get Started</button>
            <button className="btn-2">See Pricing</button>
          </div>
        </div>
      </div>

    </>
  )
}