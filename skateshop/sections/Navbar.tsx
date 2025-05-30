import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Image src='' alt='' />
      <nav>
        <ul>
          <li>Team</li>
          <li>Shop</li>
          <li>About</li>
          <li>Customizer</li>
        </ul>
      </nav>
      <Link href='/Builder'></Link>
    </div>
  )
}

export default Navbar