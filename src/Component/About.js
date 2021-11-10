import React, {useEffect} from 'react';

function About() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
                <div className="section-title"></div>
                <h2>ABOUT US</h2>
                <p className="about-title">
                  Our door is always open to help you with any question you
                  might have about our service!
                </p>

                {/* <a className="btn-outline-reg" href="#">Details</a> */}
                <br />
                <br />
                <br />
                <p className="about-details">
                  
                  <bold>
                    
                    ARnxt, a Made in India company that offers a wide range of
                    well-designed, functional home furnishing products at very
                    low prices. This is to ensure that a maximum number of
                    people experience this SERVICES. The company's stand-out
                    with its DIY (Do-It-Yourself) features. Now you can yourself
                    design the complete house by choosing from widest range of
                    categories like Furniture, Flooring Elements, Wall Paints,
                    Wall Papers, Bathroom accessories, Decorative and many
                    more..
                  </bold>
                </p>
               
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  style={{ size: "180px" }}
                  src="assets/images/logo7.png"
                  alt="alternative"
                />
                <h2>Vision!</h2>
                <p>"Save money to help people live better"</p>
                <h2>Mission!</h2>
                <p>
                  "Create best Market in the heart of employees and sellers"
                </p>
                <h2>Principle!</h2>
                <p>
                  Customer obsession rather than competitor focus. <br/> Passion for
                  invention. Commitment to operational excellence. <br/> Invent,
                  Simplify & Think Big. Long-team vision to earn Trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
