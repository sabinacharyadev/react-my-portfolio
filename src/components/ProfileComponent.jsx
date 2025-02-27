import { Button, Image, Stack } from "react-bootstrap";
import ProfileImage from "../assets/profile-image.png";
import { Linkedin, Github, StackOverflow } from "react-bootstrap-icons";
import { useState } from "react";

const ProfileComponent = () => {
  const [position, setPosition] = useState([{ x: 0, y: 0 }]);
  const [isInside, setInInside] = useState(false);

  const handleMouseMove = (e) => {
    if (isInside) {
      const { clientX, clientY } = e;
      setPosition([...position, { x: clientX, y: clientY }]);
      if (position.length > 10) {
        setPosition(position.slice(1));
      }
    }
  };

  const handleMouseEnter = () => {
    console.log("mouse inside");
    setInInside(true);
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center flex-lg-column profile"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          setInInside(false);
          console.log("cursor outside");
        }}
      >
        {position.map((it, index) => (
          <div
            key={index}
            className={`${isInside ? "glow" : "glow-inactive"}`}
            style={{
              left: `${it.x}px`,
              top: `${it.y}px`,
            }}
          ></div>
        ))}
        <Image
          style={{ width: "10rem" }}
          className="my-4"
          src={ProfileImage}
          roundedCircle
        />
        <div>
          <h1>Sabin Acharya</h1>
          <p className="text-center">sabinacharya444@gmail.com</p>

          <Stack className="d-flex flex-row justify-content-start justify-content-lg-center gap-3">
            <Button
              className="zoom"
              target="_blank"
              href="https://www.linkedin.com/in/sabinacharya/"
            >
              <Linkedin />
            </Button>
            <Button
              className="zoom"
              target="_blank"
              variant="dark"
              href="https://github.com/sabinacharyadev"
            >
              <Github />
            </Button>
            <Button
              className="zoom"
              target="_blank"
              variant="warning"
              href="https://stackoverflow.com/users/10009481/sabin-acharya"
            >
              <StackOverflow />
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
