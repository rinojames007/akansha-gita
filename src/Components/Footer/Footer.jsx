import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container flex justify-center items-center h-fit w-full">
            <ul className='flex flex-col sm:flex-row justify-center items-center py-[30px] sm:h-[100px] w-full space-x-3 sm:space-x-5'>
                <li className='font-semibold text-sm sm:text-2xl text-slate-500 hover:underline hover:text-black hover:cursor-pointer'>HOME</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-500 hover:underline hover:text-black hover:cursor-pointer'>Events</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-500 hover:underline hover:text-black hover:cursor-pointer'>Workshops</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-500 hover:underline hover:text-black hover:cursor-pointer'>Event Coordinators</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer