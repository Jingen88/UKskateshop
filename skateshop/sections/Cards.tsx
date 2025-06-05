import React from 'react'
import TextAndImage from "./TextAndImage";


const Cards = () => {
  return (
    <div className="space-y-12">
      <TextAndImage
        heading="Pro Skateboard"
        body="Experience the best ride with our pro-level skateboard. Durable, stylish, and perfect for all skill levels."
        button={{ text: "Shop Now", href: "/shop" }}
        foregroundImage={{ url: "/images/skateboard-foreground.png", alt: "Pro Skateboard" }}
        backgroundImage={{ url: "/images/skateboard-bg.png", alt: "Skateboard Background" }}
        theme="Blue"
        variation="default"
        index={0}
      />
      {/* Add more <TextAndImage /> components as needed */}
    </div>
  )
}

export default Cards