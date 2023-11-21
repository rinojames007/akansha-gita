import Sidebar from "../Components/Profile-Sidebar/Sidebar";
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";

export default function Notification() {
  return (
    <div className="container flex flex-col justify-center w-screen h-full ">
      <div className="navbar w-full sm:hidden">
        <ProfileNav/>
      </div>
    <div className="container flex justify-center w-full h-full">
    <div className="w-[20%] hidden sm:flex h-screen">
      <Sidebar />
    </div>
    <div className="hero w-[80%] h-full m-4 flex-col justify-center text-center item-center ">
      <p className="text-3xl font-bold">Notification page....</p>
    </div>
    </div>
    </div>
  );
}
