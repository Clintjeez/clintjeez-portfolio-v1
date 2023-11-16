"use client"
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
          }, 1000);
      
          return () => clearInterval(intervalId);
    },[])

    const options: Intl.DateTimeFormatOptions = {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Africa/Lagos',
       
      };

      const formattedTime = currentTime ? currentTime.toLocaleTimeString([], options) : '';

  return (
    <section className='wrapper'>
        <div className='flex justify-between py-3 border-b-[1px] border-[#777] '>
          <div className='flex items-center'>
          <p className='flex gap-1 items-end'>
            <span className='mr-2 '>[ </span>
            {/* <span className='brand-dot'></span> */}
            <span className=''> clintjeez </span> 
            <span className='ml-2'> ]</span>
         </p>
          </div>

          <div className='flex flex-col md:flex-row items-center lg:gap-[150px] gap-5'>
          <div className='hidden md:flex items-center gap-1 lg:text-[16px]'>
                <div className='relative'>
                    <div className='dot'></div>
                </div>
                <p>AVAILABLE FOR </p>
                <div className='border-[1px] border-[#777] w-[25px] h-0'></div>
               <div className='hustle-category'>
                <span>FREELANCE PROJECTS</span>
               </div>
            </div>

            <div className='flex items-center gap-10'>
            <div className='hidden lg:block'>
                <p>{formattedTime}</p>
            </div>
            <a className='p-2 hover:text-[#eed870] transition' href="#">/ CONTACT /</a>
          </div>
          
          </div>

         
       
        </div>
    </section>
  )
}

export default Header