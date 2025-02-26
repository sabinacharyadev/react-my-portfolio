/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";

const IndividualResumeStack = ({ title, institution }) => {
  return (
    <Stack>
      <p style={{ fontSize: "14px", fontWeight: "bolder" }}>{title}</p>
      <p>{institution}</p>
    </Stack>
  );
};

export default IndividualResumeStack;
