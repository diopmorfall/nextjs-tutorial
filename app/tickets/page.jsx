import TicketList from "./TicketList";

export default function Tickets(){
    return(
        <main>
           <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Open tickets</small></p>
            </div>
           </nav>
           <TicketList/>
        </main>
    )
}

//* to add pages, we must create a new directory with the name we want
//! but the page file must always be named as page.jsx (or .tsx)
//? I can also create nested routes too, I just have to nest folders
//todo: install the extension ES7 + React/Redux/React-Native Snippets