import React from 'react'
import heroImg from '../assets/hero_img.webp'

const Hero = () => {
  return (
    <section className='w-full flex justify-center items-start relative h-screen'>
       <a
        href="#"
        className="block w-full h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={heroImg}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </a>
       {/* Overlay Content */}
       <div className="flex flex-col justify-center text-white absolute bottom-10">
        <h1 className="text-xl font-bold mb-6">Enter The Experience Center</h1>
        <div className='flex justify-center'>
        <button className='px-6 py-2 bg-orange-200 text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition'>Click here</button>
        </div>
      </div>
    </section>
  )
}

export default Hero