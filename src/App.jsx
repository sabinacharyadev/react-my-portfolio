import { Row, Col } from "react-bootstrap";
import ProfileComponent from "./components/ProfileComponent";
import BodyComponent from "./components/BodyComponent";
function App() {
  return (
    <>
      <Row>
        <Col lg={4}>
          <ProfileComponent />
        </Col>

        <Col>
          <BodyComponent />
        </Col>
      </Row>
    </>
  );
}
export default App;
