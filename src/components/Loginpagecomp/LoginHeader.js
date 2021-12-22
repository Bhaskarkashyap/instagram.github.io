import React from 'react'

const LoginHeader = () => {
    return (
        <div className='w-full h-screen overflow-hidden max-w-sm lg:max-w-xl mx-auto '>
    
         <div className=' pt-10 flex justify-center mb-20 '>
          <img src='/images/LogoBlack.svg' alt='' className='w-64' />
          </div>
  
    <button className='bg-spotify py-4 px-10 rounded-31.25 text-white w-full transform hover:bg-black transition-all duration-75 ease-in-out '>Login with spotify</button>
       
  
        </div>
    )
}

export default LoginHeader
