import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//* this page contains all our pages, and can be used to include all of the components and parts that can be repeated across multiple components
//? instead of adding them to each component, we add them here
//* the layout component is always displayed, with the children the currently rendered component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

//? the Link component is a wrapped <a> that intercepts any request for the server, and handles the routing in the browser