import TechStack from '@/Components/TechStack'
import IconCloud from '@/Components/TechStack/IconClaud'

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "express",
  "firebase",
  "linux",
  "windows",
  "nextdotjs",
  "github",
  "lua",
  "fontawesome",
  "jquery",
  "mysql",
  "php",
  "visualstudiocode",
  "tailwindcss",
  "unity",
  "wordpress",
  "discord",
  "clickup",
  "notion"
];

export default function Stack() {
  return <div>
    <div className='mt-14 text-4xl opacity-65'>Tech Stack</div>
      <TechStack/>
      <div className='flex justify-center'>
        <IconCloud iconSlugs={slugs}/>
      </div>
  </div>
}