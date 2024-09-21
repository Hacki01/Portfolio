import Link from 'next/link'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function LinkButton(props:{href: string, text: string}) {
  const {href,text} = props
  return <Link href={href}>
    <Button variant="outlined" size="large" color='secondary'>
      <div className='mr-2'>{text}</div>
      <FontAwesomeIcon icon={faAngleRight} width={10} />
    </Button>
  </Link>
}