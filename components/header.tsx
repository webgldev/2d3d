import Link from "next/link";

export default function Header() {
  return (
    <header>
        <li><Link href='/'>Cureted webgl and css</Link></li>
      <ul>
        <li><Link href='/webgl'>WEBGL</Link></li>
        <li><Link href='/css'>CSS</Link></li>
      </ul>
    </header>
  )
}