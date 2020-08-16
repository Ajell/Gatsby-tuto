import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'
// layout can be used for all of the pages
const Layout = ({children}) => 
    (
        <>
            <Navbar />
                <main>
                {children}
                </main>
            <Footer />
        </>
    )


export default Layout;