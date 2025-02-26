import { Button, Image, Stack } from "react-bootstrap";
import ProfileImage from "../assets/profile-image.png";
import { Linkedin, Github, StackOverflow } from "react-bootstrap-icons";
const ProfileComponent = () => {
  return (
    <>
      <div className="d-flex align-items-center  flex-lg-column ">
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
