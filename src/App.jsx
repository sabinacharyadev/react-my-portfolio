import { Row, Col } from "react-bootstrap";
import ProfileComponent from "./components/ProfileComponent";
import BodyRouterComponent from "./components/BodyRouterComponent";
import NavigationComponent from "./components/NavigationComponent";
import { useState } from "react";

function App() {
  const [navItem, setNavItem] = useState("aboutme");
  const handleOnClick = (clickedItem) => {
    setNavItem(clickedItem);
  };
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col>
          <ProfileComponent />
        </Col>

        <Col className="m-4">
          <BodyRouterComponent navItem={navItem} />
        </Col>
      </Row>
      <NavigationComponent handleOnClick={handleOnClick} />
    </>
  );
}
export default App;
