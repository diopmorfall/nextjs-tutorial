import { notFound } from "next/navigation";

export const dynamicParams = true;
//* we can use it when we request an id for a page that wasn't pre-rendered, maybe to lead to a 404 page
//* but if it's true (default value), Next is gonna try to fetch that id and if exists, it'll create the static page

export async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()
    return tickets.map(ticket => ({
        id: ticket.id
    }))
}
//* this function will allow us to pre-render all the pages ahead of time, by defining the ids and all the routes
//! it only can work if the revalidation is not 0, otherwise it doesn't make sense to pre-render pages that always change


async function getTicket(id){
    //await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 0 
        }
    })

    if(!res.ok){ //* we have to check the response to serve the 404 page if needed
        notFound()
    }

    return res.json()
}

export default async function TicketDetails({ params }){
    const ticket = await getTicket(params.id)

    return(
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}

//* if I want to access a dynamic segment, the folder name must be between brackets