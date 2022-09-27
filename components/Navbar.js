import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import home from '../public/Home.png'
import map from '../public/Map-location.png'
import user from '../public/user.png'
const Navbar = () => {
  return (
    <nav className='flex w-screen justify-center gap-9 fixed bottom-1 bg-white'>
<Link href='/'>
    <Image src={home} height={60} width ={60} alt=''/>
</Link>
<Link href='/map'>
<Image src={map} height={60} width ={60} alt=''/>
</Link>
<Link href='/user'>
<Image src={user} height={60} width ={60} alt=''/>
</Link>
    </nav>
  )
}

export default Navbar