import React from 'react'
import View360 from '../assets/360View.webp'

const View = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center relative h-screen bg-black'>
        <img src={View360} alt="360" />
        <div className='flex justify-center'>
        <button className='px-6 py-2 bg-orange-200 text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition'>Click here</button>
        </div>
    </section>
  )
}

export default View