export type SectionProps = {
  variant: "yellow" | "blue" | "green" | "pink" | "brown";
  children: React.ReactNode;
};

export default function Section({ children, variant }: SectionProps) {
  return <section className={`section section-${variant}`}>{children}</section>;
}
