/* eslint-disable react/prop-types */
import { Card, Badge, Stack, Button } from "react-bootstrap";
import { Globe2, Github } from "react-bootstrap-icons";

const PortfolioCard = ({ img, title, liveLink, gitLink, techStack }) => {
  return (
    <Card
      style={{ width: "22rem", backgroundColor: "#4a4a4a", color: "white" }}
      className="border border-0"
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          <Stack direction="horizontal" gap={2}>
            {techStack.map((item) => (
              <Badge key={item.id} bg="primary">
                {item.name}
              </Badge>
            ))}
          </Stack>
        </Card.Text>
        <Card.Title>{title}</Card.Title>

        <Stack direction="horizontal" gap={2}>
          <Button variant="light" target="_blank" href={liveLink}>
            <Globe2 />
          </Button>

          <Button variant="light" target="_blank" href={gitLink}>
            <Github />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;
