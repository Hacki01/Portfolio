"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in';
export default function Hello() {
  return <FadeIn delay={300}>
      <div className='flex items-baseline gap-3'>
        <div className='text-5xl opacity-80 mt-40'>Hi, I&apos;m</div>
        <div className='text-6xl bg-gradient-to-r from-purple-500  to-orange-400 inline-block text-transparent bg-clip-text'>Szymon Matloch</div>
      </div>
      <div className='opacity-60 text-4xl font-light'>
        Full stack Developer
      </div>
      <div className='flex gap-6'>
      <div className='mt-3 flex gap-1 h-6 opacity-50 items-center hover:opacity-90 transition delay-100'><FontAwesomeIcon icon={faLocationDot} width={24}/> Jastrzębie-Zdrój, Poland (Remote)</div>
      <div className='mt-3 flex gap-1 h-6 opacity-50 items-center hover:opacity-90 transition delay-100'><FontAwesomeIcon icon={faAt} width={24}/> Szymon.Matloch11@gmail.com</div>
      </div>
    </FadeIn>
}