import React, { useState } from 'react'
import Image from 'next/image'
import location from '../public/Location.png'
import alarm from '../public/Notification-on.png'
import phone from '../public/Phone-in.png'
import audio from '../public/Microphone.png'
import Navbar from './Navbar'
const HomePage = () => {
    const [currentLocation, setCurrentLocaton] =  useState('Connaught Place')
  return (
    <div className='h-screen bg-gray-100'>
        <div className='flex w-3/4 pt-8 ml-4 gap-1'>
            <Image src={location} alt="" width={40} height={40}/>
            <p className='text-3xl text-gray-500 '>{currentLocation}</p>
        </div>
        <div className='flex flex-col h-2/3 justify-center items-center'>
            <div className='flex gap-1'>
            <div className= 'quartertl flex justify-center items-center'>
                <Image src={phone} height={60} width={60} alt=''  />
            </div>
            <div className= 'quartertr flex justify-center items-center'>
            <Image src={alarm} height={60} width={60} alt=''  />
            </div>
            </div>
           <div className='flex gap-1 mt-1'>
           <div className= 'quarterbl flex justify-center items-center'>
           <Image src={audio} height={60} width={60} alt=''  />
           </div>
            <div className= 'quarterbr flex justify-center items-center'>
                <p className='text-4xl font-bold text-white'>SOS</p>
            </div>
           </div>
           
        </div>
        <Navbar/>
    </div>
  )
}

export default HomePage