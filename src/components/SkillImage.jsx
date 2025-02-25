/* eslint-disable react/prop-types */
import { Image } from "react-bootstrap";
const SkillImage = ({ src }) => {
  return (
    <Image
      style={{ width: "5rem", height: "5rem" }}
      className="m-3"
      src={src}
      rounded
    />
  );
};

export default SkillImage;
