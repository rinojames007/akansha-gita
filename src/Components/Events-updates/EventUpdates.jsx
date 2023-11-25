import React from 'react'
import EventList from './EventList'

const EventUpdates = () => {
  return (
    <div className=' flex justify-center items-center mx-auto'>
        <div className="container flex md:flex-row flex-col justify-center items-center py-7 px-3 md:py-[60px] md:px-[40px] space-x-6 mx-auto">
            <div className="left md:w-[50%] flex justify-center items-center mx-auto">
                <div className="img-container w-full flex justify-center items-center rounded-xl shadow-md shadow-black">
                    <img src="./Demo-pics/Robo-wars.webp" alt="Event-Picture" className='rounded-xl flex justify-center items-center ' />
                </div>
            </div>
            <div className="right md:w-[50%] flex flex-col justify-center items-center space-y-5 py-5 md:py-0 mx-auto">
                <h1 className=' text-3xl md:text-5xl font-bold text-center text-white mx-auto'>Upcoming Events</h1>
                <p className='font-semibold text-sm text-slate-300 text-center'>Check out the exciting Lineup of Events at College Fest 2024...</p>
                <div className="Event-lists">
                    <EventList/>
                    <EventList/>
                    <EventList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventUpdates