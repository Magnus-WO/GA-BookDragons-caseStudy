import Link from "next/link";
export type ButtonProps = {
  link: string;
  block?: "" | "block-button";
  children: React.ReactNode;
  price?: number;
};
export default function Button({ link, block, children, price }: ButtonProps) {
  return (
    <Link className={`button ${block}`} href={link}>
      {children} {price && <span>{`(${price},-)`}</span>}
    </Link>
  );
}
