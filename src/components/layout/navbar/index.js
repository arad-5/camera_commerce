import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch'
import SearchBar from './SearchBar'
import Link from 'next/link'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <div className='h-14 sticky sm:px-5 top-0 left-0 z-50 w-full px-2'>
            <div className='px-2 container border-b dark:border-b-0 mx-auto rounded-b-3xl h-full background justify-between items-center flex py-2'>
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
