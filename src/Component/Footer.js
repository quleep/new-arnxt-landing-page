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
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <ul className="list-unstyled li-space-lg p-small text-center">
                          <li>
                            <Link to="/blog">BLOG</Link>
                          </li>
                          <li>
                            <Link to="/contact">CONTACT US</Link>
                          </li>
                          <li>
                            <Link to="/termsandconditions">
                              TERMS & CONDITIONS
                            </Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">PRIVACY POLICY</Link>
                          </li>
                          <li>
                            <Link to="/faqs">FAQS</Link>
                          </li>
                          <li>
                            <Link to="/contact">HELP</Link>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-container">
                  <span className="fa-stack">
                    <a href="https://www.facebook.com/ARNXT/" target="blank">
                      {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                      <img className="footer-image" src="assets/images/facebook.png" alt="" />
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="https://twitter.com/ARNXT1" target="blank">
                    <img className="footer-image-twitter" src="assets/images/twitter.png" alt="" />
                      {/* <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i> */}
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.linkedin.com/company/arnxt"
                      target="blank"
                    >
                      <img className="footer-image" src="assets/images/linkedin.png" alt="" />
                      {/* <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-linkedin fa-stack-1x"></i> */}
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.instagram.com/arnxt2021/"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/instagram.png" alt="" />
                      {/* <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-instagram fa-stack-1x"></i> */}
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a
                      href="https://www.youtube.com/channel/UCeMwHXO9Y_L5mAc0jKmxT4A"
                      target="blank"
                    >
                      <img className="footer-image-instagram" src="assets/images/youtube.png" alt="" />
                      {/* <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-youtube fa-stack-1x"></i> */}
                    </a>
                  </span>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-center mx-auto">
                  <p className="p-small statement">
                    Copyright 2021, Quleep. All Right Reserved
                    <Link to="/"></Link>
                  </p>
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
    );
}

export default Footer;
