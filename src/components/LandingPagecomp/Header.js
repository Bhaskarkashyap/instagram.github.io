import React from 'react';
import { MenuIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className='bg-black text-white sticky top-0 left-0 right-0 leading-normal z-50 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto px-4 h-20'>
            <div className='h-10 lg:w-32 w-28 mt-2 lg:mt-1'>
                <img src="/images/Logo.svg" alt="logo" />
            </div>
            <nav>
                <MenuIcon className='h-8 lg:hidden' />
                <ul className='hidden lg:block '>
                    <li className=' inline-block'>
                        <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                            Premium
                        </a>
                    </li>
                    <li className=' inline-block'>
                        <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                            Support
                        </a>
                    </li>
                    <li className=' inline-block'>
                        <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                            Download
                        </a>
                    </li>
                    <li className='px-4 inline-block'>|</li>
                    <li className=' inline-block'>
                        <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                            Sign up
                        </a>
                    </li>
                    <li className=' inline-block'>
                        <Link to="/login" className='font-bold py-7 px-4 block hover:text-spotify '>
                            Log in
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    )
}

export default Header
