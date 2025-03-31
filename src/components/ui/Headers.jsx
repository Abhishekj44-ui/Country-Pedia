import React from 'react'
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router'

const Headers = () => {
  return (
    <header className='h-30 flex justify-center fixed  w-full  bg-gray-300 '>
      <div className='w-400 h-30 heAder '> 
          <div className='  h-30  flex justify-evenly lg:justify-between' >  
           
                <div>
                    <NavLink to = "/"><img src={logo} alt="Image not loading..." className='h-40  ' /></NavLink>
                </div>

                <div className=' flex justify-end'>
                  <ul className='flex gap-12 items-center  '>
                    
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/country" >Country</NavLink></li>
                  </ul>
                </div>

          </div>
          

          <div>

          </div>
      </div>
    </header>
  )
}

export default Headers
