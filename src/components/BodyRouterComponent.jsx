import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";
import ResumePage from "../pages/ResumePage";
const BodyRouterComponent = () => {
  return (
    <>
      <div
        style={{
          marginBottom: "5rem",
          backgroundColor: "#4a4a4a",
          lineHeight: "2rem",
          minHeight: "100vh",
        }}
        className="bodyContainer border border-0 rounded mx-4 "
      >
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="aboutme" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Routes>
      </div>
    </>
  );
};

export default BodyRouterComponent;
