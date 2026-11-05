import Link from "next/link";
import type {Header as HeaderData} from "@/payload-types"


export type HeaderProps = {
  header: 
}
export default function SiteHeader({header}: HeaderProps) {
  return (
    <header className="site-header">
      <Link href={"/"} className="logo">
        {header.siteName}
      </Link>
      <nav>
        <Link href={""}>Om oss</Link>
        <Link href={""}>Salg!</Link>
        <Link href={""}>Logg inn</Link>
      </nav>
    </header>
  );
}
