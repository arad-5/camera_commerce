import { FiMoon } from 'react-icons/fi'
import { RiSunLine } from 'react-icons/ri'

const DarkModeSwitch = () => {
    return (
        <button className='h-10 w-10 flex rounded-full justify-center items-center border hover:shadow-md transition-shadow' onClick={() => document.body.classList.toggle('dark')}>
            <RiSunLine className='m-auto text-xl dark:opacity-100 opacity-0 dark:rotate-90 transition-transform duration-300' />
            <FiMoon className='m-auto text-xl absolute  dark:opacity-0 dark:rotate-90 transition-transform duration-300' />
        </button>
    )
}

export default DarkModeSwitch
