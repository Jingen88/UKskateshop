import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton } from '../components/Button' // Ensure the import path is correct

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center bg-navbar bg-texture h-30 w-full text-black p-4'>
      <Image src='/skateshop.png' alt='skateshop logo' width={130} height={130}/>
      
      <nav>
        <ul className='flex space-x-8 text-xl text-zinc-800 special-elite-bold mt-3 '>
          <Link href={'/Team'}><li className='hover:text-[#A1EF03] hover:underline-offset-4'>Team</li></Link>
          <Link href={'/Shop'}><li className='hover:text-[#A1EF03] hover:underline-offset-4'>Shop</li></Link>
          <Link href={'/About'}><li className='hover:text-[#A1EF03] hover:underline-offset-4'>About</li></Link>
          <Link href={'/Builder'}><li className='hover:text-[#A1EF03] hover:underline-offset-4'>Customizer</li></Link>
        </ul>
      </nav>
      <Link href='/Builder'>
        <CartButton />
      </Link>
    
    </div>
  )
}

export default Navbar