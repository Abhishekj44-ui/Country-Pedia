import React from 'react'
import { NavLink } from 'react-router';


const ErrorPage = () => {

    // const error = useRouteError();
    // console.log(error);
  return (
    <div className='text-2xl items-center flex flex-col gap-8 '>
      <h1 className='text-8xl'>404 Not found</h1>
      <h1 className='text-5xl'>So Sorry!</h1>
      <h2 className='text-4xl '>The Page you are looking for cannot be found</h2>
      <h3 className='text-6xl font-bold'>Possible Reasons
      </h3>
      <ul className='text-2xl '>
        <li>The address may have typed incorrectly</li>
        <li>It may be a broken or outdated link</li>
      </ul>
      <NavLink to = "/" ><button>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
