import React from 'react';
import {Link} from 'react-router-dom';
 
function Navbar() {
    return (
        <div>
            <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-dark py-3" aria-label="Main navigation">
            <div className="container">

              
            <img className="img-fluid" style={{height:'60px'}} src="assets/images/logo.png" alt="alternative" />
                 <Link className="navbar-brand logo-text" to="/"></Link>


                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">PRODUCTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/whybest">WHY BEST</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">PRICING</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">FEATURES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT</Link>
                        </li>
    
                    </ul>
                    <span className="nav-item">
                        <a className="btn-solid-sm" href="https://login.arnxt.com" target='blank'>Start Selling</a>
                    </span>
                </div> 
            </div> 
        </nav>
        </div>
    )
}

export default Navbar;
