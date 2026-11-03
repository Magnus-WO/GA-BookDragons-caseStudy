import Link from "next/link";

export type TagProps = {
  link: string;
  tagText: string;
  className: string;
};
export default function Tag({ link, tagText, className }: TagProps) {
  return (
    <Link href={link} className={className}>
      {tagText}
    </Link>
  );
}
