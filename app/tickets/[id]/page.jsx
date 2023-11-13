async function getTicket(id){
    /*const res = await fetch('localhost:4000/ticket/' + id, {
        next: {
            revalidate: 60 
        }
    })
    return res.json()*/
}

export default async function TicketDetails({ params }){
    //const id = await getTicket(params.id)

    return(
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>
            <div className="card">
                <h3>Title</h3>
                <small>Created by email</small>
                <p>Ticket body</p>
                <div className={`pill`}>
                    priority
                </div>
            </div>
        </main>
    )
}

//* if I want to access a dynamic segment, the folder name must be between brackets