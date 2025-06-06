import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Boards from '@/sections/Boards'
import Cards from '@/sections/Cards'
import Video from '@/sections/Video'
import Gravity from '@/sections/Gravity'
import Footer from '@/sections/Footer'
// This is the main entry point for the application, rendering the Home component.

const page = () => {
  return(
  <>
    <Navbar/>
    <Hero/>
    <Boards/>
    <Cards/>
    <Video/>
    <Gravity/>
    <Footer/>
  </>
  )
}

export default page