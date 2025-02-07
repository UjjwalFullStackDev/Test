import React from 'react'
import sPlain from '../assets/splain.webp'
import bgm from '../assets/bangalore-project-map.webp'
import bgm1 from '../assets/mvn-aeroone-Cdu5hd3a.webp'
import bgm2 from '../assets/mvn-mall-rkuluiya.webp'

const OurProjects = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center py-12 gap-6 relative bg-black'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src={sPlain} alt="singlePlain" width={60} className='mt-12' />
                <h2 className='text-xl text-orange-300 uppercase font-bold'>Explore Our Projects</h2>
                <p className='text-white w-[60%] text-center'>MVN Infrastructure introduces MVN Aero One residences,
                    the largest ultra-luxury apartments in Delhi NCR,
                    located at the 22-kilometer stone on Dwarka Expressway.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 px-4 md:px-0 screen-max-widht h-[600px]">
                {/* Column 1 */}
                <div className="relative w-full md:w-1/3 h-full">
                    <img alt="MVN Aero World background with airplane silhouette" className="w-full h-full object-cover" src={bgm} />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"/>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h2 className="text-4xl font-bold text-orange-300">MVN</h2>
                        <h3 className="text-2xl text-orange-300">AERO WORLD</h3>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="relative w-full md:w-1/3 h-full">
                    <img alt="MVN Aero One Residences building" className="w-full h-full object-cover" src={bgm1} />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded">New Launch</div>
                    <div className='flex justify-between py-2 items-center text-white'>
                        <div className="text-lg">MVN AERO ONE RESIDENCES</div>
                        <div className="text-lg text-yellow-500">
                            View Detail <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="relative w-full md:w-1/3 h-full">
                    <img alt="MVN Mall building" className="w-full h-full object-cover" src={bgm2} />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded">New Launch</div>

                    <div className='flex justify-between py-2 items-center text-white'>
                        <div className="text-lg">MVN MALL</div>
                        <div className="text-lg text-yellow-500">
                            View Detail <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default OurProjects