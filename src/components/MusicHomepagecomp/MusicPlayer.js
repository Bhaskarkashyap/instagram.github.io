import { FastForwardIcon, ReplyIcon, RewindIcon, SwitchHorizontalIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'


const MusicPlayer = ({showImage}) => {
    const [range , setRange] = useState()

    return (
        <div className='h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
        <div   className='flex items-center space-x-4 '>
            <img src={showImage} alt='' className='hidden md:inline h-10 w-10 ' />
      <div className='pointer-events-none'>
      <h3>song</h3>
         <p>singer</p>
      </div>
        </div>

        <div className='flex items-center justify-evenly'>
            <SwitchHorizontalIcon className='button' />
            <RewindIcon className='button'  />
            <PlayIcon className='button w-10 h-10'  />
            <FastForwardIcon className='button'  />
            <ReplyIcon  className='button'  />
        </div>

        <div className='flex items-center space-x-3 md:space-x-4 justify-end pr-5 '>
            <VolumeOffIcon className='button' />
            <input type='range' value={range} min={0} max={100} onChange={(e) => setRange(e.target.value)} />
            <VolumeUpIcon className='button' />
        </div>
        </div>
    )
}

export default MusicPlayer
