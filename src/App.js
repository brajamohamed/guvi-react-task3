import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/nav";
import Hero from "./Hero/hero";
import Features from "./Features/features";
import Feature from "./Feature/feature";
import Testimonial from "./Testimonials/testimonial";
import Hero2 from "./Hero2/hero2";
import Footer from "./Footer/footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Feature />
      <Testimonial />
      <Hero2 />
      <Footer />
    </div>
  );
}

export default App;
