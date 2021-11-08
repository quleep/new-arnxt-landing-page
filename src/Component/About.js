import React from 'react';

function About() {
    return (
        <div>
            
            <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container">
                            <div className="section-title"></div>
                            <h2>ABOUT US</h2>
                            <p className="about-title">Our door is always open to help you with any question you might have about our service!</p>

                            {/* <a className="btn-outline-reg" href="#">Details</a> */}
                            <br/>
                            <br/>
                            <br/>
                            <p className='about-details'> <bold> ARnxt, a Made in India company that offers a wide range of well-designed, functional home furnishing products at very low prices. 
                                        This is to ensure that a maximum number of people experience this SERVICES. 
                                        The company's stand-out with its DIY (Do-It-Yourself) features. 
                                        Now you can yourself design the complete house by choosing from widest range of categories like 
                                        Furniture, Flooring Elements, Wall Paints, Wall Papers, Bathroom accessories, Decorative and many more.. </bold> </p>
                             {/* <h2>Vision!</h2>
                             <p>"Save money to help people live better"</p>
                             <h2>Mission!</h2>
                             <p>"Create best Market in the heart of employees and sellers"</p>
                             <h2>Principle!</h2>
                             <p>Customer obsession rather than competitor focus. 
                                Passion for invention. 
                                Commitment to operational excellence. 
                                Invent, Simplify & Think Big. 
                                Long-team vision to earn Trust.</p> */}
                        </div> 
                    </div> 
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                        <img className="img-fluid" style={{height:'200px'}} src="assets/images/logo.png" alt="alternative" />
                            <h2>Vision!</h2>
                             <p>"Save money to help people live better"</p>
                             <h2>Mission!</h2>
                             <p>"Create best Market in the heart of employees and sellers"</p>
                             <h2>Principle!</h2>
                             <p>Customer obsession rather than competitor focus. 
                                Passion for invention. 
                                Commitment to operational excellence. 
                                Invent, Simplify & Think Big. 
                                Long-team vision to earn Trust.</p>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
            
        </div>
    )
}

export default About;
