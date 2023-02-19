import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e:any) => {setIsActive(current => !current);};
  const menuData=[
    {id: '1', ko: 'All', path: '/post/all'},
    {id: '1', ko: 'WebGL', path: '/tags/webgl'},
    {id: '2', ko: 'CSS',   path: '/tags/css'},
  ]
  return (
    <header>
      <Link href='/'>Cureted webgl and css</Link>
      <nav>
        <ul>
          {menuData.map((menu)=>{
            return(
              <li key={menu.id}>
                <Link href={menu.path} style={{color: menu.path === router.pathname ? 'var(--color-4)' : 'var(--color-2)'}}>
                  {menu.ko}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}