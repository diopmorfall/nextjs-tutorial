import Image from 'next/image' //* this is a Next component
//* most of our content will be driven from here

export default function Home() {
    return (
        <main>
            <h2 className='text-2xl font-bold'>Dashboard</h2>
            <p>Next.js aims to give a better developer and user experience</p>
            <h2 className='text-xl mt-5'>Client-side rendering</h2>
            <p>
                The content is rendered by the browser (for example, we get and empty HTML and a big JS bundle from the server, which'll be loaded by the browser, like in React apps).
                It makes pages interactive (events, ecc), but the downside is that it's bad for SEO and it can hinder performances since it's all running in the browser
            </p>
            <h2 className='text-xl mt-5'>Server-side rendering</h2>
            <p>
                Here the HTML content is rendered by the server before it's sent to the browser.We also send a smaller JS bundle to the client to hydrate our page (all the interactivity
                will be loaded when it'll reach the browser). This makes it better for SEO and performances
            </p>
            <h2 className='text-xl mt-5'>Client components</h2>
            <p>
                These are components that are rendered on the server, then hydrated on the client to add the interactivity
            </p>
            <h2 className='text-xl mt-5'>Server components</h2>
            <p>
                These components are also rendered on the server, but they don't need to additional JS to be sent to the client to be hydrated, improving performances even more.
                We might decide to fetch databases, APIs and access back-end resources from this components. But remember, since they're not hydrated they won't be interactive 
                (but we can use client components even for the small parts of a page that need to be interactive, we need to specify them).<br/><br/>
                <span className='italic'>By default, a components starts as a server one</span>: we must use them as much as possible, and then add the client ones where we need interactivity
            </p>
        </main>
    )
}
