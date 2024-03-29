import Aos from "aos";
import { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skills";
import Portfolio from "./components/Portfolio";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
    document.title = "YPrawiroCode Portfolio";
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
