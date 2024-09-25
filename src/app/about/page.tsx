import Image from 'next/image'
import LinkButton from '@/components/Buttons/LinkButton'
import Profile from '/public/images/profile.png'
import TechStack from '@/components/TechStack'
import IconCloud from '@/components/TechStack/IconClaud'

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "express",
  "firebase",
  "linux",
  "windows",
  "nextdotjs",
  "github",
  "lua",
  "fontawesome",
  "jquery",
  "mysql",
  "php",
  "visualstudiocode",
  "tailwindcss",
  "unity",
  "wordpress",
  "discord",
  "clickup",
  "notion"
];

export default function About() {
  return <div className="text-2xl flex flex-col items-center">
    <div className="p-5 min-h-[calc(100vh-80px)] w-full flex items-center justify-around flex-col md:flex-row gap-5">
      <Image
        className='rounded-2xl nodrag shadow-md shadow-white'
        src={Profile}
        width={250}
        height={250}
        alt="Hacki Avatar - Website creator"
      />
      <div className='flex flex-col text-center md:items-end md:text-right '>
        <div className='md:text-8xl text-6xl font-light bg-gradient-to-r from-purple-500  to-orange-400 inline-block text-transparent bg-clip-text'>Szymon Matloch</div>
        <div className='text-4xl opacity-60 mb-6'>Fullstack Developer</div>
        <LinkButton href='/contact' text='CONTACT' />
      </div>
    </div>
    <div className="w-full min-h-dvh text-center flex flex-col items-center justify-center">
      <div className='text-6xl opacity-85'>Tech Stack</div>
      <div className='w-full flex items-center justify-around flex-row max-lg:flex-col'>
        <TechStack/>
        <IconCloud iconSlugs={slugs}/>
      </div>
    </div>
  </div>
}