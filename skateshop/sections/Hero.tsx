import React from 'react'
import {SkateboardButton} from '../components/Button'
import { Heading } from '../components/Heading'
import { InteractiveSkateboard } from "./InteractiveSkateboard";

const Hero = () => {
  // Example props, replace with your actual data or state
  const deckTextureURL = "/skateboard/Deck.webp";
  const wheelTextureURL = "/skateboard/SkateWheel1.png";
  const truckColor = "#6F6E6A";
  const boltColor = "#6F6E6A";

  return (
    <>
      {/* Skateboard on top of hero */}
      <section className="absolute inset-0 w-full h-[50rem] flex items-center justify-center z-15 pointer-events-none">
        <InteractiveSkateboard
          deckTextureURL={deckTextureURL}
          wheelTextureURL={wheelTextureURL}
          truckColor={truckColor}
          boltColor={boltColor}
        />
      </section>
      <Heading className="relative z-10">
        {(
          <div className='bg-hero-texture bg-texture h-dvh overflow-hidden text-black flex flex-col justify-between pt-30 relative'>
            {/* Button in bottom-right corner */}
            
            <h1 className='flex flex-wrap text-5xl font-bold ultra-bold tracking-wide px-5 line-clamp-1'>Best Skate Shop<br/> In The UK ...</h1>
            <p className='special-elite-bold mb-10 tracking-wide px-5 text-lg'>We offer a wide range of skateboards, apparel, and accessories. <br/> Our goal is to find the perfect gear for your skating needs.</p>
          </div>
        )}
      </Heading>
      <div className="absolute right-0 bottom-[-28] mb-8 pr-8 z-20">
              <SkateboardButton />
            </div>
    </>
  )
}

export default Hero