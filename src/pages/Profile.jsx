import Carousel from "../Components/Carousell/Carousel";
import Sidebar from "../Components/Profile-Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";
import Card from "../Components/Carousell/Card";
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";

// function ProfileEvent(props) {
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 m-auto">
//       <img src={props.img} className="w-full rounded-md" />
//       <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           {props.name}
//         </h5>
//       </div>
//     </div>
//   );
// }

function Profile() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen="./Demo-pics/College-lighting.jpeg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="./Demo-pics/College-fest.jpeg" />,
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <div className="container flex flex-col justify-center w-screen h-full ">
      <div className="navbar w-full sm:hidden">
        <ProfileNav />
      </div>
      <div className="container flex justify-center mx-auto w-full h-full">
        <div className="sidebar hidden sm:flex justify-center w-[20%] h-full">
          <Sidebar />
        </div>

        {/* hero section  */}
        <div className="hero w-[100%] sm:w-[80%] bg-slate-100 h-full py-5  ">
          <div className="container flex flex-col justify-center text-center item-center mx-auto">
            <h3 className="sm:text-3xl text-2xl font-bold">
              Welcome to your Dashboard!
            </h3>

            <p className="text-sm text-slate-500">
              Manage and track your fest related activities
            </p>
            <div className="flex-col justify-evenly mt-8 w-full">
              <p className="font-bold text-3xl flex justify-center items-center">
                Registered Events
              </p>

              <div className="flex justify-center sm:my-[40px] w-[100%]">
                <Carousel
                  cards={cards}
                  height="400px"
                  width="50%"
                  margin="0 auto"
                  offset={2}
                  showArrows={false}
                />
              </div>

              {/* <ProfileEvent name="something else" img="./Demo-pics/event.jpeg" /> */}
              {/* <ProfileEvent name="something" img="./Demo-pics/event.jpeg" /> */}
              {/* <ProfileEvent name="Race" img="./Demo-pics/event.jpeg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
