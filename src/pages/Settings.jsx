import Sidebar from "../Components/Profile-Sidebar/Sidebar";
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";
import ProfileSetting from "../Components/ProfileSetting/ProfileSetting";

export default function Settings() {
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
      <p className="text-3xl font-bold">Profile Settings page....</p>
      <ProfileSetting/>
      
    </div>
    </div>
    </div>
  );
}
