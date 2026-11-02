export type GridProps = {
  children: React.ReactNode;
  gap: "large-gap" | "small-gap" | "no-gap";
  columns:
    | "auto-columns"
    | "two-columns"
    | "three-columns"
    | "four-columns"
    | "two-plus-one-columns"
    | "one-plus-two-columns";
  productPosition?: "product-on-left" | "product-on-right";
  recommendationSection?: "" | "recommendation-section";
};

export default function Grid({
  children,
  gap,
  columns,
  productPosition,
  recommendationSection,
}: GridProps) {
  return (
    <div
      className={`container grid ${columns} ${gap} ${recommendationSection} ${productPosition}`}
    >
      {children}
    </div>
  );
}
