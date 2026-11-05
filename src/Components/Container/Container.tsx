export type ContainerProps = {
  as?: "div" | "section" | "main" | "article";
} & React.HTMLAttributes<HTMLElement>; //React henter alle HTMLAttributter som er gyldige for det gitte HTMLElementet

export default function Container({
  as = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  const Element = as;

  return (
    <Element className={`container ${className ?? ""}`} {...rest}>
      {children}
    </Element>
  );
}
