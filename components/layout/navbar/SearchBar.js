import { useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SearchBar = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
    const input = useRef()

    return (
        <div className='items-center min-w-[2.5rem] h-10 hover:shadow-md transition-shadow rounded-full flex md:dark:bg-neutral-900 md:bg-neutral-100 justify-center dark:border-neutral-700'>
            <button className='h-full w-full flex justify-center items-center md:hidden' onClick={() => {
                setIsSearchBarOpen(curr => !curr)
                input.current.focus()
            }}>
                <IoSearchOutline className='text-xl' />
            </button>
            <IoSearchOutline className='md:ml-2 left-3 text-xl md:block hidden' />
            <input
                type='text'
                placeholder='search products'
                ref={input}
                className={`md:h-full focus:placeholder:text-transparent absolute px-4 md:rounded-full md:pl-4 text-base md:w-80 md:static right-0 h-10 top-full ${
                    isSearchBarOpen ? 'scale-y-100' : 'scale-y-0'
                } w-full transition-transform origin-top md:scale-y-100 bg-neutral-100 dark:bg-neutral-900 dark:md:bg-transparent md:bg-transparent`}
            />
        </div>
    )
}

export default SearchBar
