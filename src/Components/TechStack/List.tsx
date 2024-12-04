"use client";
import { useState } from "react";
import FadeIn from 'react-fade-in';

interface Technology {
  name: string;
  icon: string;
}

const mainTechStackList: Technology[] = [
  {
    name: 'React',
    icon: 'devicon-react-original',
  },
  {
    name: 'Next.js',
    icon: 'devicon-nextjs-plain',
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
  },
  {
    name: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-original',
  },
]

const otherTechStackList: Technology[] = [
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain',
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
  },
  {
    name: 'GIT',
    icon: 'devicon-git-plain',
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain',
  },
  {
    name: 'Express',
    icon: 'devicon-express-original',
  },
]


function TechTile(props:{technology: Technology}) {
  const { name, icon } = props.technology
  return <div className={`bg-slate-400 gap-2 bg-opacity-15 p-2 text-xl flex items-center rounded-md hover:bg-zinc-700`} title={name}>
    <i className={icon}></i>
    <div className='opacity-70'>{name}</div>
  </div>
}

export default function TechStackList() {
  const [isMoreVisible, setMoreVisible] = useState(false)
  return <FadeIn delay={150} className='mt-3 flex flex-wrap gap-1 font-light'>
    {
      mainTechStackList.map((e,key) => {
        return <TechTile technology={e} key={key}/>
      })
    }
    {isMoreVisible ? 
      otherTechStackList.map((e,key) => {
        return <TechTile technology={e} key={key}/>
      })
    : <button onClick={() => {setMoreVisible(true)}} className={`bg-slate-400 gap-2 bg-opacity-15 p-2 text-xl flex items-center rounded-md hover:bg-zinc-700`}>More...</button>}
  </FadeIn>
}