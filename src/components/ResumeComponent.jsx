import { Button, Container } from "react-bootstrap";
import { FilePdf } from "react-bootstrap-icons";
import Resume from "../assets/myresume.pdf";
import IndividualResumeSection from "./IndividualResumeSection";
import { motion } from "motion/react";
const ResumeComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
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
          variant="outline-warning"
          className="p-3 mb-3 float-md-end"
          href={Resume}
          download
        >
          <FilePdf size={30} />
          &nbsp;&nbsp;Download CV
        </Button>
      </Container>
    </motion.div>
  );
};

export default ResumeComponent;
