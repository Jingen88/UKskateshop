import React from 'react'
import TextAndImage from "./TextAndImage";

const Cards = () => {
  return (
    <div className="space-y-12">
      <TextAndImage
        heading="Pro Skateboard"
        body="Experience the best ride with our pro-level skateboard. Durable, stylish, and perfect for all skill levels."
        button={{ text: "Shop Now", href: "/shop" }}
        foregroundImage={{ url: "/skater1.png", alt: "Pro Skateboard" }}
        backgroundImage={{ url: "/skaterbg.png", alt: "Background graffiti" }}
        theme="Blue"
        variation="default"
        index={0}
       headingClassName='text-5xl font-bold ultra-bold tracking-wide'
        bodyClassName='text-lg  special-elite-bold leading-relaxed'
        bgColor='bg-texture bg-cyan-300 text-white'
      />
     <TextAndImage
        heading="Best Pop in the Game"
        body="Get the ultimate pop with our high-performance skateboard. Designed for gnarly tricks, it’s a skater's dream."
        button={{ text: "Shop Now", href: "/shop" }}
        foregroundImage={{ url: "/skater2.png", alt: "Pro Skateboard" }}
        backgroundImage={{ url: "/skaterbg3.png", alt: "Background graffiti" }}
        theme="Orange"
        variation="imageOnLeft"
        index={0}
        headingClassName='text-5xl font-bold ultra-bold tracking-wide'
        bodyClassName='text-lg  special-elite-bold  leading-relaxed'
        bgColor='bg-texture bg-yellow-300 text-white'
        

      />
      <TextAndImage
        heading="Durable Design"
        body="Crafted for performance and longevity, our skateboards are built to withstand the toughest rides."
        button={{ text: "Shop Now", href: "/shop" }}
        foregroundImage={{ url: "/skater3.png", alt: "Pro Skateboard" }}
        backgroundImage={{ url: "/skaterbg2.png", alt: "Background graffiti" }}
        theme="Navy"
        variation="default"
        index={0}
        headingClassName='text-5xl font-bold ultra-bold tracking-wide'
        bodyClassName='text-lg  special-elite-bold leading-relaxed'
        bgColor='bg-texture bg-orange-400 text-white'
      />
    </div>
  )
}

export default Cards