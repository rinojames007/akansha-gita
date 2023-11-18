import React from "react";
import Box from "./Box";

const Highlights = () => {
  return (
    <div className="border-2">
      <div className="container flex flex-col justify-center items-center sm:flex-row w-full h-fit mx-auto ">
        <div className="left sm:w-[50%] sm:px-[100px] py-[30px] flex justify-center items-center ">
          <h1 className="text-2xl sm:text-4xl font-bold">Key Fest Highlights</h1>
        </div>
        <div className="right w-[95%]  sm:w-[50%] sm:pr-[50px] sm:py-[30px] ">
          <div className="Info-box">
            {Array.from({ length: 3 }, (_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
