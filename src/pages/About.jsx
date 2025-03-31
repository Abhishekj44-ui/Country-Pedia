import React from 'react'
import countryData from "../api/countriesData.json"
const About = () => {
  return (
    <section className='flex justify-center' >
      <div className='flex  flex-col items-center' >
        <h1 className='text-8xl text-center  about-heading '>
            Let's Explore The Globe Together
          
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-20  md:grid-cols-3 '>

       {countryData.map((country) => {
          return (
            <div className='text-white  rounded-4xl card w-max'>
            <div>
            <h1 className='text-5xl text-white font-bold '>{country.countryName}</h1>
            <div >
                <p >Capital:{country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Fact:{country.fact}</p>
            </div>
            </div>
        </div>
          );
       })}
          
          
             
        </div>
      </div>
    </section>
  )
}

export default About
