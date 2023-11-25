// import Carousel from "../Components/Carousell/Carousel";
import Sidebar from "../Components/Profile-Sidebar/Sidebar";
// import { v4 as uuidv4 } from "uuid";
// import Card from "../Components/Carousell/Card";
import ProfileNav from "../Components/Profile-Navbar/ProfileNav";
// import EventBox from "../Components/Event-box/EventBox";
import SmallEventBox from "../Components/Event-box/smallEventBox";

function Profile() {
  // let cards = [
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen="./Demo-pics/College-lighting.jpeg" />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen="./Demo-pics/College-fest.jpeg" />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
  //     ),
  //   },
  //   {
  //     key: uuidv4(),
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
  //     ),
  //   },
  // ];
  return (
    <div className="w-full bg-black">
      <div className="container  flex mx-auto flex-col md:flex-row w-full  h-full ">
        <div className="navbar w-full md:hidden">
          <ProfileNav />
        </div>
        <div className="container flex  mx-auto w-full h-full">
          <div className="sidebar hidden md:block md:w-[20%] h-full">
            <Sidebar />
          </div>

          {/* hero section  */}
          <div className="hero w-full md:w-[80%] bg-gradient-to-b from-black via-purple-900 to-black h-full py-5 flex justify-center item-center ">
            <div className="container w-full flex flex-col justify-center text-center item-center mx-auto">
              <h3 className="md:text-5xl text-3xl font-bold text-white">
                Welcome to your Dashboard!
              </h3>

              <p className="text-lg text-slate-300 mt-5">
                Manage and track your fest related activities
              </p>
              <div className="flex-col justify-evenly mt-8 w-full">
                <p className="font-bold text-3xl flex justify-center items-center text-white">
                  Registered Events
                </p>
                <div className="events-container flex flex-col md:flex-row justify-center my-4 md:justify-around items-start flex-wrap w-full">
                  <div className="flex flex-col justify-center items-center md:w-[32%] my-3 md:my-0 py-2 w-[100%] border-2 px-2 rounded-md">
                    <h1 className="text-2xl font-bold my-3 text-white">
                      Ahwan(Sports)
                    </h1>

                    <SmallEventBox
                      EventName="Long Jump Boys"
                      EventTime="12:35 pm"
                    />
                    <SmallEventBox
                      EventName="Long Jump Boys"
                      EventTime="12:35 pm"
                    />
                    <SmallEventBox
                      EventName="Long Jump Boys"
                      EventTime="12:35 pm"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center md:w-[32%] my-3 md:my-0 py-2 border-2 px-2 rounded-md w-[100%]">
                    <h1 className="text-2xl font-bold my-3 text-white">
                      Anwesh(Tech-Fest)
                    </h1>

                    <SmallEventBox EventName="Codathon" EventTime="1:35 pm" />
                    <SmallEventBox EventName="Codathon" EventTime="1:35 pm" />
                    <SmallEventBox EventName="Codathon" EventTime="1:35 pm" />
                    <SmallEventBox EventName="Codathon" EventTime="1:35 pm" />
                  </div>
                  <div className="flex flex-col justify-center items-center md:w-[32%] my-3 md:my-0 py-2 border-2 px-2 rounded-md w-[100%]">
                    <h1 className="text-2xl font-bold my-3 text-white">
                      Akanksha
                    </h1>

                    <SmallEventBox
                      EventName="Sambalpuri Dance"
                      EventTime="7:35 pm"
                    />
                    <SmallEventBox
                      EventName="Sambalpuri Dance"
                      EventTime="7:35 pm"
                    />
                    <SmallEventBox
                      EventName="Sambalpuri Dance"
                      EventTime="7:35 pm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

{
  /* <Carousel
                  cards={cards}
                  height="400px"
                  width="50%"
                  margin="0 auto"
                  offset={2}
                  showArrows={false}
                /> */
}
