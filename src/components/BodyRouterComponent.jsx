/* eslint-disable react/prop-types */
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import PortfolioComponent from "./PortfolioComponent";
import ResumeComponent from "./ResumeComponent";

const BodyRouterComponent = ({ navItem }) => {
  return (
    <>
      <div
        style={{ marginBottom: "5rem", backgroundColor: "#4a4a4a" }}
        className="border rounded mx-4"
      >
        {(() => {
          switch (navItem) {
            case "aboutme":
              return <AboutComponent />;

            case "resume":
              return <ResumeComponent />;

            case "portfolio":
              return <PortfolioComponent />;

            case "contact":
              return <ContactComponent />;

            default:
              break;
          }
        })()}
      </div>
    </>
  );
};

export default BodyRouterComponent;
