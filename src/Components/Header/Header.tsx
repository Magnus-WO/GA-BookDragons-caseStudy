import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href={"/"} className="logo">
        BookDragons
      </Link>
      <nav>
        <Link href={""}>Om oss</Link>
        <Link href={""}>Salg!</Link>
        <Link href={""}>Logg inn</Link>
      </nav>
    </header>
  );
}
