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


                  <div>
                  
                  <label className="switch">
                  
                 <input type="checkbox"/>
                 
                 <span className="slider round"></span>
                  </label>
                  
                  </div>

                 
                  <br />
                </div>
              </div>
            </div>

            <table className="table table-bordered table-light">
            <thead>
            <tr >
                   <th style={{width:'500px'}} scope="col"><h2 className="card-title pricing-card-title">Features</h2> </th> 

                     <th  scope="col">
                     <h4 className="my-0 font-weight-normal">Premium</h4>
                      <h2 className="card-title pricing-card-title">$99 <small className="text-muted">/ month </small></h2>
                      <a className="btn-solid-reg" href="#contact">Start 14 day trail</a>
                      </th>

                       <th  scope="col"><h4 className="my-0 font-weight-normal">Business Pro</h4>
                      <h2 className="card-title pricing-card-title">$299 <small className="text-muted">/ month </small></h2>
                      <a className="btn-solid-reg" href="#contact">Start 14 day trail</a>
                       </th>

                   <th  scope="col"><h4 className="my-0 font-weight-normal">Enterprise</h4>
                      <h2 className="card-title pricing-card-title">Custom <small className="text-muted">/ month </small></h2>
                      <a className="btn-solid-reg" href="#contact">Start 14 day trail</a>
                   </th>
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

                  
                {/* <tr>
                   <th scope="row">Photorealistic Renders/month</th>
                  <td >20</td>
                  <td>50</td>
                  <td>Enterprise</td>
                </tr> */}


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
                  <td> Coming Soon</td>
                  <td> Coming Soon</td>
                  <td> Coming Soon</td>
                </tr>


                <tr>
                   <th scope="row">3D product export</th>
                  <td > <i className="fas fa-window-minimize"></i></td>
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
                   <th scope="row">White label 3D Viewer</th>
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
                  <td> Coming Soon</td>
                  <td> Coming Soon</td>
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
