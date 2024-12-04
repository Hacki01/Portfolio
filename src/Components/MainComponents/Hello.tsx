"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSteam, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in';
import Link from 'next/link';
export default function Hello() {
  return <FadeIn delay={300}>
      <div className='flex items-baseline gap-3'>
        <div className='text-5xl opacity-80 mt-40'>Hi, I&apos;m</div>
        <div className='text-6xl bg-gradient-to-r from-purple-500  to-orange-400 inline-block text-transparent bg-clip-text'>Szymon Matloch</div>
      </div>
      <div className='opacity-60 text-4xl font-light'>
        Full stack Developer
      </div>
      <div className='mt-3 flex gap-2 h-6 opacity-50'><FontAwesomeIcon icon={faLocationDot} width={24}/> Jastrzębie-Zdrój, Poland (Remote)</div>
      <div className="text-2xl lg:text-3xl pt-2 flex flex-col gap-3">
        {/* email address */}
        <Link target='_blank' href='mailto:szymon.matloch11@gmail.com' className='hover:gap-7 transform duration-100 hover:text-accent flex items-center gap-5'><FontAwesomeIcon icon={faAt} width={24}/>Szymon.Matloch11@gmail.com</Link>
        {/* discord nickname */}
        <Link target='_blank' href='https://discord.gg/6KysCG6Yak' className='hover:gap-7 transform duration-100 hover:text-accent flex items-center gap-5'><FontAwesomeIcon icon={faDiscord} width={24}/>Discord</Link>
        {/* linkedin */}
        <Link target='_blank' href='https://www.linkedin.com/in/szymon-matloch/' className='hover:gap-7 transform duration-100 hover:text-accent flex items-center gap-5'><FontAwesomeIcon icon={faLinkedin} width={24}/>LinkedIn</Link>
        {/* Github */}
        <Link target='_blank' href='https://github.com/Hacki01' className='hover:gap-7 transform duration-100 hover:text-accent flex items-center gap-5'><FontAwesomeIcon icon={faGithub} width={24}/>Github</Link>
        {/* Steam */}
        <Link target='_blank' href='https://steamcommunity.com/id/Hacki11/' className='hover:gap-7 transform duration-100 hover:text-accent flex items-center gap-5'><FontAwesomeIcon icon={faSteam} width={24}/>Steam</Link>
      </div>
    </FadeIn>
}