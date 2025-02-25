import { Button, Container } from "react-bootstrap";
import { FilePdf } from "react-bootstrap-icons";
import Resume from "../assets/myresume.pdf";
const ResumeComponent = () => {
  return (
    <Container className="mt-2">
      <h1 className="pt-3">Resume</h1>
      <Button className="p-3 float-end" href={Resume} download>
        <FilePdf size={30} />
        &nbsp;&nbsp;Download CV
      </Button>
    </Container>
  );
};

export default ResumeComponent;
