import React, { useEffect, useState } from 'react'
import {BsPlay, BsPause } from 'react-icons/bs'

const SectionSong = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const playSong = () => {
    const ref = document.querySelector(".myAudio")

    if(isPlaying){
      ref.play()
    } else {
      ref.pause()
    }
  }

  useEffect(() => {
    playSong()
  })

  return (
    <div className='fixed bottom-2 right-2 z-20'>
      <button
        className='border border-blue-500 rounded-full bg-white shadow-xl p-1'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {
          isPlaying ? (
            <BsPause className='text-4xl' />
          ) : (
            <BsPlay className='text-4xl' />
          )
        }
      </button>

      <audio className='myAudio'>
        <source src="/assets/hmc-mgr.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default SectionSong