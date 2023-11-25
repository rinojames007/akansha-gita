import React from "react";
import EventBox from "../Components/Event-box/EventBox";
import Navbar from "../Components/Navbar/Navbar";

const Ahwan = () => {
    const AhwanElements = [
        {
          url:"./Demo-pics/sports.jpg",
          EventName:"100 M Boys",
          desc:"show your Sports skills...",
          details:[
            {
                EventIncharge:"Xyz",
                EventCoordinators:["ABC","XYZ","RST"],
                volunteers:["Rohan","Mohan","Simran"],
                timming:"12:15 pm"
            }
          ]
        },
        {
            url:"./Demo-pics/tech.jpg",
            EventName:"Long Jump",
            desc:"show your Sports skills...",
            details:[
              {
                  EventIncharge:"Xyz",
                  EventCoordinators:["ABC","XYZ","RST"],
                  volunteers:["Rohan","Mohan","Simran"],
                  timming:"12:15 pm"
              }
            ]
          },
      ];
  return (
    <div>
        <Navbar/>
      {/* Tech Fest */}
      <div className="container pt-[60px] bg-gradient-to-b from-black via-purple-900 to-black h-full flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold my-4 text-white">Ahwan</h1>
        <p className="text-sm mb-8 text-center text-slate-200">
          Welcome to the gateway of Our Sports Registration Page Get ready to
          dive into a world of physical prowess and sportsmanship!
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
          <EventBox url = {AhwanElements[0].url} />
        </div>
      </div>
    </div>
  );
};

export default Ahwan;
