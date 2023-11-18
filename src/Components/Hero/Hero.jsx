import React from "react";
import ImageSlider from "../Hero/ImageSlider";

const Hero = ({images}) => {
  return (
    <div className="flex flex-col sm:flex-row h-fit w-full border-2 sm:space-x-6">
      {/* left-contents */}
      <div className="left w-full sm:w-[50%] mx-auto ">
        <div className="container flex flex-col justify-center items-center py-[20px] px-[6%] sm:pl-[20%] sm:py-[25%]">
          <div className="header">
            <h1 className=" text-2xl sm:text-4xl font-bold">Welcome to Akanksha</h1>
            <span className=" text-2xl sm:text-4xl font-bold">2024!</span>
          </div>

          <div className="desc">
            <p className="py-5 text-sm text-gray-500 font-semibold">
              Join us for a week full of excitement, learning and entertainment
            </p>
          </div>

          {/* login-register buttons */}
          <div className="login-register flex space-x-2 sm:space-x-5 jusce">
            <button className="w-fit border-[2px] border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] font-semibold sm:text-lg rounded-[15px] text-center ">
              Login
            </button>
            <button className="w-fit border-[2px] border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] text-white bg-slate-800 font-semibold sm:text-lg rounded-[15px] text-center ">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* right-contents */}
      <div className="right Pt-[25%] w-full sm:w-[50%] flex justify-center items-center mx-auto">
        <div className="container py-[50px]">
          <ImageSlider images={images}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
