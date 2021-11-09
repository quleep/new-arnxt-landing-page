import React, {useEffect} from 'react';

function ContactUs() {
    
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title"></div>
                <h1>We are always open to help you with your questions about our services. <br/> Write to us here!</h1>
                

                
                <p> Can't find what you are looking for?
                  Call us or send us an email. <br/> We will get back to you as soon
                  as possible. Thanks!!
                </p>
                <h2>+91 98041 99881 | care@arnxt.com</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    placeholder="Contact Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    placeholder="Type Your Queries Here"
                    required
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
