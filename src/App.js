import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LandingPage from './Component/LandingPage';
import Getstarted from './Component/Getstarted';
import Subscribe from './Component/Subscribe';
import About from './Component/About';
import Products from './Component/Products';
import WhyBest from './Component/WhyBest';
import Pricing from './Component/Pricing';
import Features from './Component/Features';
import ContactUs from './Component/ContactUs';
import StartSelling from './Component/StartSelling';
import Blog from './Component/Blog';
import Termsconditions from './Component/Termsconditions';
import Privacypolicy from './Component/Privacypolicy';
import Help from './Component/Help';
import Faqs from './Component/Faqs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>
          <div className="App">
      
               <Switch>

                      <Route path="/" exact>
                             <LandingPage />
                       </Route>

                      <Route path="/about">
                          <About />
                      </Route>

                       <Route path="/products">
                           <Products />
                       </Route>

                       <Route path="/whybest">
                           <WhyBest />
                       </Route>

                       <Route path="/pricing">
                           <Pricing />
                       </Route>

                       <Route path="/features">
                           <Features />
                       </Route>

                       <Route path="/contact">
                           <ContactUs />
                       </Route>

                       <Route path="/startselling">
                           <StartSelling />
                       </Route>

                       <Route path="/blog">
                           <Blog />
                       </Route>

                       <Route path="/terms-conditions">
                           <Termsconditions />
                       </Route>

                       <Route path="/privacy-policy">
                           <Privacypolicy />
                       </Route>

                       <Route path="/help">
                           <Help />
                       </Route>

                       <Route path="/faqs">
                           <Faqs />
                       </Route>

                       

                </Switch>
                      <Navbar />
                      <Subscribe />
                      <Getstarted />
                      <Footer />

           </div>
    </Router>
);
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
