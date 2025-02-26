/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";
import { Book, Briefcase } from "react-bootstrap-icons";
import IndividualResumeStack from "./IndividualResumeStack";

const IndividualResumeSection = ({ title, icon, sectionData }) => {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        {icon === "book" ? (
          <Book color="var(--primary-color)" size={25} />
        ) : (
          <Briefcase color="var(--primary-color)" size={25} />
        )}
        <p style={{ fontSize: "18px" }} className="mt-3">
          {title}
        </p>
      </Stack>

      <div style={{ marginLeft: "2rem" }} className="p-2">
        {sectionData.map((data) => (
          <IndividualResumeStack
            key={data.id}
            title={data.title}
            institution={data.institution}
          />
        ))}
      </div>
    </>
  );
};

export default IndividualResumeSection;
