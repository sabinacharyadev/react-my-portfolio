import { Container, Stack } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";
import { projects } from "../../projectsData.js";
const PortfolioComponent = () => {
  return (
    <Container className="mt-2">
      <h1 className="pt-3">Portfolio</h1>
      <Stack
        className="d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center p-2"
        gap={5}
      >
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            img={project.img}
            title={project.title}
            liveLink={project.liveLink}
            gitLink={project.gitLink}
            techStack={project.techStack}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default PortfolioComponent;
