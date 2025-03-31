import React, {  useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi';
import CountryCard from '../components/layout/CountryCard';
import SearchFilter from '../components/ui/SearchFilter';

const Country = () => {
  
  
  const [isPending,startTransition] = useTransition();
  const [countries,setCountries] = useState([]);

  const [search,setSearch] = useState();
  const [filter,setFilter] = useState('All');

  useEffect( () => {
    startTransition( async () => {
      const res = await getCountryData();
      
      setCountries(res.data);
    })
  },[]);
  
  if (isPending) return (
    <div className='flex justify-center  w-full h-full items-center'>
        <div class="w-20  h-20 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin">

        </div>
    </div>
  )
  
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if (filter === "All") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (

    <section className='flex flex-col items-center    '>
      
      <SearchFilter
        search = {search}
        setSearch = {setSearch}
        filter = {filter}
        setFilter = {setFilter}
        countries = {countries}
        setCountries = {setCountries}
      /> 


      <ul className='grid country-container grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {
          
          filterCountries.map( (currentCountry,index) => {
              return (
                <CountryCard country = {currentCountry} key={index} />
              )
          })
        }
      </ul>
    </section> 

  )
}

export default Country
