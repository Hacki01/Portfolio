import Hello from '@/Components/MainComponents/Hello'
import Stack from '@/Components/MainComponents/Stack'
import Socials from '@/Components/MainComponents/Socials'

export default function Portfolio() {
  return (
    <div className='mainpage max-w-[900px] w-full mx-auto'>
      <Hello/>
      <Socials/>
      <Stack/>
    </div>
  );
}
