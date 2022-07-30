import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'

const NavItems = () => {
    const [isNavItemsOpen, setIsNavItemsOpen] = useState(false)

    return (
        <div className='h-full'>
            <button
                className={`lg:hidden flex h-full w-10 relative border rounded-full ${isNavItemsOpen ? 'rotate-90' : ''} transition-transform`}
                onClick={() => setIsNavItemsOpen(curr => !curr)}
            >
                {isNavItemsOpen ? <IoCloseSharp className='m-auto text-xl' /> : <AiOutlineMenu className='m-auto text-lg' />}
            </button>
            <ul className='md:space-x-2 h-full hidden lg:flex'>
                <Link href='/' passHref>
                    <li className='md:h-full py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors md:rounded-full'>
                        Home
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='md:h-full py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors md:rounded-full'>
                        Cameras
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='md:h-full py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors md:rounded-full'>
                        microphones
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='md:h-full py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors md:rounded-full'>
                        Accessories
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='md:h-full py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors md:rounded-full'>
                        Shop by brand
                    </li>
                </Link>
            </ul>
            <ul
                className={`flex max-w-[250px] w-screen z-20 background border-x flex-col absolute -bottom-[calc(100vh_-_3.5rem)] lg:hidden h-[calc(100vh_-_3.5rem)] left-2 ${
                    isNavItemsOpen ? 'scale-x-100' : 'scale-x-0'
                } transition-transform origin-left`}
            >
                <Link href='/' passHref>
                    <li className='py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors'>
                        Home
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors'>
                        Cameras
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors'>
                        microphones
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors'>
                        Accessories
                    </li>
                </Link>
                <Link href='/' passHref>
                    <li className='py-4 hover:bg-[#101010] hover:text-white dark:hover:text-black dark:hover:bg-white cursor-pointer flex items-center px-4 transition-colors'>
                        Shop by brand
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavItems
