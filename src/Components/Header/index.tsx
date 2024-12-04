'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavbarLink(params:{ path:string, text:string}) {
  const pathname = usePathname()
  const path = params.path
  const text = params.text
  return <Link 
    href={path} 
    className={`text-2xl mr-10 hover:cursor-pointer transition duration-200 ${path === pathname ? 'border-b-2 hover:text-accent border-accent text-accent' : 'hover:text-white'}`}>
      {text}
  </Link >
}

export default function Header() {
  return <header className="header h-[80px] flex items-center justify-between w-full overflow-hidden fixed">
    <div className="mx-6 flex gap-4">
      <NavbarLink path='#' text='Szymon Matloch'/>
    </div>
    {/* <div className="navbarLinks flex">
      <NavbarLink path='#about' text='About me' />
      <NavbarLink path='#contact' text='Contact' />
      <NavbarLink path='#projects' text='Projects' />
    </div> */}
  </header>
}