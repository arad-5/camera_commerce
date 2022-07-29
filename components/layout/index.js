import { useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <Navbar/>
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout
