import React,{useState} from 'react'
import Image from 'next/image'
import Navbar from'./Navbar'
import right from '../public/Caret right.png'
const UserPage = () => {
    const [name,setName] = useState('Neha')
    return (
      <div className='bg-gray-100 h-screen'>
          <div className='flex flex-col gap-8 pt-28'>
              <h1 className='text-4xl text-red-500 pl-7'>Hi {name}</h1>
              <div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>Your Details</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>Emergency Contacts</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>FAQ</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>Help</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>About</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
                <div className='border-b-[1px] mx-6 border-black border-opacity-50 flex opacity-70 mt-6'>
                    <p className='mr-auto text-xl'>Sign Out</p>
                    <Image src={right} alt='' height={20} width={20}/>
                </div>
              </div>
          </div>
          <Navbar/>
      </div>
  )
}

export default UserPage