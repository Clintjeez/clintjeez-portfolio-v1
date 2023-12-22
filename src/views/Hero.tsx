"use client"
import React from 'react'
import ParticleImage, { ParticleOptions,
    Vector,
    forces,
    ParticleForce } from "react-particle-image";
import clintImg from '../../public/images/hero-img.jpeg'
import Image from 'next/image';

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#61dafb",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };

const Hero = () => {
   
  return (
    <section className='wrapper'>
<div className='hero relative'>
    <div className='hero-title  z-10'>
    <h1 >Clinton James <br />Software <br />&nbsp;Engineer</h1>
    </div>
      <div className='w-full flex justify-end '>
        <Image src='/images/hero-img.jpeg' alt=''  
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