import React from "react";
import Sidebar from "../Components/Profile-Sidebar/Sidebar";

import ProfileNav from "../Components/Profile-Navbar/ProfileNav";

import EventResisteredBox from "../Components/Events-updates/EventResisteredBox";

function Profile() {
  return (
    <div className="w-full bg-gradient-to-b from-black via-purple-900 to-black h-full">
      <div className="  flex mx-auto flex-col md:flex-row w-full  h-full ">
        <div className="navbar w-full md:hidden">
          <ProfileNav />
        </div>
        <div className=" flex mx-auto w-full h-full">
          <div className="sidebar hidden min-h-screen md:flex md:w-[20%] ">
            <Sidebar />
          </div>

          {/* hero section  */}
          <div className="hero w-full md:w-[80%] h-full py-5 flex justify-center item-center ">
            <div className=" w-full flex flex-col justify-center text-center item-center mx-auto">
              <h3 className="md:text-5xl text-3xl font-bold text-white">
                Welcome to your Dashboard!
              </h3>

              <p className="text-lg text-slate-300 mt-5">
                Manage and track your fest related activities
              </p>
              <div className="flex-col justify-evenly mt-8 w-full">
                <p className="font-bold text-3xl flex justify-center items-center text-white">
                  Registered Events
                </p>
                <div className="events-container mx-auto flex flex-col justify-around md:flex-row flex-wrap my-4 md:w-full w-[90%]">
                  <EventResisteredBox
                    EventHeading="Ahwan(Sports)"
                    EventName="Long Jump"
                    EventTime="11:25 AM"
                  />
                  <EventResisteredBox
                    EventHeading="Anwesh(Tech Fest))"
                    EventName="Codathon"
                    EventTime="9:45 AM"
                  />
                  <EventResisteredBox
                    EventHeading="Akanksha"
                    EventName="Sambalpuri Dance"
                    EventTime="1:15 PM"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
