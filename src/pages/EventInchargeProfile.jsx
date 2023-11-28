import React from "react";
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";

import { Link } from "react-router-dom";
import EventInchargeSidebar from "./EventInchargeSidebar";
import EventCard from "../Components/Events/EventCard";
import EventInchargeNavbar from "../Components/Profile-Navbar/EventInchargeNavbar";
const EventInchargeProfile = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      <div className="phone-nav md:hidden">
        <EventInchargeNavbar/>
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center">
        <div className="nav  hidden md:flex md:w-[20%]">
          <EventInchargeSidebar />
        </div>
        <div className="profile md:w-[80%] flex flex-col py-[60px]">
          <h1 className="text-white font-bold text-center md:text-5xl text-3xl underline underline-offset-8">
            Welcome to your Dashboard!
          </h1>
          <div className="mt-[50px] flex justify-center items-center ">
            <Link to="/eventDetails" className="w-[95%] md:w-[50%]">
              <EventCard name="Event Details" url={"./Demo-pics/tech.jpg"} />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInchargeProfile;
