"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import LinkButton from '@/Components/Buttons/LinkButton'
import Profile from '/public/images/profile.png'
import FadeIn from 'react-fade-in';
export default function Hello() {
  return <div className="min-h-[calc(100vh-80px)] p-5 flex flex-col md:flex-row items-center">
    <div className='flex justify-center items-center md:w-[50%] text-center text-3xl md:text-5xl h-32'>
      <TypeAnimation
        sequence={[
          `Hi, I'm Szymon 🖐`,
          5000, 
          'I created this website in Next.js',
          3500, 
          `Feel free to text me`,
          3500,
          `Read more below`,
          3500
        ]}
        wrapper="span"
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
    <FadeIn delay={250} className='flex flex-col items-center md:w-[50%]'>
      <Image
        className='rounded-2xl nodrag'
        src={Profile}
        width={250}
        height={250}
        alt="Hacki Avatar - Website creator"
      />
      <div className='text-center p-5 text-5xl opacity-90 bg-gradient-to-r from-purple-500  to-orange-400 inline-block text-transparent bg-clip-text'>Szymon Matloch</div>
      <div className='text-3xl opacity-60 mb-10'>Fullstack developer</div>
      <LinkButton text='MORE' href='/about' />
    </FadeIn>
  </div>
}