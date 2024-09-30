'use client'
import Wave from 'react-wavify'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
export default function Footer() {
  return <div className='relative'>
    <Wave fill='var(--accentColor)'
      paused={false}
      style={{ display: 'flex', opacity:'15%'}}
      options={{
        height: 30,
        amplitude: 50,
        speed: 0.2,
        points: 3
      }}
    ></Wave>
    <button onClick={scrollToTop} className='absolute opacity-50 left-[50%] bottom-0 translate-x-[-50%]'>Take me to the top</button>
  </div>
}