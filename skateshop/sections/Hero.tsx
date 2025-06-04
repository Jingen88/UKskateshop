import React from 'react'
import SkateboardButton from '../components/Button' // Make sure the import path is correct
import { Heading } from '../components/Heading'

const Hero = () => {
  return (
    <>
      <Heading>
        <div className='bg-hero-texture bg-texture h-dvh overflow-hidden text-black flex flex-col justify-between pt-30 relative'>
          {/* Button in top-right corner */}
          <div className="absolute right-0 bottom-0 mb-8 pr-8 z-10">
            <SkateboardButton />
          </div>
          <h1 className='flex flex-wrap text-5xl font-bold ultra-bold tracking-wide px-5 line-clamp-1'>Best Skate Shop<br/> In The UK ...</h1>
          <p className='special-elite-bold mb-10 tracking-wide px-5 text-lg'>We offer a wide range of skateboards, apparel, and accessories. <br/> Our goal is to find the perfect gear for your skating needs.</p>
        </div>
        
      </Heading>
    </>
  )
}

export default Hero