
 

export default function Contact(){
    return(
        <>
            <div id="contact" className="contact-section">
                <div className="contact-cards">
                    <div className="contact-details">
                        <h1>Request a quote</h1>
                        <p>
                            Whether you need expertly written SEO articles, personalized copy, or scalable content across multiple languages, we’re here to help.
                            <br />
                            <br />
                            Our team of skilled writers, editors, proofreaders and SEO content managers will craft content with quick turnaround times without compromising quality.
                            <br />
                            <br />
                            Fill out the form to get started, and we’ll provide you with a free quote.
                        </p>
                    </div>
                    <div className="contact-info">
                        <h3>Our office:</h3>
                        <p>Franz-Josefs-Kai 27/3</p>
                        <p>1010 Wien</p>
                        <p className="contact-email">office@allcaps.media</p>
                        <p>+43 677 64740946</p>
                    </div>
                </div>
                <div className="contact-cards">
                    <form>
                        <div class="input-group">
                            <label>Name*</label>
                            <input type="text"  required/>
                        </div>
                        <div class="input-group">
                            <label>Email*</label>
                            <input type="email"  required/>
                        </div>

                        <div class="input-group">
                            <label>Phone</label>
                            <div class="tel-box">
                                <input  type="tel"/>
                            </div>
                        </div>

                        <div class="input-group">
                            <label>Message</label>
                            <textarea  ></textarea>
                        </div>

                        <div className="hero-btn">
                            <button id="contact" type="submit" className="mobile-btn contact-btn">
                                Contact Us
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
        </>
    )
}