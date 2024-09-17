import "./index.css"
import Link from 'next/link'

export default function Header() {
  return <header className="header p-7 flex items-center justify-between bg-background fixed w-full">
    <a href='/' className='nodrag text-5xl ml-10 hover:cursor-pointer'>
      <span>H</span>
      <span>e</span>
      <span>x</span>
      <span>t</span>
      <span>e</span>
      <span>x</span>
    </a>
    <div className="navbarLinks flex">
      <Link href='/about' className="text-2xl mr-10 hover:text-white hover:cursor-pointer transition duration-200">About me</Link >
      <Link href='/contact' className="text-2xl mr-10 hover:text-white hover:cursor-pointer transition duration-200">Contact</Link >
      <Link href='/projects' className="text-2xl mr-10 hover:text-white hover:cursor-pointer transition duration-200">Projects</Link >
      <Link href='/links' className="text-2xl mr-10 hover:text-white hover:cursor-pointer transition duration-200">Links</Link >
    </div>
  </header>
}