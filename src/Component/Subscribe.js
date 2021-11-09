import React from 'react';

function Subscribe() {
    return (
        // <div className='d-flex justify-content-center flex-wrap'>
            <div>
            <div id="contact" className="subscribe">
            
            <div className="container">
            <h2>Subscribe to our newsletter!</h2>
            <p class="pb-2 text-center ar-grey-font"> <b>Delivering the latest product trends and industry news straight to your inbox</b> </p>

            <div className="form-group">
                            <div className='col-md-4 mx-auto'>
                            <input type="email" className="form-control-input my-0 " placeholder="Email" required />
                            </div>
                                
                                <small class="form-text text-black-50">We’ll never share your email address with a third-party. </small>
                            </div>
                            
                            <a className="btn-solid-lg" href="#contact">Submit</a>
            </div> 
            

            {/* Get started with Arnxt sextion---------------------------- */}
            <div className="basic-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container mx-auto">
                            <h2>Get started with ARnxt!</h2>
                            
                            <a className="btn-solid-lg my-3" href="#contact">Try Now</a>
                            <a className="btn-solid-lg my-3" href="/contact">Contact Us</a>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div>



         {/* Get started with Arnxt sextion ends here---------------------------- */}



        </div>
        



        </div>
    )
}

export default Subscribe;
