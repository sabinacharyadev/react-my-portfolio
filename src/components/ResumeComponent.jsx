import { Button, Container } from "react-bootstrap";
import { FilePdf } from "react-bootstrap-icons";
import Resume from "../assets/myresume.pdf";
import IndividualResumeSection from "./IndividualResumeSection";
const ResumeComponent = () => {
  return (
    <Container className="mt-2" fluid>
      <h1 className="pt-3">Resume</h1>

      <IndividualResumeSection
        title="Education"
        icon={"book"}
        sectionData={[
          {
            id: 1,
            title: "Full Stack Web Development Bootcamp",
            institution: "Dented Code",
          },
          {
            id: 2,
            title: " Master of Information Technology",
            institution: "Central Queensland University",
          },
        ]}
      />

      <IndividualResumeSection
        title="Work"
        icon={"briefcase"}
        sectionData={[
          {
            id: 1,
            title: "Frontend Web Developer | Internship ",
            institution: "Cogninet Australia | Aug 2022 - Oct 2022",
          },
        ]}
      />

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
