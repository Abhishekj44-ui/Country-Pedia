import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort( (a,b) => {
          return value === "asc" ?
          a.name.common.localeCompare(b.name.common):
          b.name.common.localeCompare(a.name.common);
        } );
        setCountries(sortCountry);
    }
    
    
  return (
    <div className='flex h-min country-container sm:gap-20 gap-5  '>
      <input type="text"
       placeholder='search'
       value={search}
       className='border text-white input-search sm:w-[20vw] w-min rounded-4xl sm:text-4xl text-2xl'
       onChange={handleInputChange}
      />
      <div>
      <select name="" id="" onChange={handleSelect} className='border text-white bg-black input-search text-2xl min-w  sm:text-4xl rounded-4xl '>
          <option value="All"  >All</option>
          <option value="Africa" className='bg-blue-500 '>Africa</option>
          <option value="Americas" className='bg-blue-500'>Americas</option>
          <option value="Asia" className='bg-blue-500'>Asia</option>
          <option value="Europe" className='bg-blue-500'>Europe</option>
          <option value="Ocenia" className='bg-blue-500'>Ocenia</option>
      </select>
      </div>
      <div>
        <button
         className='input-search sm:w-[10vw] min-w  '
         onClick={ () => sortCountries("asc") } >Asc</button>
      </div>
      <div>
        <button
          className='input-search sm:w-[10vw] min-w '
          onClick={ () => sortCountries("desc") } >Desc</button>
      </div>

    </div>
  )
}

export default SearchFilter
