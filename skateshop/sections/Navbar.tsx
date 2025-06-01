import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Image src='' alt='' />
      <nav>
        <ul>
          <Link><li>Team</li></Link>
         <Link><li>Shop</li></Link>
         <Link><li>About</li></Link>
         <Link><li>Customizer</li></Link>
        </ul>
      </nav>
      <Link href='/Builder'></Link>
    </div>
  )
}

export default Navbar