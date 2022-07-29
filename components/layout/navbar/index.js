import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
    return (
        <div className='h-14 sticky top-0 left-0 bg-neutral-50 dark:bg-neutral-900 w-screen'>
            <div className='container sm:px-20 h-full justify-between items-center flex'>
                <DarkModeSwitch />
            </div>
        </div>
    )
}

export default Navbar
