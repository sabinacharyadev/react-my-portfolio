import { Button, Image, Stack } from "react-bootstrap";
import ProfileImage from "../assets/profile-image.png";
import { Linkedin, Github, StackOverflow } from "react-bootstrap-icons";
const ProfileComponent = () => {
  return (
    <>
      <div className="d-flex flex-lg-column align-items-center">
        <Image
          style={{ width: "15rem" }}
          className="my-4"
          src={ProfileImage}
          roundedCircle
        />
        <div style={{ marginLeft: "-1rem" }}>
          <h1>Sabin Acharya</h1>
          <p>sabinacharyadev</p>

          <Stack className="d-flex flex-row justify-content-start justify-content-lg-center gap-3">
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/sabinacharya/"
            >
              <Linkedin />
            </Button>
            <Button
              target="_blank"
              variant="dark"
              href="https://github.com/sabinacharyadev"
            >
              <Github />
            </Button>
            <Button
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
