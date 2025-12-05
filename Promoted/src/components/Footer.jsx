export default function Footer(){
    return(
        <>  
            <div className="footer-section">
                <div className="footer-inner">
                    <div className="footer-content">
                        <div className="footer-text">
                            <p>Get started</p>
                            <h2>Growth Starts Here</h2>
                            <p className="p-2">Let's Build Your Paid Media Engine</p>
                        </div>
                        <div className="footer-form-section">
                            <div className="footer-form">
                                <input type="text" required placeholder="First name"/>
                                <input type="text" required placeholder="Last name" />
                                <input type="email" required
                                placeholder="Work email address" />
                                <input type="tel" placeholder="Phone number" />
                                <input type="text" required placeholder="Company name"/>
                                <input type="url" required placeholder="Company website URL"/>
                            </div>
                            <div className="form-bottom">
                                <textarea name="" id="" required placeholder="What else should we know?"></textarea>
                                <button type="submit">Let's talk</button>
                            </div>
                        </div>  
                    </div>
                
                    <div className="footer-menu-section">
                        <div className="footer-logo">
                            <img src="./logo.png" alt="" />
                            <p>© 2025 Promoted.com, LLC</p>
                        </div>
                        <div className="footer-menu">
                            <div className="footer-menu1">
                                <a className="menu-col">Products</a>
                                <a href="/overview">Overview</a>
                                <a href="/pricing">Pricing</a>

                            </div>
                            
                            <div className="footer-menu2">
                                <a className="menu-col">Company</a>
                                <a href="/about">About</a>
                                <a href="/blog">Blog</a>
                            </div>
                            
                            
                            <div className="footer-menu3">
                                <a className="menu-col">Support</a>
                                <a href="/contact">Contact Us</a>
                            </div>
                            
                            <div className="footer-menu4">
                                <a className="menu-col">Company</a>
                                <a href="/privacy-policy">Privacy Policy</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}