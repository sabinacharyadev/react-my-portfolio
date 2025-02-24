import { Container, Stack } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";
const PortfolioComponent = () => {
  return (
    <Container className="mt-2">
      <h1 className="pt-3">Portfolio</h1>
      <Stack
        className="d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center p-2"
        gap={5}
      >
        <PortfolioCard
          img="https://i.postimg.cc/PJH96z86/temp-Imagevld0u7.avif"
          title="Recipe Book"
          liveLink="https://react-recipe-book-three.vercel.app"
          gitLink="https://github.com/sabinacharyadev/react-recipe-book"
          techStack={[
            {
              id: 1,
              name: "React",
            },
            {
              id: 2,
              name: "React Bootstrap",
            },
          ]}
        />

        <PortfolioCard
          img="https://i.postimg.cc/26BRVS4D/temp-Imagee2yu7-T.avif"
          title="Favorite Dogs"
          liveLink="https://my-fav-dogs.vercel.app"
          gitLink="https://github.com/sabinacharyadev/my-fav-dogs"
          techStack={[
            {
              id: 1,
              name: "JavaScript",
            },
            {
              id: 2,
              name: "Bootstrap",
            },
          ]}
        />
      </Stack>
    </Container>
  );
};

export default PortfolioComponent;
