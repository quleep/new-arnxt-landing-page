import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Pricing() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section id="pricing" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="py-4">
              <div className="row">
                <div className="col-xl-12">
                  <h1 className="h2-heading">
                    {" "}
                    <underline>Plans and pricing</underline>{" "}
                  </h1>
                  <br />
                  <br />
                  <h1 className="p-heading">Billing Cycle :</h1>
                  <br />
                  <br />
                  <a className="btn-solid-lg" href="#contact">
                    Annual
                  </a>
                  <a className="btn-solid-lg" href="/pricing">
                    Monthly
                  </a>

                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h4 className="my-0 font-weight-normal">Premium</h4>
                  <h2 className="card-title pricing-card-title">
                    $99 <small className="text-muted">/ month </small>
                  </h2>
                  <a className="btn-solid-reg" href="#contact">
                    Start 14 day trail
                  </a>
                </div>
                <div className="card-body bg-light">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>50 Products </li>
                    <li>50,000 3D views/month</li>
                    <li>20 Web 3D and App-free Augmented Reality(AR)</li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-block btn-outline-primary">Get started</button> */}
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h4 className="my-0 font-weight-normal">Business Pro</h4>
                  <h2 className="card-title pricing-card-title">
                    $299 <small className="text-muted">/ month </small>
                  </h2>
                  <a className="btn-solid-reg" href="#contact">
                    Start 14 day trail
                  </a>
                </div>
                <div className="card-body bg-light">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>150 Products</li>
                    <li>100,000 3D views/month</li>
                    <li>50 Web 3D and App-free Augmented Reality(AR)</li>
                    <li>3D asset management</li>
                    <li>Product variant support</li>
                    <li>Dimension visualisation</li>
                    <li>QR Code Access to AR</li>
                    <li>3D product export</li>
                    <li>Customize 3D Viewer Icons</li>
                    <li>Product Annotations</li>
                    <li>3D Viewer domain restrictions</li>
                    <li>3D product configurator</li>
                    <li>White label 3D Viewer</li>
                    <li>Virtual Try-On (VTO) support</li>
                    <li>Manage Multiple Accounts</li>
                    <li>3D Viewer API</li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                    <li>
                      <i class="fas fa-window-minimize"></i>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-block btn-outline-primary">Get started</button> */}
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h4 className="my-0 font-weight-normal">Enterprise</h4>
                  <h2 className="card-title pricing-card-title">
                    Custom <small className="text-muted">/ month </small>
                  </h2>
                  <a className="btn-solid-reg" href="#contact">
                    Start 14 day trail
                  </a>
                </div>
                <div className="card-body bg-light">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Number of Products Enterprise</li>
                    <li>Number of 3D views/month Enterprise</li>
                    <li>Photorealistic Renders/month Enterprise</li>
                    <li>Web 3D and App-free Augmented Reality (AR) </li>
                    <li>3D asset management</li>
                    <li>Product variant support</li>
                    <li>Dimension visualisation</li>
                    <li>QR Code Access to AR</li>
                    <li>3D product export</li>
                    <li>Customize 3D Viewer Icons</li>
                    <li>Product Annotations</li>
                    <li>3D Viewer domain restrictions</li>
                    <li>3D product configurator</li>
                    <li>White label 3D Viewer</li>
                    <li>Virtual Try-On (VTO) support</li>
                    <li>Manage Multiple Accounts</li>
                    <li>3D Viewer API</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  {/* <button type="button" className="btn btn-block btn-outline-primary">Get started</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
