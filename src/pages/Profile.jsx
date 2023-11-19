
import Sidebar from "../Components/Sidebar";

function ProfileEvent(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 m-auto">
      <img src={props.img} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </div>
    </div>
  );
}

function Profile() {
  
  return (
    <div className="grid grid-cols-12 w-screen h-screen">
      <Sidebar />
      <div className="m-4 col-span-10 flex-col text-center ">
        <h3 className="text-3xl font-bold">Welcome to your Dashboard!</h3>
        <p>Manage and track your fest related activities</p>
        <div className="flex-col justify-evenly mt-8">
          <p className="font-bold text-2xl inline sm:block">
            Registered Events
          </p>

          <ProfileEvent
            name="something else"
            img="https://picsum.photos/500/300?random=1"
          />
          <ProfileEvent
            name="something"
            img="https://picsum.photos/500/300?random=2"
          />
          <ProfileEvent
            name="Race"
            img="https://picsum.photos/500/300?random=3"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
