import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
                    <div className="footer bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="copyright bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <ul className="list-unstyled li-space-lg p-small">
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                            <li><Link to="/terms-conditions">TERMS & CONDITIONS</Link></li>
                            <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                            <li><Link to="/help">HELP</Link></li>
                            <li><Link to="/faqs">FAQS</Link></li>
                        </ul>
                    </div>   
                </div> 
                <div className="col-lg-4 col-md-12 col-sm-12">
                        <p className="p-small statement">Copyright 2021, Quleep. All Right Reserved<Link to="/"></Link></p>
                    </div> 
            </div> 
        </div>
                        <div className="social-container">
                            <span className="fa-stack">
                                <Link to="https://www.facebook.com/ARNXT/">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link to="https://twitter.com/ARNXT1">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link to="https://www.linkedin.com/company/arnxt">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin fa-stack-1x"></i>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link to="https://www.instagram.com/arnxt2021/">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link to="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-youtube fa-stack-1x"></i>
                                </Link>
                            </span>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 

        {/* Footer ends here --------------------------------------------------- */}
       

       {/* Arrow button at the right end------------------------------------ */}
        <button id="myBtn">
            <img src="assets/images/up-arrow.png" alt="alternative" />
        </button>
        </div>
    )
}

export default Footer;
