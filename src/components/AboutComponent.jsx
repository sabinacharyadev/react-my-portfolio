import { Row, Col, Container } from "react-bootstrap";
import { CodeSquare, Server } from "react-bootstrap-icons";
import SkillImage from "./SkillImage";

const AboutComponent = () => {
  return (
    <Container className="mt-2">
      <h1>About Me </h1>
      <p>
        Hi, I&apos;m Sabin Babu, a passionate Full Stack Developer dedicated to
        building user-centric and scalable web applications. With a strong
        foundation in React.js, JavaScript, HTML, CSS, and Node.js, Express.js,
        Mongodb, I thrive on solving complex problems and creating seamless
        digital experiences.
      </p>

      <p>
        If you&apos;re seeking a skilled Full Stack developer to breathe life
        into your project and exceed your expectations, I am here to collaborate
        and create magic together. Reach out, and let&apos;s transform your
        vision into a reality!
      </p>

      <h2>What I&apos;m Doing</h2>

      <Row className="d-flex flex-column flex-md-row px-4">
        <Col
          style={{ backgroundColor: "#4a4a4a" }}
          className="border rounded p-4 my-3 mx-1"
        >
          <CodeSquare
            style={{ backgroundColor: "#4a4a4a" }}
            className="mb-2"
            size={50}
          />
          <h3 style={{ backgroundColor: "#4a4a4a" }}>Web Development</h3>
          <p style={{ backgroundColor: "#4a4a4a" }}>
            High-quality development of sites at the professional level.
          </p>
        </Col>

        <Col
          style={{ backgroundColor: "#4a4a4a" }}
          className="border rounded  p-4 my-3 mx-1"
        >
          <Server
            style={{ backgroundColor: "#4a4a4a" }}
            className="mb-2"
            size={50}
          />
          <h3 style={{ backgroundColor: "#4a4a4a" }}>Backend Development</h3>
          <p style={{ backgroundColor: "#4a4a4a" }}>
            High-performance backend services designed for scalability and
            seamless user experience.
          </p>
        </Col>
      </Row>

      <h2>Skills</h2>
      <div style={{ maxWidth: "100%" }} className="d-flex overflow-scroll">
        <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iWVlYHaZpixvSXKb7Pi4Fsr1_Ci4yI_XXg&s" />
        <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAc4BswrDj_q0JcxkRYJ09NDHtv5GEfzOzQ&s" />
        <SkillImage src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        <SkillImage src="https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg" />
        <SkillImage src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" />
        <SkillImage src="https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" />
        <SkillImage src="https://media.licdn.com/dms/image/v2/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=Ora_YKTAmDz3efeDirq2YQ7INd_unqaFZ13TheQc_60" />
      </div>
    </Container>
  );
};

export default AboutComponent;
