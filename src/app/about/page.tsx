import Image from 'next/image'
import LinkButton from '@/Components/Buttons/LinkButton'
import Profile from '/public/images/profile.png'
import TechStack from '@/Components/TechStack'

export default function About() {
  return <div className="text-2xl flex flex-col items-center">
    <div className="w-3/5">
      <div className='flex flex-col text-center mt-40'>
        <Image
          className='rounded-2xl nodrag shadow-md shadow-white m-auto'
          src={Profile}
          width={250}
          height={250}
          alt="Hacki Avatar - Website creator"
        />
        <div className='p-5 text-6xl opacity-90'>Szymon Matloch</div>
        <div className='text-4xl opacity-60 mb-6'>Fullstack Developer</div>
        <LinkButton href='/contact' text='CONTACT' />
        <div className='text-4xl mt-12'>Tech Stack</div>
        <TechStack/>
      </div>
    </div>
  </div>
}