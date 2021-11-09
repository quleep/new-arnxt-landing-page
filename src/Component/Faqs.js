import React, {useEffect} from 'react';

function Faqs() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 p-5">
      <div className="container text-start">
        {/* heading start */}
        <div className="">
          <h3 className="text-center">Frequently Asked Questions</h3>
        </div>
        {/* heading end */}
        {/* description start */}
        <div name="description" className="my-5 container-fluid ar-grey-font">
          <div className="pane-content">
            <div className="installation-steps">
              <div className="installation-step">
                <b className="step-title">1. What is Sell on ARnxt or SOA?</b>
                <p className="step-content">
                  Sell on ARnxt is a program that enables you to list and sell
                  your product on <a href="https://arnxt.com">ARnxt.com</a>.
                </p>
              </div>
              <div className="installation-step">
                <b className="step-title">
                  2. How does selling on ARnxt.com work?
                </b>
                <p className="step-content">
                  Selling on ARnxt.com is easy. First you list the products that
                  you want to sell on ARnxt.com marketplace. Customer sees your
                  product and makes a purchase. You will receive a notification
                  to ship the product. You deliver the product to the customer
                  and confirm shipment or let ARnxt fulfil the order for you
                  through FBA or Easy ship. ARnxt will deposit the funds into
                  your bank account after deducting our fees.
                </p>
              </div>
              <div className="installation-step">
                <b className="step-title">
                  3. What products can I sell on ARnxt.com?
                </b>
                <p className="step-content">
                  You can sell items in the following categories:
                  <br />
                  Furniture, Bathroom accessories, Electrical Appliances,
                  Electronics, Decorative, Laminates, Wall paints,
                  WallPapersWall Papers, Flooring Materials, Lights and many
                  more.
                </p>
              </div>
              <div className="installation-step">
                <b className="step-title">
                  4. What do I need to register as a seller on ARnxt.com?
                </b>
                <p className="step-content">
                  You will need the following information to register:
                  <br />
                  <ol type="1">
                    <li>Your business details</li>
                    <li>Your contact details - email and phone number</li>
                    <li>Basic information about your business</li>
                    <li>
                      Tax Registration Details (PAN and GST). GST Details are
                      mandatory if you are listing taxable goods and need to be
                      provided at the time of registration
                    </li>
                  </ol>
                </p>
              </div>
              <div className="installation-step">
                <b className="step-title">
                  5. If I list my products using Sell on ARnxt, will the
                  customer know that he or she is purchasing from me on
                  ARnxt.com marketplace?
                </b>
                <p className="step-content">
                  We will clearly indicate on our product detail pages and offer
                  listing pages that the product is sold by you and the invoice
                  will carry your name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
