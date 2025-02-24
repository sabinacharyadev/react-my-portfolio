import { Row, Col } from "react-bootstrap";
import ProfileComponent from "./components/ProfileComponent";
import BodyComponent from "./components/BodyComponent";
import NavigationComponent from "./components/NavigationComponent";
function App() {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col lg={4}>
          <ProfileComponent />
        </Col>

        <Col className="m-4">
          <BodyComponent />
        </Col>
      </Row>
      <NavigationComponent />
    </>
  );
}
export default App;
