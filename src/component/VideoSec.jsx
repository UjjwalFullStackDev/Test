import React from 'react'
import offer from '../assets/offer1.mp4'

const VideoSec = () => {
  return (
    <section className='w-full flex justify-center items-start relative h-screen'>
        <video src={offer} autoPlay={true}></video>
    </section>
  )
}

export default VideoSec