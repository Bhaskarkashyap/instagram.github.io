import React, { useState } from 'react'
import { aboutData } from '../../constant/aboutData'

const About = () => {
    const [aboutContent] = useState(aboutData)  ;
    return (
        <section className=' max-w-6xl mx-auto '>
            <article className='py-20 px-3.5'>
              <header className='text-center mb-16 leading-normal '>
                  <h2 className='text-4xl font-black max-w-2xl mx-auto '>Why Spotify?</h2>
              </header>
              <ul className='flex lg:flex-nowrap flex-wrap  '>
                 {
                    aboutContent.map(({id , imgUrl , headline , aboutPara}) => (
                        <li className='w-6/12' key={id}>
                        <div className='w-36 h-36 bg-center bg-contain flex-grow-1 bg-no-repeat mt-5 lg:mt-0 mx-auto mb-10 ' style={{backgroundImage:`url(${imgUrl})`}} ></div>
                        <div className='block text-center my-1'>
                            <p className='font-bold text-xl mb-2.5 '>{headline}</p>
                            <p className='w-10/12 mx-auto leading-normal '>{aboutPara}</p>
                        </div>
                    </li>
                    ))
                 }
              </ul>
            </article>
        </section>
    )
}

export default About
