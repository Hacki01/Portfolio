import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function Socials() {
  return <div className="text-3xl pt-4 flex gap-3">
      {/* linkedin */}
      <Link target='_blank' href='https://www.linkedin.com/in/szymon-matloch/' className='hover:text-accent flex items-center gap-2'><FontAwesomeIcon icon={faLinkedin} width={30}/></Link>
      {/* Github */}
      <Link target='_blank' href='https://github.com/Hacki01' className='hover:text-accent flex items-center gap-2'><FontAwesomeIcon icon={faGithub} width={30}/></Link>
      {/* Discord */}
      <Link target='_blank' href='https://discord.gg/6KysCG6Yak' className='hover:text-accent flex items-center gap-2'><FontAwesomeIcon icon={faDiscord} width={30}/></Link>
    </div>
}