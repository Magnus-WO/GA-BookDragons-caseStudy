export type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as,
  children,
  className = "section-heading",
}: HeadingProps) {
  const Element = as;
  return <Element className={className}>{children}</Element>;
}
