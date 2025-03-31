import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router'
import { getIndividualCountry } from '../../api/PostApi';

const CountryDetails = () => {
    const params = useParams();
   

    const [isPending,startTransition] = useTransition();
    const [country,setCountry] = useState();

    useEffect( () => {
      startTransition( async () => {
        const res = await getIndividualCountry(params.id);
        console.log(res);
        if (res.status === 200){
          setCountry(res.data[0]);
        } 
        
      })
    },[])

    if(isPending) {
      return (
        <div className='flex justify-center  w-full h-full items-center'>
        <div className="w-20  h-20 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin">

        </div>
    </div>
      )
    }

    if (!country) return <p>Loading country details...</p>;
    
  return (
    <section className=' flex  sm:h-[90vh] h-[120vh] items-center country-details-container'>
       <div className='flex justify-evenly flex-col gap-20 sm:flex-row w-full bg-blue-600  items-center h-[120vh]
          country-details-inner-container sm:h-[60vh]
       '>
         <div>
           <img src={country.flags.svg}
            className='w-90'
           alt={country.flags.alt} /> 
          
         </div>
         <div>
          
            <div >
               <h1 className='text-7xl font-bold country-details-heading'>{country.name.common}</h1>
               <p >
                Native Names:
                   <span className='text-blue-200'  >
                       {Object.keys(country.name.nativeName).map( (key) => country.name.nativeName[key].common).join(", ")}
                   </span>
              </p> 
              <p>
                Population: <span className='text-blue-200' >{country.population}</span>
              </p>
              <p>
                Region: <span className='text-blue-200' >{country.region}</span>
              </p>
              <p>
                Sub Region: 
                <span className='text-blue-200' >{country.subregion}</span>
              </p>
              <p>
                Capital: 
                <span className='text-blue-200' > {country.capital} </span>
              </p>
              <p> 
                Top Level Domain: 
                 <span className='text-blue-200' > {country.tld[0]}</span> 
              </p>

              <p>
                Currencies:
                <span className='text-blue-200' >
                  {Object.keys(country.currencies).map( (currElement) => country.currencies[currElement].name ).join(", ")}
                </span>
              </p>

              <p>
                Langusges:
                <span className='text-blue-200' >
                  {Object.keys(country.languages).map( (key) => country.languages[key]).join(", ")}
                </span>

              </p>
             
            </div>
            
            <div>
              <NavLink to='/country'>
                      <button className='country-button  '>Go Back</button>
              </NavLink>
         </div>

         </div>


       </div>
    </section>
  )
}

export default CountryDetails
