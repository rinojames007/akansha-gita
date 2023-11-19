import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Sidebar () {
    const sidebarMenuItems = useMemo(() => [
        {
          title: "Dashboard",
          icon: <RxDashboard />,
          link: "/profile",
        },
        {
          title: "Profile Settings",
          icon: <CgProfile />,
          link: "/settings",
        },
        {
          title: "Notification Center",
          icon: <IoMdNotifications />,
          link: "/notifications",
        },
        {
          title: "Help and support",
          icon: <IoHelp />,
          link: "/help",
        },
      ]);
    
    return (
        <div className="col-span-2">
        <div>
          <ul className="col-span-2 h-screen">
            {sidebarMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className=" flex justify-start items-center mt-4 px-2"
                >
                  <span className="text-3xl px-2">{item.icon}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
} 