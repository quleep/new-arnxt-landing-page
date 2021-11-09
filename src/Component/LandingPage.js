import React, {useEffect} from "react";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { IoLayersOutline } from "react-icons/io5";
import { BsSpeedometer } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function LandingPage() {


  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div>
      {/* Header starts here ------------------------------------------------------------------------ */}

      <header id="header" className="header">
        <div className="container-fluid">
          <div className="d-flex mx-3 justify-content-center">
            <div className="col-lg-6 pt-xl-5 col-md-6 col-xl-7 text-center">
              <div className="text-container">
                <h1 className="h1-large">
                  Experiential Commerce <br />A Marketplace for "TRY & BUY"
                </h1>

                <h2>Download Now!

                </h2>

                <FaGooglePlay className='font' style={{fontSize:'70px'}} />

                <DiApple className='font' style={{fontSize:'80px'}} />


               

                {/* <a className="btn-solid-sm" href="#services"> {" "} Download Now </a> 
                <br /> 
                <br /> 
                <br />
                <a className="btn-solid-sm" href="#services"> {" "}  Download Now </a> */}
                {/* <a className="btn-solid-lg" href="#services">Scheduled Demo</a>
                                    <a className="btn-solid-lg" href="#services">Product Video</a> */}
                <br />
                <br />
                <p className="p-large">
                  View 3D products in your space through our world Classname App
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 col-md-6 ar-mobile-ui">
              <div className="d-flex justify-content-center align-items-end">
                <div className="animate-img-1">
                  <Fade distance="20px" duration="1000" right>
                    <img
                      className="img-1"
                      src="assets/images/header-image1.png"
                      alt="alternative"
                    />
                  </Fade>
                </div>
                <div className="animate-img-2">
                  <Fade
                    distance="20px"
                    duration="1000"
                    up
                  >
                    <img
                      className="img-2"
                      src="assets/images/header-image2.png"
                      alt="alternative"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header ends here --------------------------------------------------------------------------------- */}

      {/* Services starts here ----------------------------------------------------------------------------- */}

      <div id="services" className="cards-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Explore our services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-icon mx-auto">
                  <span className="fas">
                    <VscTools className="ar-theme-color" />
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Your own content</h5>
                  <p>
                    You can have your own content in AR that you and world can
                    experience
                  </p>
                  {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                </div>
              </div>

              <div className="card">
                <div className="card-icon mx-auto red">
                  <span className="far">
                    {" "}
                    <IoLayersOutline className="ar-theme-color" />{" "}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Upload your self</h5>
                  <p>
                    You will not need help from anyother person to upload your
                    models or images
                  </p>
                  {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                </div>
              </div>

              <div className="card">
                <div className="card-icon mx-auto green">
                  <span className="far">
                    {" "}
                    <BsSpeedometer className="ar-theme-color" />{" "}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Quick & efficiency</h5>
                  <p>You can setup one model under 5 minutes</p>
                  {/* <a className="read-more no-line" href="#">Learn more <span className="fas fa-long-arrow-alt-right"></span></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services ends here --------------------------------------------------------------------------- */}

        {/* Slider starts here------------------------------------------------------------------------------------- */}

        <div className="slider-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>Trusted by World leaders</h4>
                {/* <span className="blue">5000</span>  */}
                <hr className="section-divider" />

                <div className="slider-container">
                  <div className="swiper-container image-slider">
                    <div className="swiper-wrapper d-flex align-items-center">
                      <div className="swiper-slide">
                        <img
                          className="img-fluid"
                          src="assets/images/customer-logo-1.png"
                          alt="alternative"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          className="img-fluid"
                          src="assets/images/customer-logo-2.png"
                          alt="alternative"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          className="img-fluid"
                          src="assets/images/customer-logo-3.png"
                          alt="alternative"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          className="img-fluid"
                          src="assets/images/customer-logo-4.png"
                          alt="alternative"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          className="img-fluid"
                          src="assets/images/customer-logo-5.png"
                          alt="alternative"
                        />
                      </div>

                      {/* <div className="swiper-slide">
                                        <img className="img-fluid" src="assets/images/customer-logo-1.png" alt="alternative" />
                                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider ends here---------------------------------------------------------------------------------- */}

      {/* 3D configurator sections -------------------------------------------------------------------------------- */}

      <div id="details" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="assets/images/details-1.png"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <div className="section-title"></div>
                <h2>3D Configurator</h2>
                <p>
                  Visualize all possible configurations for your product and
                  place it instantly in AR.
                </p>
                <a className="btn-solid-reg" href="#contact">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D configurator sections ends here---------------------------------------------------------------------------- */}

      {/* Augmented reality sections starts here---------------------------------------------------------------------------- */}

      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <div className="section-title"></div>
                <h2>Augmented Reality</h2>
                <p>
                  Let your customers try out and experience products directly
                  from your website. With the Augmented Reality feature your
                  customers can place product virtually at the comfort of their
                  home. Available directly from a browser on iOS and Android
                  devices.{" "}
                </p>
                {/* <a className="btn-outline-reg" href="#">LEARN MORE</a> */}
                <a className="btn-solid-reg" href="#contact">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="assets/images/details-2.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Augmented reality sections ends  here---------------------------------------------------------------------------- */}

      {/* Photorealistic Rendering sections starts here---------------------------------------------------------------------------- */}

      <div id="details" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="assets/images/details-1.png"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <div className="section-title"></div>
                <h2>Photorealistic Rendering</h2>
                <p>
                  Create high-quality visuals instantly for your product with
                  only one click on the ARnxt Platform.
                </p>
                <a className="btn-solid-reg" href="#contact">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photorealistic Rendering sections ends here---------------------------------------------------------------------------- */}

      {/* Testimonials stsrts here ------------------------------------------------------------------------------------------------- */}

      <div className="cards-2 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Customer testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="testimonial-text">
                    “Our Takeout went through the roofs because this was the
                    solution which the entire Industry was looking forward to
                    get the real time Experience of the product.”
                  </p>
                  <div className="testimonial-author">Santosh</div>
                  <div className="occupation">
                    Head – Real Estate, Hero Motocorp Ltd
                  </div>
                </div>
                <div className="gradient-floor red-to-blue"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="testimonial-text">
                    “A great platform to showcase all our products digitally
                    with LIVE visualization”
                  </p>
                  <div className="testimonial-author">Ranjan Tarafder</div>
                  <div className="occupation">
                    NSM @ INDIA’s Largest Wallcoverings Organisation
                  </div>
                </div>
                <div className="gradient-floor purple-to-green"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="testimonial-text">
                    “Our sales lead and customer delight has grown exponentially
                    with the help of ARNnxt platform. A great product for all –
                    Sellers as well as buyers.”
                  </p>
                  <div className="testimonial-author">Manuj Sharma</div>
                  <div className="occupation">CSA, Schneider Electric</div>
                </div>
                <div className="gradient-floor red-to-blue"></div>
              </div>

              <div className="card">
                <img
                  className="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="testimonial-text">
                    “Helping our customers succeed”
                  </p>
                  <div className="testimonial-author">Manish Upadhyay</div>
                  <div className="occupation">
                    Vice President - Supply Chain &amp; Emerging Business at H
                    &amp; R Johnson (India)
                  </div>
                </div>
                <div className="gradient-floor blue-to-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials ends here ----------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default LandingPage;
