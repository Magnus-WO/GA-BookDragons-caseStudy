import Container from "../Container/Container";
export type GridProps = {
  as?: "div" | "section" | "main" | "container";
  gap: "large" | "small" | "no";
  columns:
    | "auto-columns"
    | "two-columns"
    | "three-columns"
    | "four-columns"
    | "two-plus-one-columns"
    | "one-plus-two-columns";
  productPosition?: "product-on-left" | "product-on-right";
  recommendationSection?: "" | "recommendation-section";
} & React.HTMLAttributes<HTMLElement>;

export default function Grid({
  children,
  gap,
  columns,
  productPosition,
  recommendationSection,
  as = "div",
}: GridProps) {
  const Element = as === "container" ? Container : as;
  return (
    <Element
      className={`container grid ${columns} ${gap}-gap ${recommendationSection ?? ""} ${productPosition ?? ""}`}
    >
      {children}
    </Element>
  );
}
