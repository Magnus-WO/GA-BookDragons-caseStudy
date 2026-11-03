export type StackProps = {
  children: React.ReactNode;
  as: "section" | "div";
  variant?: "stack-small" | "stack-medium" | "stack-large";
  marginType?: string;
  customClassName?: string;
};

export default function Stack({
  children,
  as,
  variant,
  marginType,
  customClassName,
}: StackProps) {
  const Element = as;
  return (
    <Element className={`${marginType} ${customClassName} stack  ${variant}`}>
      {children}
    </Element>
  );
}
