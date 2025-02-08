import "./App.css";

import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SummarySection from "./components/SummarySection";
import SkillsSection from "./components/SkillsSection";
import RecentWork from "./components/RecentWork";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <DarkModeToggle />

      <div className="wrapper-container">
        <Header />
        <HeroSection />
        <SummarySection />
        <SkillsSection />
        <RecentWork />
        <AboutMe />
        <GetInTouch />
        <Footer />
        <GoToTop />
      </div>
    </>
  );
}
export default App;
