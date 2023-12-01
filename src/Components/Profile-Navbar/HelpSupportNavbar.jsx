import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMemo } from "react";

const HelpSupportNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const sidebarMenuItems = useMemo(() => [
        {
            title: "Home",
            link: "/",
          },
          {
            title: "Dashboard",
      
            link: "/helpSupportProfile",
          },
          
          {
            title: "Notification Center",
      
            link: "/helpSupportNotifications",
          }
    ]);
  
    return (
      <nav className="h-[50px] sm:h-[80px] w-full  flex justify-between items-center px-1 py-3 sm:px-5 ">
        {/* Logo */}
        <div className="logo h-[40px] w-[160px] sm:h-[65px] sm:w-[260px] rounded-full bg-gray-600 flex justify-center items-center hover:cursor-pointer">
          <Link to="/" className="h-full w-full">
          <div
            style={{ backgroundImage: `url(./Demo-pics/cultural.jpg)` }}
            className="header flex justify-center items-center bg-cover w-full h-full bg-center rounded-full opacity-80"
          >
            <h1 className="text-xl font-bold sm:text-3xl text-white">Akanksha</h1>
          </div>
          </Link>
        </div>
        {/* navigations */}
        <div className="nav-contents hidden md:flex items-center">
          {/* <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 text-xl font-bold">
            
          </ul> */}
          <div>
            <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 text-xl font-bold">
              {sidebarMenuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="flex justify-start items-center mt-5 px-2"
                  >
                    <span className="sm:text-3xl text-2xl hover:scale-90 hidden  px-2">
                      {item.icon}
                    </span>
                    <span className="flex">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Side-Menu (mobile option) */}
        <div
          className="side-menu flex items-center mx-2 my-auto md:hidden "
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
  
          <ul className="flex flex-col items-center justify-center text-xl">
            {sidebarMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="flex justify-start items-center mt-3 px-2"
                  onClick={toggleMobileMenu}
                >
                  <span className="flex text-lg text-center hover:underline hover:text-slate-600">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}

export default HelpSupportNavbar