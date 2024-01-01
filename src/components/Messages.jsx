import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";

export const OutgoingMessage = ({ sender, message }) => (
    <div className='flex flex-col items-end w-full gap-1'>
        <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-400'>Just Now</span>
            <div className='flex items-center gap-1'>
                <span className='font-medium'>You</span>
                <img src='/an.jpg' className='object-cover rounded-full w-7 h-7' />
            </div>
        </div>
        <div className='py-2.5 pl-4 bg-[#e5e4e9] pr-7 rounded-l-xl rounded-br-xl'>
            <p>{message}</p>
        </div>
    </div>
);


export const IncomingMessage = ({ message }) => (
  <div className='flex flex-col items-start w-full gap-2'>
    <div className='flex flex-col items-start w-full gap-1'>
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
                <img src='/l2.png' className='object-cover rounded-full w-7 h-7' />
                <span className='font-medium'>Copilot</span>
            </div>
            <span className='text-sm text-gray-400'>Just Now</span>
        </div>
        <div class=" rounded-r-[13px] rounded-bl-[13px] bgradient">
            <div className='py-2.5 pl-4 bg-[#f5f4f9] pr-7 rounded-r-xl rounded-bl-xl'>
                <p>{message}</p>
            </div>
        </div>
    </div>
   </div>
);


export const Answerone = ({ message }) => (
    <div className='flex flex-col gap-2 sm:flex-row'>
        <span className='flex flex-row items-center gap-2 text-sm font-semibold sm:text-md'>
            <BiSolidUpArrow className='text-red-500' />
            {message} Threshold on
        </span>
        <div className='flex flex-row gap-2'>
            <div className='flex px-2 bg-[#f3f2f5] border rounded-lg text-xs sm:text-sm font-semibold items-center justify-center'>nexut-frontend</div>
            <div className='flex flex-row gap-1 px-2 bg-[#f3f2f5]  border rounded-lg text-xs sm:text-sm font-semibold items-center justify-center'>
                <img src='/wave.jpg' className='w-4 h-4 rounded-full' />
                <span>8:50 AM</span>
            </div>
        </div>
    </div>
    
)

export const Answertwo = ({kub,mess,image}) => (
    <div className='flex flex-col gap-2 mb-3 sm:flex-row sm:mb-0'>
        <div className='flex flex-row gap-1 px-2 bg-[#f3f2f5] items-center justify-center border rounded-lg text-sm font-semibold '>
            <img src='/kubnet.png' className='w-4 h-4 rounded-full' />
            <span>{kub}</span>
        </div>
        <span className='text-xs sm:text-sm'>{mess}</span>
        <div className='flex flex-row gap-2'>
            <div className='flex flex-row gap-1 px-2 bg-[#f3f2f5]  border rounded-lg text-xs sm:text-sm font-semibold items-center justify-center'>
                <img src='/jk1.png' className='w-4 h-4 rounded-full' /><span>Jaya Krishnan</span>
            </div>
            <div className='flex flex-row gap-1 px-2 bg-[#f3f2f5] items-center justify-center border rounded-lg text-xs sm:text-sm font-semibold '>
                <img src={image} className='w-4 h-4 rounded-full' />
                <span>7:58 AM</span>
            </div>
        </div>
    </div>
)