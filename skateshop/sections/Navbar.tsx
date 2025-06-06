import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton } from '../components/Button'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center bg-navbar bg-texture h-35 w-full text-black p-4'>
      <Image src='/skateshop.png' alt='skateshop logo' width={150} height={150}/>
      <div className='z-35'>
        <ul className='flex space-x-8 text-xl text-zinc-800 special-elite-bold mt-3'>
          <li className='cursor-pointer hover:text-[#A1EF03] hover:underline-offset-4'><Link href='/Team'>Team</Link></li>
          <li className='cursor-pointer hover:text-[#A1EF03] hover:underline-offset-4'><Link href='/Shop'>Shop</Link></li>
          <li className='cursor-pointer hover:text-[#A1EF03] hover:underline-offset-4'><Link href='/About'>About</Link></li>
          <li className='cursor-pointer hover:text-[#A1EF03] hover:underline-offset-4'><Link href='/Builder'>Customizer</Link></li>
        </ul>
      </div>
      <Link href='/Builder'>
        <CartButton />
      </Link>
    </div>
  )
}

export default Navbar