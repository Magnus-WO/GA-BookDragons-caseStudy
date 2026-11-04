import { Employee } from "@/types/employeeType.types";
import Image from "next/image";
import Link from "next/link";

export type AvatarProps = {
  employee: Employee;
  height: 959 | 50;
  width: 640 | 50;
  className?: string;
};

export default function Avatar({
  employee,
  height,
  width,
  className = "avatar-image",
}: AvatarProps) {
  return (
    <>
      <Image
        className={className}
        src={employee.image}
        alt={`Portrettbilde av ${employee.firstName}`}
        height={height}
        width={width}
      />
      {className === "avatar-image" && (
        <Link href={`/user/${employee.id}`}>Profil</Link>
      )}
    </>
  );
}
