import React from 'react';

function ContactUs() {
    return (
        <div>
             <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <div className="section-title"></div>
                            <h1>Have a question on your mind? Get in touch with us!</h1>
                            <p>Our door is always open to help you with any question you might have about our service!</p>
                            <br/>
                            <br/>
                            <br/>

                        
                          <h2>Can't find what you are looking for?</h2>
                          <p>Call us or send us an email. We will get back to you as soon as possible. Thanks!!</p>
                          <h2>+91 98041 99881 | care@arnxt.com</h2>
                        </div> 
                    </div> 
                    <div className="col-lg-6">

                       
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control-input" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Contact Number" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Last Name" required />
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Company Name" required />
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control-input" placeholder="Type Your Queries Here" required />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">Submit</button>
                            </div>
                        </form>
                      

                    </div> 
                </div>
            </div> 
        </div>
        </div>
    )
}

export default ContactUs;
