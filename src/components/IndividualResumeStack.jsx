/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";

const IndividualResumeStack = ({ title, institution }) => {
  return (
    <Stack>
      <ul>
        <li
          style={{
            fontSize: "15px",
            fontWeight: "bolder",
            marginLeft: "-2rem",
          }}
        >
          {title}
        </li>
      </ul>
      <p style={{ color: "var(--primary-color)" }}>{institution}</p>
    </Stack>
  );
};

export default IndividualResumeStack;
