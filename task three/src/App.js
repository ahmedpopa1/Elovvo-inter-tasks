import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <div data-aos="fade-up">
        <Landing />
      </div>
      <div data-aos="fade-up">
        <Features />
      </div>
      <div data-aos="fade-up">
        <Reviews />
      </div>
      <div data-aos="fade-up">
        <Pricing />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}

export default App;
