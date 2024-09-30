"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSteam, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Link from 'next/link';

const TEXTS = ['Contact me', 'Get in touch', 'Napisz do mnie', "Let's talk"];

export default function Contact() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row">
      <div className="text-6xl min-h-[300px] lg:w-[40%] flex items-center justify-center font-light">
        <TextTransition className='w-[80%]' springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </div>
      <div className="text-3xl w-full p-5 lg:w-[50%] lg:ml-[25%] justify-center m-auto flex flex-col gap-3">
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
  </div>
}