import { useState } from 'react'
import Footer from './Footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <div className='2xl:container px-2 mx-auto'>
            <Navbar/>
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
