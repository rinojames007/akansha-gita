import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(./Demo-pics/cultural.jpg)` }} className="flex justify-center items-center bg-no-repeat bg-cover bg-center  h-screen w-full ">
      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className="container flex flex-col items-center justify-center ">
          <div className="header text-center">
            <h1 className=" text-2xl sm:text-6xl font-bold text-white">
              Welcome Back
            </h1>
            <span className=" text-4xl sm:text-8xl font-bold text-white">Akanksha 2024!</span>
          </div>

          <div className="desc flex flex-col justify-center items-center">
            <p className="py-5 text-lg text-white font-semibold text-center">
              Join us for a week full of excitement, learning and entertainment
            </p>
          </div>

          {/* login-register buttons */}
          <div className="login-register flex space-x-2 sm:space-x-5 jusce">
            <Link to="/login">
            <button className="w-fit border-[2px] bg-orange-500 hover:bg-slate-800 hover:text-white border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] font-semibold sm:text-lg rounded-[15px] text-center hover:scale-[0.90] ">
              Login
            </button>
            </Link>
            <Link to="/resgister">
            <button className="w-fit border-[2px] border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] text-white bg-slate-800 font-semibold hover:scale-[0.85] hover:delay-100 sm:text-lg rounded-[15px] text-center ">
              Register Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* right-contents */}
      <div className="right Pt-[25%] w-full sm:w-[60%] flex justify-center items-center mx-auto">
        <div className="container py-[50px]">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
