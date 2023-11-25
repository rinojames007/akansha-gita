import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container flex justify-center items-center h-fit w-full">
            <ul className='flex flex-col md:flex-row justify-center items-center py-[30px] md:h-[100px] h-fit w-full  md:space-x-5'>
                <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>HOME</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Events</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Workshops</li>
                <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Event Coordinators</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer