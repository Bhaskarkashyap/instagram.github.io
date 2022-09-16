import React from 'react'
import {Link } from 'react-router-dom';

const Showcase = () => {

    return (
        <section>
            <article className='h-37.5 '  style={{background:'url(/images/bubbles.svg) center -138px / 100% 1068px no-repeat, linear-gradient(-45deg, rgb(108, 14, 224) -5%, rgb(240, 55, 166))'}} >

            <div className='max-w-6xl mx-auto relative flex '>

               <div className='relative justify-center w-2/5 pt-28 hidden lg:flex'>
            <svg viewBox="0 0 290 590.58" aria-hidden="true" focusable="false" className="sc-dOxWGz gdtYNR w-17.875 h-35.813 "><path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path><path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
               <div className='absolute right-0 left-0 -bottom-12  flex justify-center h-35.938 '>
                   <img src='/images/mobileInner.jpg' alt='' className='w-16.688 h-27.813 ' />
               </div>
               </div>
          <div className="pt-44 pr-4 pb-0 lg:pl-0 w-full pl-10 lg:w-2/3 text-white ">
              <h1 className='text-6xl font-black leading-tight max-w-2xl pb-8'>Play millions of songs and podcasts, for free.</h1>
          
           <button className="font-bold uppercase
           py-4 px-12 bg-white text-black rounded-31.25 transform hover:scale-105" >
            <Link to='/music'>Get spotify free</Link>
            </button>
  
          </div>

            </div>
            </article>
        </section>
    )
}

export default Showcase
