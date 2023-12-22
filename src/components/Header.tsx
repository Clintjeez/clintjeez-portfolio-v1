"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
   const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <section className='wrapper'>
        <div className='flex justify-between py-3 border-b-[1px] border-[#777] '>
          <div className='flex items-center'>
          <p className='flex gap-1 items-end'>
            <a className='p-2' href="#">/ CLINTJEEZ /</a>
         </p>
          </div>

          {/* Desktop menu */}
          <div className=''>
            <div className='hidden md:flex items-center gap-6'>
            <a className='p-2 hover:text-[#eed86e] transition' href="#">/ ABOUT /</a>
            <a className='p-2 hover:text-[#eed86e] transition' href="#">/ PROJECT /</a>
            <a className='p-2 hover:text-[#eed86e] transition' href="#">/ BLOG /</a>
            <a className='p-2 hover:text-[#eed86e] transition' href="#">/ CONTACT /</a>
          </div>

          {/* Mobile Menu */}
          <div className='block md:hidden'>
              <button className='p-2' onClick={() => setToggleMenu(true)}>///</button>

              {toggleMenu && (  <div className='menu-overlay'>
              <div className='menu-container p-3'>
                <div className='border-b-[1px] border-b-[#777] flex justify-between items-center '>
                <a className='p-2 text-[30px]' href="#">/ CLINTJEEZ /</a>
                <button className=' text-[25px] text-[#383838] p-2' onClick={() => setToggleMenu(false)}><AiOutlineClose  />
                </button>
                </div>
                <ul className='flex flex-col mt-[40px] items-end'>
                  <li className=' w-full border-b-[1px] border-b-[#777] py-3'> <a className='p-2 hover:text-[#eed86e] transition ' href="#">/ ABOUT /</a></li>
                  <li className=' w-full border-b-[1px] border-b-[#777] py-3'> <a className='p-2 hover:text-[#eed86e] transition' href="#">/ PROJECT /</a></li>
                  <li className=' w-full border-b-[1px] border-b-[#777] py-3'><a className='p-2 hover:text-[#eed86e] transition' href="#">/ BLOG /</a></li>
                  <li className=' w-full border-b-[1px] border-b-[#777] py-3'><a className='p-2 hover:text-[#eed86e] transition' href="#">/ CONTACT /</a></li>
                </ul>
              </div>
            </div>) }
            
          
           
          </div>
        </div>
        </div>
    </section>
  )
}

export default Header