import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch'
import SearchBar from './SearchBar'
import Link from 'next/link'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <div className='h-14 sticky top-0 left-0 border-b w-screen'>
            <div className='px-2 container mx-auto h-full  justify-between items-center flex py-2'>
                <NavItems />
                <div className='flex h-full space-x-4'>
                    <SearchBar />
                    <DarkModeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Navbar
