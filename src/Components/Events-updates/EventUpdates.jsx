import React from 'react'
import EventList from './EventList'

const EventUpdates = () => {
  return (
    <div className=' flex items-center mx-auto'>
        <div className=" flex md:flex-row flex-col items-center py-7 px-3 md:py-[60px] md:px-[40px] md:space-x-6 mx-auto">
            <div className="left hidden md:w-[50%] md:flex items-center mx-auto">
                <div className="img-container w-full flex items-center rounded-xl shadow-md shadow-black">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV85Rl97shkygdEPyR5uTXuUYUzJeumo-h9gomH0zzFvUoZ2zUUENlJg-n6pLX_sl210baPt9KvdZe5-ohYVRnGVexQmVz-8_IxrCsV7RytH5HNyEIon15ya8Jg4TYoZBGLvLsr0DH1R5hGJlhFJkJCS64JQuEnZpAbPgVpcpy2vYZ22ou6_qfw4sTnIaJRJvcoI2C64he-4lRhT9q9i9CoGIrqNDhWelNmlvs06gnZm9E80MMtoqvJ22AycwtnTfwf-vmxHSu3JT4w27gSDaCIT8_FnrHURfFgVyk1rvo5jYXa-XUWHdHrWgelKhz3PCEH2jVJsG7biTx3eTAen16fjztUdAZXbk3SwMexU5R0eY4Rct0UpURVTe_OfBT4GDt54OhzctHsXFX6hQdeWnKLbtt_em2_p5R1-7_mUPZzt69-adyck4sZd7kWL6oB8wr0tafiKe5eQThq00p4AFV4JvRXkVQwPFjljKfUagAteVfhz8r2nH9xA18Eq2IuYwrb0SG7H8FlDmtDbmnZDCanG5ck19R7odCJkin7eKnexT57E4zEjpPPEf-KJPKk_MH8O7EDQ98PKKKuyVrMC4ksuEemJyL7p-dYrrLZGDmpYvR8g7hqYHU6LvRGIe5OgPKoOlHCdK9cYV8f9NjpmoGinil6F2QIPp6YLVgVoDvXWi5eRuF-HVPOKdouoK4DALFumq5d5ash6YWrR6-KG6roFNamyaace84GXv4zs8irFZDVIAhTFHIJ-QOMwN6nUYEEOptnIZ_wjC8xucniywxSIl8fRGdFOrfuEkTKnLMwbpg37oQif7AieXlIUyesYK2fGsxHig8jTT1kHce_-khDMCgh8_Y0jgQDJojeYM98l6BRV6aO-ew2i-R36mbA7OwbM_wVp8UNcXRQ2xZkk-i79GsA8O_-txHM_1OcWhzQ=w1280-h720-s-no-gm" alt="Event-Picture" className='rounded-xl flex items-center ' />
                </div>
            </div>
            <div className="right md:w-[50%] w-full px-2 flex flex-col items-center space-y-5 py-3 md:py-0 mx-auto">
                <h1 className=' text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white mx-auto'>Upcoming Events</h1>
                <p className='font-semibold text-sm text-slate-300 text-center'>Check out the exciting Lineup of Events at College Fest 2024...</p>
                <div className="Event-lists w-full">
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
