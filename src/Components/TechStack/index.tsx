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
    name: 'Typescript',
    icon: 'devicon-typescript-plain',
  },
  {
    name: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-original',
  },
]

function StackList (props: { items: Technology[] }) {
  const items = props.items
  return <div className='flex flex-wrap gap-2 font-light py-'>
    {
      items.map((e,key) => {
        const { name, icon } = e
        return <div key={key} className={`bg-slate-400 gap-2 bg-opacity-15 p-2 text-xl flex items-center rounded-md hover:bg-zinc-700`} title={name}>
          <i className={icon}></i>
          <div className='opacity-70'>{name}</div>
        </div>
      })
    }
  </div>
}

export default async function TechStack() {
  return <div className='mt-6'>
    <StackList items={mainTechStackList}/>
    <button className={`bg-slate-400 gap-2 mt-1 bg-opacity-15 p-2 text-xl flex items-center rounded-md hover:bg-zinc-700`}>More...</button>
  </div>
}