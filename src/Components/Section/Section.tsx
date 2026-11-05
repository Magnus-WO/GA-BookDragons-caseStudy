import Container from "../Container/Container";

export type SectionProps = {
  as?: "section" | "div" | "article" | "main" | "container";
  className?: string;
  variant: "yellow" | "blue" | "green" | "pink" | "brown";
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  as = "section",
  className,
  variant,
  children,
  ...rest
}: SectionProps) {
  const Element = as === "container" ? Container : as;
  return (
    <Element className={`section section-${variant} ${className ?? ""}`}>
      {children}
    </Element>
  );
}
