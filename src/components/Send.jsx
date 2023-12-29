import React from 'react'
import { VscSend } from "react-icons/vsc";

const Send = () => {
  return (
    <div className='fixed bottom-0 z-10 w-full max-w-3xl px-6 pt-3 pb-8 bg-white'>
      <div className='p-1 rounded-[5px] mgradient'>
        <div className='flex flex-row items-center justify-center gap-2 p-2 bg-white rounded-[3px]'>
            <input type='text' placeholder='type here' className='w-full px-3 py-1 bg-gray-100 rounded outline-none'/>
            <VscSend size={20} className='text-[#6c54b0] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Send