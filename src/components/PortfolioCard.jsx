/* eslint-disable react/prop-types */

import { Card, Badge, Stack, Button, NavLink } from "react-bootstrap";
import { Globe2, Github } from "react-bootstrap-icons";
import { motion } from "motion/react";

const PortfolioCard = ({ img, title, liveLink, gitLink, techStack }) => {
  return (
    <NavLink
      href={liveLink}
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Card
          style={{ width: "15rem", backgroundColor: "#4a4a4a", color: "white" }}
          className="zoom border border-0 "
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Stack direction="horizontal" gap={2} className="mb-2">
              {techStack.map((item) => (
                <Badge key={item.id} bg="primary">
                  {item.name}
                </Badge>
              ))}
            </Stack>

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
      </motion.div>
    </NavLink>
  );
};

export default PortfolioCard;
