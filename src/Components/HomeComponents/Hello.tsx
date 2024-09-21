"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import LinkButton from '@/Components/Buttons/LinkButton'
import Profile from '/public/images/profile.png'
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
        alt="Hacki Avatar - Website creator"
      />
      <div className='p-5 text-4xl opacity-90'>Szymon Matloch</div>
      <div className='text-3xl opacity-60 mb-10'>Developer</div>
      <LinkButton text='MORE' href='/about' />
    </FadeIn>
  </div>
}