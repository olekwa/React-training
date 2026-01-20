import Header from "./Header"
export default function Footer(props){
    return(
        <>
            <div className="footer-section">
                <div className="footer-section1">
                    <div className="footer-logo">
                        <img src="./image/md2x.png" alt="Allcaps" />
                    </div>
                    <div className="footer-credit">
                        <p>© DSS - Digital Service Solution GmbH. All Rights Reserved 2025.</p>
                    </div>
                    <div className="footer-social">
                        <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section2">
                    <div className="footer-nav">
                        <navbar>
                            <ul>
                                <li><a href="#strategy">Strategy</a></li>
                                <li><a href="#our-team">Our team</a></li>
                                <li><a href="#testimonial">Testimonial</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                            </ul>
                        </navbar>
                    </div>
                    <div className="footer-navbar">
                        <ul>
                            <li>
                                <a href="#">Terms of Business</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>    
                        </ul>
                        <div className="footer-info">

                            <a href="tel:+43 677 64740946">+43 677 64740946</a>    
                            <a href="mailto:office@allcaps.media">office@allcaps.media</a>    
                        </div>
                    </div>
                    <div className="footer-bottom-img">
                        <h2>Get in Touch</h2>
                        <div className="bottom-foot">
                            <div>
                                <img src="./image/footerimg.jpeg" alt="contact" /> 
                            </div>
                            <div className="bottom-foot-name">
                                <h1>Ion Creanaga</h1>
                                <p>Head of Strategy</p>
                            </div>  
                        </div>
                        <div className="hero-btn">
                            <a className="mobile-btn contact-btn" href="#contact">Contact Us</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}