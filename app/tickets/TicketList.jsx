import Link from "next/link";

async function getTickets(){
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 30
            //* this allows us to attempt a new request only after 30 seconds from the previous one
            //* even if we attempt a second one, we'll get the cached version because it's available; but it'll be revalidated
            //* the third request instead will be updated, if the response changed in any way
            //* if it's 0, data won't be cached and every time we're performing a new request
            //* this makes it a case of dynamic rendering, because it's not predictably going to render the page because its content may change often
            //* otherwise, if we set the revalidation Next is going to use the static rendering, using the cached version of the page
        }
    })
    return res.json()
}

export default async function TicketList(){ //? an asynchronous component
    const tickets = await getTickets();
    return(
        <>
            {tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets!</p>
            )}
        </>
    )
}