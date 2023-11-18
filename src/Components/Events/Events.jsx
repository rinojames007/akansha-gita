import React from 'react'

const Events = () => {
  return (
    <div className=' py-[50px] flex flex-col justify-center items-center mx-auto'>
        <div className="heading flex flex-col justify-center items-center">
            <h1 className='text-2xl sm:text-4xl font-bold'>Experience the Best of </h1>
            <h1 className='text-2xl sm:text-4xl font-bold'>College fest! </h1>
        </div>
        <p className='pt-5 text-sm text-center font-semibold text-slate-600'>Explore various events, workshops, competitions and much more.</p>
        <div className="container w-full flex flex-wrap flex-col sm:flex-row justify-center sm:space-x-[40px] items-center sm:px-5 py-[40px] mx-auto">
            <div style={{backgroundImage: `url(./image-slider/03_img.jpeg)`}} 
            className="event1 hover:cursor-pointer ease-out transition-shadow shadow-md hover:shadow-xl hover:shadow-black shadow-black bg-cover delay-100 hover:duration-200 bg-center hover:opacity-[30%]  text-center font-semibold text-xl sm:text-4xl text-black hover:text-3xl sm:hover:text-5xl hover:font-bold hover:text-gray-900 bg-no-repeat opacity-70 w-[95%] h-[200px] my-5 rounded-xl sm:w-[25%] sm:h-[250px] flex justify-center border">
                <p className='flex items-center justify-center opacity-100 '>Anwesh</p>
            </div>
            <div 
            style={{backgroundImage: `url(./image-slider/03_img.jpeg)`}}
            className="event2 hover:cursor-pointer ease-out transition-shadow shadow-md hover:shadow-xl hover:shadow-black shadow-black bg-cover delay-100 hover:duration-200 bg-center hover:opacity-[30%]  text-center font-semibold text-2xl sm:text-4xl text-black hover:text-4xl sm:hover:text-5xl hover:font-bold hover:text-gray-900 bg-no-repeat opacity-70 w-[95%] h-[200px] my-5 rounded-xl sm:w-[25%] sm:h-[250px] flex justify-center border">
                <p className='flex items-center justify-center opacity-100 '>Ahwan</p>
            </div>
            <div
            style={{backgroundImage: `url(./image-slider/03_img.jpeg)`}}
             className="event3 hover:cursor-pointer ease-out transition-shadow shadow-md hover:shadow-xl hover:shadow-black shadow-black bg-cover delay-100 hover:duration-200 bg-center hover:opacity-[30%] text-center font-semibold  text-2xl sm:text-4xl text-black  hover:text-4xl sm:hover:text-5xl hover:font-bold hover:text-gray-900 bg-no-repeat opacity-70 w-[95%] h-[200px] my-5 rounded-xl sm:w-[25%] sm:h-[250px] flex justify-center border">
                <p className='flex items-center justify-center opacity-100 '>Akanksha</p>
            </div>
        </div>
    </div>
  )
}

export default Events