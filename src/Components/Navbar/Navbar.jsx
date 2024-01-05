import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className="h-[50px] absolute sm:fixed backdrop-blur-xl sm:h-[60px] w-full  flex justify-between items-center px-1 py-3 sm:px-5 ">
      {/* Logo */}
      <div className="logo h-[40px] w-[160px] sm:h-[50px] sm:w-[260px] rounded-full bg-gray-600 flex justify-center items-center hover:cursor-pointer">
        <Link to='/' className="w-full h-full">
        <div
          style={{ backgroundImage: `url(https://lh3.googleusercontent.com/pw/ABLVV86ZqPt9MCVCEt760lraniPLqfYMGsBfS5mqMXD3o3YqFsDmcxztW1VSfxrtWs8X4aay52-IB41pWC0rN1-dWgjAD7U5RNSA8oNQ9U_wrRnJCRnGMUL9N2QtpyeTu857FYBQXNwUb8WJI4xRuD4a-FUtjB58kmT8_njuWLA1Qx3B_xiYIkH0qZXaahU4L14YNwkYqntcd_jlTVzsWJm-UT0DQGNhXiOi73QOliF9jLEtjajoWxB6gmZ2LnYZbFf55OzUExAlwnrf79clZUJuXmWtlmm5doyqE6OAYVU4a_pPiQaQHZcZnDLvWIB32goQMlYfabH0O3BTodSHot-hLIq6qfZrOWGnE_T7DmqwJz43ykTPV0sHJ__-wEU2PiNsub8-OWWbioNnos7pws3P5YKDcneI_zTj2nKH3D51fpetG0GPrT1ag8yCpYeCKZ-mMZIDgrqbqDAAmoFu0adGDjBa2AVW5N6qwqM3tl2t2bdaXBJ1diUG29Z27SQ-usI9Ijtmk9Y02aumwa0HlZ7Dx8Vx4TikNDAY77H0LSHF3BCUzW48_WhswinxmpBx27t1nP6SzHofwbNSAglkGIHuB2ufPb5DoSlixTGrHce9DN3iW7FSWyepNPi9qX_J9bNSsVfWP3mOPlpq_5QMzotL0JLhgR9wRXJbKH1ohFfrlJVjuAGO3nRa5A6-tz-8AsnFqpQUdvqNxugHNiee_B3eZHucVlSTPfBeaRIVyN_lpu3BNf7vBy9VS0vNybwPL5BKdM1x5pnQfrkXB6G9cF7NN8Chl0dZiEPWEqhlzXGyj3E0sh1M3pt9LAf6LGomokN45oL4eZyLgEtNpN5-v3YP9JCyNAlIQpIJ0ML8Bopwzp4lXKaMI3JFdNRZnmg3-xCzU9xU_25UTou0PYXj2rTfAqmjSnIkUFE4sug8Ldv_Uw=w1461-h975-s-no-gm?authuser=0)` }}
          className="header flex justify-center items-center bg-cover w-full h-full bg-center rounded-full opacity-80"
        >
          <h1 className="text-xl font-bold sm:text-3xl text-white">Akanksha</h1>
        </div>
        </Link>
      </div>
      {/* navigations */}
      <div className="nav-contents hidden md:flex items-center">
        <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 text-xl font-bold">
          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <Link
              to="/profile"
              
            >
              Profile
            </Link>
          </li>
          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
          <Link
          to="/about">
           About
           </Link>
          </li>
          
          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
          <Link
          to="/coordinators">
            Coordinators
            </Link>
          </li>
          
          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
          <Link
          to="/navToPages">
            pages
            </Link>
          </li>
          
          <li className="flex justify-center text-white items-center">
            <Link
              to="/login"
              className="mx-auto px-3 flex text-white justify-center font-bold border-slate-400 border-2 rounded-2xl  hover:bg-purple-900 hover:shadow-lg hover:shadow-blue-500 hover:text-white hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-600 hover:scale-[0.90] "
            >
              <button className="px-1 py-2 text-center ">Login/Signup</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Side-Menu (mobile option) */}
      <div
        className="side-menu px-2 flex items-center my-auto md:hidden "
        id="MenuBar"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
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
          <Link
              to="/profile"
              onClick={toggleMobileMenu}
              className="flex justify-start items-center px-2"
            >
              <span className="sm:hidden">profile</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to='/'
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/about"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/coordinators"
              onClick={toggleMobileMenu}
            >
              Coordinators
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="mx-auto px-5 flex justify-center font-semibold bg-slate-800 border-slate-600 border-2 rounded-2xl text-white hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-700 hover:delay-75 mb-4"
              onClick={toggleMobileMenu}
            >
              <button className="px-1 py-2 text-sm text-center hover:scale-[0.85] ">
                Login/Signup
              </button>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/navToPages"
              onClick={toggleMobileMenu}
            >
              Others
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
