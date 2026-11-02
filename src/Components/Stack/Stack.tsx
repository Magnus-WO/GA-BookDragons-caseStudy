export type StackProps = {
  children: React.ReactNode;
  as: "section" | "div";
  variant: "small" | "medium" | "large";
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
    <Element className={`${marginType} stack stack-${variant}`}>
      {children}
    </Element>
  );
}
