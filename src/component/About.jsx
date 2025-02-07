import React from 'react'
import mvn from '../assets/mvn.webp'
import sPlain from '../assets/splain.webp'

const About = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center py-12 gap-6 relative h-screen bg-black'>
            <img src={mvn} alt="plan" width={220} />
            <div className='gap-2'>
                <h3 className='text-xl text-white'>GURUGRAM</h3>
                <h3 className='text-md text-orange-300 italic'>NEW LAUNCH</h3>
            </div>
            <h3 className='flex justify-center items-center text-white text-xl'>Behold to Experience the complete view!</h3>
            <div className='flex justify-center'>
                <button className='px-6 py-2 bg-orange-200 text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition'>Click here</button>
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <img src={sPlain} alt="singlePlain" width={60} className='mt-12' />
                <h2 className='text-xl text-orange-300 uppercase font-bold'>40+ years of delivering trust and projects on time</h2>
                <p className='text-white w-[60%] text-center'>MVN Infrastructure introduces MVN Aero One residences, the largest ultra-luxury apartments in Delhi NCR,
                located at the 22-kilometer stone on Dwarka Expressway. These stunning 5.5 BHK residences offer breathtaking 360-degree
                panoramic views and set a new standard for luxury living. MVN is poised to add yet another wonder to the world.</p>
            </div>
        </section>
    )
}

export default About