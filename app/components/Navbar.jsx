import Link from 'next/link'

export default function Navbar(){
    return(
        <nav>
          <h1>Blue Lock Project</h1>
          <Link href="/">Dasboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    )
}