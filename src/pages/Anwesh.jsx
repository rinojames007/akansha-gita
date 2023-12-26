import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";

const Anwesh = () => {
  
  return (
    <div className=" min-h-screen w-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      {/* Tech Fest */}
      <div className=" pt-[60px] flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold my-4 text-white">Anwesh</h1>
        <p className="text-sm mb-8 text-slate-200">
          Welcome to the gateway of innovation! Our Techfest Registration Page
          is your ticket to an exhilarating world of technology and creativity.
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
        <Link to="/techFestEvents" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Tech Fest" url={"./Demo-pics/tech.jpg"} />
        </Link>
        <Link to="/robotics" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Robotics" url={"./Demo-pics/tech.jpg"} />
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Anwesh;
