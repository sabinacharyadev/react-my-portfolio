import { Row, Col, Container } from "react-bootstrap";
import { CodeSquare, Server } from "react-bootstrap-icons";
import SkillImage from "./SkillImage";
import { motion } from "motion/react";

const AboutComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <Container className="mt-2">
        <h1 className="pt-3">About Me </h1>
        <p>
          Hi, I&apos;m Sabin Acharya, a passionate Full Stack Developer
          dedicated to building user-centric and scalable web applications. With
          a strong foundation in React.js, JavaScript, HTML, CSS, and Node.js,
          Express.js, Mongodb, I thrive on solving complex problems and creating
          seamless digital experiences.
        </p>
        <p>
          If you&apos;re seeking a skilled Full Stack developer to breathe life
          into your project and exceed your expectations, I am here to
          collaborate and create magic together. Reach out, and let&apos;s
          transform your vision into a reality!
        </p>
        <h2 className="pt-4">What I&apos;m Doing</h2>
        <Row className="d-flex flex-column flex-md-row px-2">
          <Col
            style={{ backgroundColor: "#4a4a4a" }}
            className="border rounded p-4 my-3 mx-1"
          >
            <CodeSquare
              color="var(--primary-color)"
              className="mb-2"
              size={50}
            />
            <h3>Web Development</h3>
            <p>High-quality development of sites at the professional level.</p>
          </Col>

          <Col
            style={{ backgroundColor: "#4a4a4a" }}
            className="border rounded p-4 my-3 mx-1"
          >
            <Server color="var(--primary-color)" className="mb-2" size={50} />
            <h3>Backend Development</h3>
            <p>
              High-performance backend services designed for scalability and
              seamless user experience.
            </p>
          </Col>
        </Row>
        <h2 className="pt-4">Skills</h2>
        <div style={{ maxWidth: "100%" }} className="d-flex overflow-scroll">
          <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iWVlYHaZpixvSXKb7Pi4Fsr1_Ci4yI_XXg&s" />
          <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAc4BswrDj_q0JcxkRYJ09NDHtv5GEfzOzQ&s" />
          <SkillImage src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <SkillImage src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp" />
          <SkillImage src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" />
          <SkillImage src="https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" />
          <SkillImage src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" />
        </div>
      </Container>
    </motion.div>
  );
};

export default AboutComponent;
