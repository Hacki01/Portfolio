"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import Link from 'next/link'
import Profile from '@/assets/profile.png'
import FadeIn from 'react-fade-in';
export default function Hello() {
  return <div className="md:h-dvh flex flex-col md:flex-row items-center">
    <div className='flex justify-center items-center md:w-[50%] h-svh text-center'>
      <TypeAnimation
        sequence={[
          `Hi, I'm Szymon 🖐`,
          5000, 
          `I'm fullstack developer`,
          3500, 
          'I created this website in Next.js',
          3500,
          'Contact me and I will reply to you',
          3500,
          `Read more below`,
          3500
        ]}
        wrapper="span"
        style={{ fontSize: '3em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
    <FadeIn delay={250} className='flex flex-col items-center w-[50%]'>
      <Image
        className='rounded-2xl nodrag'
        src={Profile}
        width={250}
        height={250}
        alt="Hacki Avatar - Website owner"
      />
      <div className='p-5 text-4xl opacity-90'>Szymon Matloch</div>
      <div className='text-3xl opacity-60'>Developer</div>
      <Link className='mt-6 py-4 px-10 rounded-full border-2 text-xl bg-black flex items-center gap-2 hover:bg-white hover:text-black transition duration-300' href='/about'>MORE<FontAwesomeIcon icon={faAngleRight} /></Link>
    </FadeIn>
  </div>
}