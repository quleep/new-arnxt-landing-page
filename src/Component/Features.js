import React, {useEffect} from 'react';

function Features() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="h2-heading">ARnxt App Features</h2>
              <p className="p-heading">
                Mobile app offer all the features you need to customize your
                interior
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <div className="accordion-icon">
                    <span className="fas fa-tv"></span>
                  </div>
                  <div className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Place Objects
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Place furniture, Appliances etc. from an large collection
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-icon blue">
                    <span className="fas fa-microphone"></span>
                  </div>
                  <div className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Customize
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Change position, rotation or scale of your product in
                      realtime
                    </div>
                  </div>
                  {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Change position, rotation or scale of your product in realtime</div>
                                </div> */}
                </div>

                <div className="accordion-item">
                  <div className="accordion-icon purple">
                    <span className="fas fa-video"></span>
                  </div>
                  <div className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Change your walls
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Tryout vast collection of wallpapers or tiles
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-icon orange">
                    <span className="fas fa-tools"></span>
                  </div>
                  <div className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Save and Share
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Save your designs and share with others
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-icon">
                    <span className="fas fa-tv"></span>
                  </div>
                  <div className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Buy Directly
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Purchase products directly from the app
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="accordion-icon">
                    <span className="fas fa-tv"></span>
                  </div>
                  <div className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Change Floors
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {" "}
                      Change tiles on your floors
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="assets/images/feature-dashboard.gif"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
