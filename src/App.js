import './App.css';
import {About,Blog,ContactUs,Faqs,Features, LandingPage,Navbar,Pricing,Privacypolicy,Products,Footer,WhyBest,TermsAndConditions,Subscribe} from "./Component"
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

                       <Route path="/blog">
                           <Blog />
                       </Route>

                       <Route path="/privacy-policy">
                           <Privacypolicy />
                       </Route>

                       <Route path="/faqs">
                           <Faqs />
                       </Route>
                       <Route path="/termsandconditions">
                           <TermsAndConditions />
                       </Route>

                       

                </Switch>
                      <Navbar />
                      <Subscribe />
                      <Footer />

           </div>
    </Router>
);
}

export default App;


