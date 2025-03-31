
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import earth from "../../assets/earth.png";


const HeroSection = () => {
  return (
    <main className='flex justify-center'>
      <div className='w-400  flex items-center sm:flex-row flex-col hero-section '>
        <div className='flex flex-col gap-12 hero-content '>
           <h1 className='text-6xl '>Discover Every Corner of The World</h1>
           <p className='p-5'>Uncover the wonders of our planet,from iconic landmarks to hidden gems.Learn about the traditions,
            languages,and landscapes that make each counry unique.
           </p>
           <button className='w-80 ' >
            Start Exploring
            <FaArrowRightLong />
            </button>
        </div>


        <div> <img src={earth} alt="this is earth Image" /></div>
      </div>
    </main>
  )
}

export default HeroSection
