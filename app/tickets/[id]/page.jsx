import { notFound } from "next/navigation";

export const dynamicParams = true;
//* we can use it when we request an id for a page that wasn't pre-rendered, maybe to lead to a 404 page
//* but if it's true (default value), Next is gonna try to fetch that id and if exists, it'll create the static page

export default async function generateStaticParams(){
    const res = await fetch('localhost:4000/tickets')
    const tickets = await res.json()
    return tickets.tickets.map(ticket => ({
        id: ticket.id
    }))
}
//* this function will allow us to pre-render all the pages ahead of time, by defining the ids and all the routes
//! it only can work if the revalidation is not 0, otherwise it doesn't make sense to pre-render pages that always change


async function getTicket(id){
    /*const res = await fetch('localhost:4000/ticket/' + id, {
        next: {
            revalidate: 60 
        }

        if(!res.ok){ //* we have to check the response to serve the 404 page if needed
            notFound()
        }
    })
    return res.json()*/
    const tickets = {
        "tickets": [
          {
            "id": "1",
            "title": "Fix the footer links please",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "low",
            "user_email": "mario@netninja.dev"
          },
          {
            "id": "2",
            "title": "Add in a new stylesheet",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "medium",
            "user_email": "mario@netninja.dev"
          },
          {
            "id": "3",
            "title": "Fix the footer links",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "high",
            "user_email": "peach@netninja.dev"
          }
        ]
    }

    return tickets.tickets[id];
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