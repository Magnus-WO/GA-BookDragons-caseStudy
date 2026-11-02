export type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingText: string;
};

export default function Heading({ as, headingText }: HeadingProps) {
  const Element = as;
  return <Element className="section-heading">{headingText}</Element>;
}
