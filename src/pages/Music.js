import React, { useEffect, useState } from 'react'
import Maincontent from '../components/MusicHomepagecomp/Maincontent'
import MusicPlayer from '../components/MusicHomepagecomp/MusicPlayer';
import Sidebar from '../components/MusicHomepagecomp/Sidebar';
import { playlistData } from '../constant/playlistData';


const Music = () => {
    const [listId , setListId] = useState(0);
    const [showImage , setImage] = useState(playlistData[listId].imgUrl);
    const [creatorName , setCreatorName] = useState(playlistData[listId].name);
    const [songList , setSongList] = useState([playlistData[listId].songList]);

// useEffect(() => {
//     setImage(playlistData[listId].imgUrl)
//     setCreatorName(playlistData[listId].name)
//     setSongList(playlistData[listId].songList)
// }, [listId])

    return (
     <div className=' relative w-full h-screen bg-black overflow-hidden'>
            <main className='flex'>
            <Sidebar setListId={setListId} />
            <Maincontent listId={listId} showImage={showImage} creatorName={creatorName} songList={songList} />
        </main>
         
     

        <div  className='fixed bottom-0 right-0 left-0'>
        <MusicPlayer showImage={showImage} />
        </div>

     </div>
    )
}

export default Music


