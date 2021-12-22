import React from 'react';


const Songslist = ({songName , albumName, creatorName, timeDuration , index , showImage}) => {
    return (
        <div className='grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer' >
        <>
               <div className='flex items-center space-x-4' >
            <p>{index}</p>
            <img src={showImage} alt=""
            className='h-10 w-10'
            />
            <div> 
                <p className="w-36 lg:w-64 text-white truncate">{songName}</p>
                <p className='w-40'>{creatorName}</p>
            </div>
        </div>
        <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className="w-40 hidden md:inline">{albumName}</p>
            <p>{timeDuration}</p>
        </div>
               </>
        
              
        
        </div>
    )
}

export default Songslist
