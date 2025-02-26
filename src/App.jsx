import "./index.css";
import { Row, Col, Button } from "react-bootstrap";
import ProfileComponent from "./components/ProfileComponent";
import BodyRouterComponent from "./components/BodyRouterComponent";
import NavigationComponent from "./components/NavigationComponent";

function App() {
  return (
    <>
      <Row
        id="home"
        className="d-flex align-items-center justify-content-center vh-100 flex-lg-nowrap"
      >
        <Col lg={4}>
          <ProfileComponent />
        </Col>

        <Col lg={8}>
          <BodyRouterComponent />
        </Col>
      </Row>
      <NavigationComponent />

      <Button
        style={{
          height: "3rem",
          width: "3rem",
          opacity: 0.5,
          margin: "auto",
          marginBottom: "4rem",
          marginRight: "2rem",
          backgroundColor: "var(--primary-color)",
        }}
        href="#home"
        className="button fixed-bottom d-flex align-items-center justify-content-center pt-4 fs-2 rounded-circle "
      >
        {" "}
        ^{" "}
      </Button>
    </>
  );
}
export default App;
