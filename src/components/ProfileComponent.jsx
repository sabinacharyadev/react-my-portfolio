import { Image } from "react-bootstrap";
import ProfileImage from "../assets/profile-image.png";
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
        <div>
          <h1>Sabin Acharya</h1>
          <p>sabinacharyadev</p>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
