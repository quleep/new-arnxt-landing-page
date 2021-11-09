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
                    Plans and pricing
                  </h1>
                  <br />
                  <br />
                  {/* <h1 className="p-heading">Billing Cycle :</h1> */}
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


            <table className="table table-bordered table-light">
            <thead>
            <tr>
                   <th scope="col">Features</th>
                     <th scope="col">Premium</th>
                       <th scope="col">Business Pro</th>
                   <th scope="col">Enterprise</th>
                 </tr>
            </thead>

               <tbody>
                   <tr>
                   <th scope="row">Number of Products</th>
                   <td>50</td>
                     <td>150</td>
                   <td>Enterprise</td>
                   </tr>


                   <tr>
                    <th scope="row">Number of 3D views/month</th>
                <td>50,000</td>
                <td>100,000</td>
                 <td>Enterprise</td>
                  </tr>

                  
                <tr>
                   <th scope="row">Photorealistic Renders/month</th>
                  <td >20</td>
                  <td>50</td>
                  <td>Enterprise</td>
                </tr>


                <tr>
                   <th scope="row">Web 3D and App-free <br/>
                         Augmented Reality (AR)</th>
                  <td > <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">3D asset management</th>
                  <td > <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">Product variant support</th>
                  <td > <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">Dimension visualisation</th>
                  <td > <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">QR Code Access to AR</th>
                  <td > <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">3D product export</th>
                  <td > <i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">Customize 3D Viewer Icons</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>



                <tr>
                   <th scope="row">Product Annotations</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">3D Viewer domain restrictions</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">3D product configurator</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">White label 3D Viewer</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>


                <tr>
                   <th scope="row">Virtual Try-On (VTO) support</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>

                
                <tr>
                   <th scope="row">Manage Multiple Accounts</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>

                <tr>
                   <th scope="row">3D Viewer API</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>

                <tr>
                   <th scope="row">Dedicated account manager</th>
                  <td ><i className="fas fa-window-minimize"></i></td>
                  <td><i className="fas fa-window-minimize"></i></td>
                  <td> <i className="fas fa-check"></i></td>
                </tr>
                     </tbody>
                </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
