import React from "react";
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(https://lh3.googleusercontent.com/pw/ABLVV84JBcxSGfUrIOT8HEN6CfCPbXurn7jomz-bj3_2953fVNsFhW1fm5JDc2Td5V_OfxjZ23GnNFT4BW6J2oX_SnJystxfM0HoqnAM3rxGEvVrCYtkCQVX_H5ul9k6_EndtNxa_WPDa4lQGP1dweysQF-_0hJbVV3kHCLxgdcInupxpIVcH6vEoslcTE2up_Yut5GjC5h2ocR02h41DjQ0bCBF51C2P2ZIV0VAlNLadJ_MZsBXwlqWO5JlctZlZDGKzVwlXvf8YKJcXoilk9q0cKQm1YAG0g4jjooPD6XsqLpvFSkpN8yz7_-XMQa8M2JwLioIRcuO4QLDjNwFRwVds1gFI0lNIaG7aKGSMZFc432i3SW7nFg_INQ2HjlF4Qs5QwafvFCjnGuPz56exs4NfQ3ftDNo_VkpTRvyqSfXuWU3SLm69riJBjkUX9nmgcGy8bnVzO8KWxUHOvh9msg5mlHgLyH2Gx3aNwtNoa5_6tDkMNt0Q-4AicI-T8usUUywQG9gJ_aL30Gfvx0McRjEcjUVJiydUs_BSu4Sg-BSlIXeRL5KTgMg1BVaa5s1fT33nPcnYGUrnGVm-qvGHXQ4mMgewf_mjktBzZQbPjQgHtlRCNIJOITipdueG02NHna6hZIiRG2STLiFjZjvI9s0FU-PLS6ikXd6IIKGIdM2gsqlOtMG3prvvgMbwRKGLroQXx9H7ojstrKg4yAw466CYuonES9Lei_CN5kXhkUcijhmDa-wLMPNsHL113Lr5MKqkT-CCIWxmxj6S3R8UsMYzijIu5iIARVpNBLY-GNpdGGu3APgCPQEDjnP0ZyvqFK1KNo9iayG2EQusucjDO-JTkPlbh48HcEiZPzH1_XjCB9mnZuj-NL1k6XKa1mcJAYkcUZoJlG0MKYk_SDLAA9R-geiyCHkqZwiXwBnEQ7-Dg=w1733-h975-s-no-gm?authuser=0)` }} className="flex justify-center items-center bg-no-repeat bg-cover bg-center h-screen w-full">

      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center ">
          <div className="header text-center font-alkatra ">
            <h1 className="hero text-3xl sm:text-6xl font-bold text-white shadow-lg text-shadow-black">
              Welcome Back
            </h1>
            <span className="text-4xl sm:text-8xl font-bold text-white shadow-lg text-shadow-black">Akanksha 2024!</span>
          </div>

          <div className="desc flex flex-col justify-center items-center">
            <p className="py-5 text-xl text-white font-semibold text-center shadow-lg text-shadow-black">
              Join us for a week full of excitement, learning and entertainment
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
