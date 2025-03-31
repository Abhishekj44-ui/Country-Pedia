import React from 'react'
import { NavLink } from 'react-router';

const CountryCard = ({country}) => {

  const { flags, name, population, region, capital} = country;

  return (
    <li className='text-white flex   '>
        
        <div className='card rounded-4xl  w-100'>
           <img src={flags.svg} alt={flags.alt}  /> 
           <div className='font-bold text-4xl'>{name.common.length > 10 ? name.common.slice(0,10) +"..." : name.common}</div>
           <p>Population: <span className='text-sky-200'>{population}</span> </p>
           <p>Region: <span className='text-sky-200'>{region}</span></p>
           <p>Capital: <span className='text-sky-200'>{capital}</span></p>
           <NavLink to={`/country/${name.common}`}>
             <button className='country-button'>Read More</button>
           </NavLink>
        </div>
        
    </li>
  )
}

export default CountryCard
