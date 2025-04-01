import "./index.css";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">SABIN ACHARYA</h6>
        <p>binwinstudios © All CopyRights Reserved 2025</p>
      </footer>
    </>
  );
}
export default App;
