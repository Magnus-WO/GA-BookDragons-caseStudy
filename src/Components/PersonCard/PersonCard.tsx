import Image from "next/image";
import Heading from "../Heading/Heading";
import { type Employee } from "@/types/employeeType.types";

export type PersonCardProps = {
  as: "article" | "div" | "section";
  employee: Employee;
};

export default function PersonCard({ as, employee }: PersonCardProps) {
  const Element = as;
  return (
    <Element className="stack employee-card">
      {/* Avatar start */}
      <Image
        className="employee-card-photo"
        src={employee.image}
        alt={`Portrettbilde av ${employee.firstName}`}
        height={959}
        width={640}
      />
      <Heading as="h3" className="section-subheading">
        {employee.firstName} {employee.lastName}
      </Heading>
      <p>{employee.text}</p>
    </Element>
  );
}
