/* eslint-disable react/prop-types */
import { Image } from "react-bootstrap";
const SkillImage = ({ src }) => {
  return (
    <Image
      style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
      className="m-3 bg-white"
      src={src}
      rounded
    />
  );
};

export default SkillImage;
