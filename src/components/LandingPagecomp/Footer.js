import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white relative bottom-0 left-0 right-0 leading-normal z-50 '>
        <div className='flex justify-between items-center max-w-6xl mx-auto px-4 h-20'>
        <div className='h-10 lg:w-32 w-28 mt-2 lg:mt-1'>
            <img src="/images/Logo.svg" alt="logo" />
        </div>
        <nav>
        
            <ul className='block '>
                <li className=' inline-block'>
                    <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                        FB
                    </a>
                </li>
                <li className=' inline-block'>
                    <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                       In
                    </a>
                </li>
                <li className=' inline-block'>
                    <a href="/#" className='font-bold py-7 px-4 block hover:text-spotify '>
                        i
                    </a>
                </li>
            
            </ul>
        </nav>
    </div>
        <p className='max-w-6xl mx-auto p-4'>&copy; 2021 spotify clone</p>
  </footer>
    )
}

export default Footer
