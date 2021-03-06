import React, {useEffect} from 'react';

function Products() {
    
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="features" className="accordion-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="h2-heading">
                " God has created a unique designer piece in you, Now it's your
                turn to create a designer world around you."
              </h2>
              <p className="p-heading">
                Get personalized experience with ARnxt
              </p>
            </div>
          </div>
          <img
            className="img-fluid"
            style={{ height: "600px" }}
            src="assets/images/Product-image.webp"
            alt=""
          />
          <img
            className="img-fluid"
            style={{ height: "500px" }}
            src="assets/images/Product-image1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Products;

{/* <div className="row">
                    <div className="col-xl-5">
                        <div className="accordion" id="accordionExample">

                            

                        </div> 
                    </div> 
                </div> */}
                {/* <img src="assets/images/Product-image.webp" alt="" /> */}

