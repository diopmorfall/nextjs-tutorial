import Link from "next/link";

async function getTickets(){
    //todo: the json server only works locally I guess, check it
    //todo: npm install json-server -g, json-server --watch --port 4000 ./_data/db.json
    /*const res = await fetch('localhost:4000/tickets', {
        next: {
            revalidate: 30 //* this allows us to attempt a new request only after 30 seconds from the previous one
            //* even if we attempt a second one, we'll get the cached version because it's available; but it'll be revalidated
            //* the third request instead will be updated, if the response changed in any way
            //* if it's 0, data won't be cached and every time we're performing a new request
        }
    })*/
    //return res.json()
    const res = {
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
    return res;
}

export default async function TicketList(){ //? an asynchronous component
    const tickets = await getTickets();
    return(
        <>
            {tickets.tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/ticket/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.tickets.length === 0 && (
                <p className="text-center">There are no open tickets!</p>
            )}
        </>
    )
}