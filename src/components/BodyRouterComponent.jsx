/* eslint-disable react/prop-types */
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import PortfolioComponent from "./PortfolioComponent";
import ResumeComponent from "./ResumeComponent";

const BodyRouterComponent = ({ navItem }) => {
  return (
    <>
      <div
        style={{ height: "90vh", marginBottom: "5rem" }}
        className="border rounded"
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
