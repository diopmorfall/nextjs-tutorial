import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function Navbar(){
    return(
        <nav>
          <Image
            src={Logo}
            alt='Dojo Helpdesk Logo'
            width={70}
            quality={100}
            placeholder='blur'
          />
          <h1>Blue Lock Project</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    )
}

//* with the Image component we can import images, and specify many properties
//* placeholder shows a blur while the image is loading