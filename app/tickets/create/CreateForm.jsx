"use client"
//* this makes it a client component
//* a good practice is to make the small client component, and then integrate it into a bigger server one
//? in this case, only the form needs to be interactive

import { useRouter } from "next/router"
import { useState } from "react"

export default function CreateForm(){
    const router = useRouter();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const ticket = {
            title,
            body,
            priority,
            user_email: 'hero.garp@marines.op'
        }
        //! needs json-server, test it locally
        const res = await fetch('localhost:4000/tickets', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201){
            router.refresh()
            //* this allows us to refresh the app, otherwise we still see the cached version of the tickets
            router.push('/tickets')
        }
    }

    return(
        <main>
            <form className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    required 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select 
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button 
                    className="btn-primary" 
                    disabled={isLoading}
                >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
            </form>
        </main>
    )
}