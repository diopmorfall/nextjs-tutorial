import Link from "next/link";

export default function NotFound(){
    return(
        <main className="text-center">
            <h2 className="text-3xl">We hit a brick wall</h2>
            <p>We conldn't find the ticket you were looking for</p>
            <p>Go back to all the <Link href="/tickets">tickets</Link></p>
        </main>
    )
}

//* this page is scoped for any non-existant route in the tickets route, even nested ones