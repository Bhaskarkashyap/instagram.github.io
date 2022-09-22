import { ChevronDownIcon, ClockIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Songslist from './Songslist';



const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",

]

const Maincontent = ({ creatorName, showImage, songList }) => {
    const navigate = useNavigate();
    const [color, setColor] = useState(null);
    const [logOut, setLogOut] = useState(false);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [songList])

    return (
        <>
            <div className='flex-grow h-screen overflow-y-scroll  scrollbar-hide'>
                <header className='absolute top-5 right-8 ' onClick={() => setLogOut(!logOut)}>
                    <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white '>
                        <img
                            className='rounded-full w-10 h-10'
                            src='/images/music.png'
                            alt=''
                        />
                        <h2>user</h2>
                        <ChevronDownIcon className='h-5 w-5' />
                    </div>
                </header>

                <aside className='absolute top-20  right-8 flex items-center justify-center  text-white'>
                    {logOut && <button className='bg-black px-4 py-1 rounded-full' onClick={() => navigate('/')} >Log out</button>}
                </aside>

                <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}>
                    <div className='h-44 w-44'>

                        <img src={showImage} alt='' className='w-full h-full object-cover shadow-2xl' />
                     
                    </div>
                    <div>
                        <p>PLAYLIST</p>
                        <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold '>{creatorName}</h1>
                    </div>
                </section>

                <div>
                    <div className='border-b-1 border-gray-700 text-gray-400 font-semibold grid grid-cols-2 px-5 w-full p-2'>
                        <h2 className='pl-5'><span>#</span> TiTLE</h2>
                        <div className='flex items-center justify-between ml-auto md:ml-0 '>
                            <p className="w-40 hidden md:inline">ALBUM</p>
                            <ClockIcon className='button' />
                        </div>
                    </div>

                    {songList.map((songs, index) => {
                        return (
                            <Songslist {...songs} key={songs.id} index={index + 1} showImage={showImage} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Maincontent
