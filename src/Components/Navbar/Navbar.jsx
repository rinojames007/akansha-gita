import React, { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-[50px] sm:h-[80px] w-full  flex justify-between items-center px-1 py-3 sm:px-5 border-2">
      {/* Logo */}
      <div className="logo h-[40px] w-[160px] sm:h-[65px] sm:w-[260px] rounded-full bg-gray-600 flex justify-center items-center hover:cursor-pointer">
        <div style={{backgroundImage: `url(./Demo-pics/College-lighting.jpeg)`}} className="header flex justify-center items-center bg-cover w-full h-full bg-center rounded-full opacity-80">
          <h1 className="text-xl font-bold sm:text-3xl text-black">
            Akanksha
          </h1>
        </div>
      </div>
      {/* navigations */}
      <div className="nav-contents hidden sm:flex items-center">
        <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 text-xl font-bold">
          <li className="hover:underline hover:text-gray-400 hover:cursor-pointer">
            Events
          </li>
          <li className="hover:underline hover:text-gray-400 hover:cursor-pointer">
            Workshops
          </li>
          <li className="hover:underline hover:text-gray-400 hover:cursor-pointer">
            Coordinators
          </li>
          <li className="flex justify-center items-center">
            <a
              href="#"
              className="mx-auto px-3 flex justify-center font-bold border-slate-600 border-2 rounded-2xl text-black hover:bg-slate-800 hover:text-white hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-600 hover:scale-[0.90] "
            >
              <button className="px-1 py-2 text-center ">Login/Signup</button>
            </a>
          </li>
        </ul>
      </div>

      {/* Side-Menu (mobile option) */}
      <div
        className="side-menu flex items-center my-auto sm:hidden "
        id="MenuBar"
        onClick={toggleMobileMenu}
      >
        <img src="./sidebar.png" alt="munu-bar" className="h-5 px-2" />
      </div>
      <div
        className={`Mobile-Menu  transition-all  ease-out z-10 ${
          isMobileMenuOpen ? "right-0" : "-right-[100%] hidden"
        }   absolute top-0 bg-slate-100 w-[60%] rounded-10 space-y-4 delay-200 shadow-sm shadow-blue-300 px-8 py-16 text-lg font-semibold h-fit rounded-xl`}
      >
        <div
          className="cancel font-bold w-fit text-3xl relative -top-8 left-[2%]"
          onClick={toggleMobileMenu}
        >
          <img src="./cross.png" alt="cross-icon" className="h-[30px]" />
        </div>
        <ul className="nav-menu flex flex-col items-center space-y-3 font-semibold ">
          <li>
            <a
              className="hover:text-gray-400 active:underline py-1"
              href="#"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-400 active:underline py-1"
              href="#"
              onClick={toggleMobileMenu}
            >
              Events
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-400 active:underline py-1"
              href="#"
              onClick={toggleMobileMenu}
            >
              Workshops
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-400 active:underline py-1"
              href="#"
              onClick={toggleMobileMenu}
            >
              Coordinators
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mx-auto px-5 flex justify-center font-semibold bg-slate-800 border-slate-600 border-2 rounded-2xl text-white hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-700 hover:delay-75 mb-4"
              onClick={toggleMobileMenu}
            >
              <button className="px-1 py-2 text-sm text-center hover:scale-[0.85] ">
                Login/Signup
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
