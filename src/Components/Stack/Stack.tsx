export type StackProps = {
  children: React.ReactNode;
  as: "section" | "div";
  variant?: "stack-small" | "stack-medium" | "stack-large";
  marginType?: string;
};

export default function Stack({
  children,
  as,
  variant,
  marginType,
}: StackProps) {
  const Element = as;
  return (
    <Element className={`${marginType} stack ${variant}`}>{children}</Element>
  );
}
