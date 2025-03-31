import React from 'react'
import footerContact from "../../api/footerApi.json"
import { NavLink } from 'react-router';

import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";


const Footers = () => {

   const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }

  return (
    <footer  >
      <div className='bg-gray-300   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center footer-container '>
        {
           footerContact.map((currentData,index) => {
            
            return(
            
              <div className=' flex gap-4  items-center text-6xl footer-details-container  ' key={index}> 
                  <div className=' text-blue-800'>{footerIcon[currentData.icon]} </div>
                  <div >
                    <div className='font-bold footer-data-details text-black '> {currentData.tittle}  </div>
                       
                    <div className='contact-details  text-2xl'> {currentData.details} </div>     
                  </div>
              </div>
            
            );
          })
        }
      </div>
      <div className='bg-gray-200 grid sm:grid-cols-2  place-content-center copyright-para '>
         <p className='text-black copyright-para'>Copyright &copy; {new Date().getFullYear()}, All Right Reserved  <span className=' text-blue-500'> Abhishek Joshi</span> </p>
          <div  className=' flex items-center justify-center  '>
            <ul className='flex gap-8 items-center  '>
              <li >
                <NavLink to="https://www.instagram.com/__zo__c__abhi__shek___/?igsh=NzZ3OTg0eGw1YWM5#" >
                  <div className='text-4xl'><FaInstagram /></div>
                </NavLink>
              </li>
              <li>
                <NavLink to = "https://x.com/i/flow/login?redirect_after_login=%2Fzo_c_abhi_shek">
                  <div className='text-4xl'><FaXTwitter /></div>
                </NavLink>
              </li>
              <li>
                 <NavLink to = "https://github.com/Abhishekj44-ui">
                  <div className='text-4xl'><ImGithub /></div>
                 </NavLink>
              </li>
              <li>
                <NavLink to = "https://www.linkedin.com/in/abhishek-joshi-5168722a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <div className='text-4xl'><FaLinkedin /></div>
                </NavLink>
              </li>
            </ul>
          </div>


      </div>
    </footer>
  )
}

export default Footers
