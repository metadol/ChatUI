import React from 'react'
import { IoClose } from "react-icons/io5";

const Header = () => {
  return (
    <div className='fixed top-0 z-10 flex items-center justify-between w-full max-w-3xl px-4 py-3 bg-white shadow-lg '>
      <div className='flex flex-row gap-1 '>
        <img src='/logo.jpg' className='object-contain w-6 '/>
        <span className='hidden text-lg font-medium sm:block chat-header'>Copilot</span>
      </div>
      <div>
        <IoClose size={21} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header