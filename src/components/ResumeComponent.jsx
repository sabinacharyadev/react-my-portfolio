import { Button, Container, Stack } from "react-bootstrap";
import { FilePdf, Book, Briefcase } from "react-bootstrap-icons";
import Resume from "../assets/myresume.pdf";
const ResumeComponent = () => {
  return (
    <Container className="mt-2" fluid>
      <h1 className="pt-3">Resume</h1>

      <Stack direction="horizontal" gap={4}>
        <Book size={30} />
        <h4 className="mt-2">Education</h4>
      </Stack>
      <div style={{ marginLeft: "5rem" }} className="p-2">
        <Stack>
          <h5>Full Stack Web Development Bootcamp</h5>

          <p>Dented Code</p>
        </Stack>

        <Stack>
          <h5>Master of Information Technology</h5>

          <p>Central Queensland University</p>
        </Stack>
      </div>

      <Stack direction="horizontal" gap={4}>
        <Briefcase size={30} />
        <h4 className="mt-2">Work</h4>
      </Stack>

      <div style={{ marginLeft: "5rem" }} className="p-2">
        <Stack>
          <h5>
            Frontend Web Developer <span>| Internship</span>
          </h5>

          <p>
            Cogninet Australia <span>| Aug 2022 - Oct 2022</span>
          </p>
        </Stack>
      </div>

      <Button
        variant="outline-light"
        className="p-3 float-end"
        href={Resume}
        download
      >
        <FilePdf size={30} />
        &nbsp;&nbsp;Download CV
      </Button>
    </Container>
  );
};

export default ResumeComponent;
