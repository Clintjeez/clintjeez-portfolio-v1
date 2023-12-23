"use client"
import React from 'react'
import Image from 'next/image';



const Hero = () => {
   
  return (
    <section className='wrapper'>
<div className='hero relative'>
    <div className='hero-title  z-10'>
    <h1 >Clinton James <br />Software <br />&nbsp;Engineer</h1>
    </div>
      <div className='w-full flex justify-end '>
        <Image src="images/hero-img.jpeg" alt=''  
        width={420}
        height={450}
         className='absolute bottom-[30px]'
       />
        </div>
       
    
    </div>
    </section>
  )
}

export default Hero