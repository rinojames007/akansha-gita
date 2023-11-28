import React from "react";
import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import SideNavElements from "../Components/Navbar/SideNavElements";

const EventInchargeSidebar = () => {
    return (
        <div className="bg-gray-900 h-screen w-full py-5">
          <SideNavElements title="Home" icon={<FaHome />} link="/" />
            
          <SideNavElements
            title="IncDashboard"
            icon={<RxDashboard />}
            link="/eventInchargeProfile"
          />
          <SideNavElements
            title="Profile Settings"
            icon={<CgProfile />}
            link="/eventInchargeSettings"
            
          />
          <SideNavElements
            title="Notification Center"
            icon={<IoMdNotifications />}
            link="/eventInchargeNotifications"
          />
          <SideNavElements
            title="Help and support"
            icon={<IoHelp />}
            link="/eventInchargeHelp"
          />
        </div>
      );
}

export default EventInchargeSidebar