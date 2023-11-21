import React from 'react'

const EventList = () => {
  return (
    <div>
        <div className="events flex justify-center items-center space-x-14 border-b-2 py-2 hover:cursor-pointer mx-auto">
                    <div className="event-image flex">
                        <img src="./Demo-pics/face-paint.jpeg" alt="event-image" className='sm:w-[50px] w-[60px] rounded-full' /> 
                    </div>
                    <div className="event-Info sm:mx-10  flex flex-col justify-center items-center">
                        <p className='font-semibold sm:text-lg'>Face Painting</p>
                        <p className='text-sm font-light text-slate-500'>Gita Garden-2</p>
                        <p className='text-slate-600 text-xs sm:hidden'>Fri,28 Jan 2023</p>
                        <p className='text-slate-600 text-xs sm:hidden'>14:25 - 15:35</p>
                    </div>
                    <div className="event-timming sm:mx-10 sm:flex flex-col justify-center items-center hidden">
                        <p className='text-slate-700 font-semibold'>Fri,28 Jan 2023</p>
                        <p className='text-slate-700 font-semibold'>14:25 - 15:35</p>
                    </div>
                </div>
    </div>
  )
}

export default EventList