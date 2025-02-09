import "./App.css";

import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";

import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <DarkModeToggle />

      <div className="wrapper-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}
export default App;
