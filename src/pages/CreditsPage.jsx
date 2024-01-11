import React from "react";
import CreditsBox from "../Components/Credits/CreditsBox";
import { Navbar } from "flowbite-react";

const CreditsPage = () => {
  const creditDetails = [
    {
      name: "Aryan ku Mohapatra",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/aryan_mohapatra_35/",
      linkedIn: "https://www.linkedin.com/in/aryan-kumar-mohapatra-2751361a9/",
      twitter:"https://twitter.com/AryanKumarMoha5",
      photo: "/Credits/Aryan.webp",
    },
    {
      name: "Rino James",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/rinojames007?igsh=MWJ5MnZxMGN4MzVtag==/",
      linkedIn: "https://www.linkedin.com/in/rino-james-4ba710238/",
      twitter:"https://twitter.com/rinojames03",
      photo: "/Credits/Rino.webp",
    },
    {
      name: "Manish ku Samal",
      role: "Tech Team Head",
      insta: "http://surl.li/oumal",
      linkedIn: "http://surl.li/oulzz",
      twitter:"#",
      photo: "/Credits/Manish.webp",
    },
    {
      name: "Ancil Antichan",
      role: "Design and Media",
      insta: "https://www.instagram.com/ancil_offical?igsh=ZnJ3Nm5iZWo4azM1",
      linkedIn: "https://www.linkedin.com/in/ancil-antichan-b2762b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter:"https://twitter.com/mathew_ancil?t=0ScmUDKEaN8NsBroE4tgpA&s=09",
      photo: "/Credits/Ancil.webp",
    },
    {
      name: "Himanshu Sekhar Nayak",
      role: "Design and Media",
      insta: "https://www.instagram.com/_himanshu_nayak_/",
      linkedIn: "https://www.linkedin.com/in/himanshu-shekhar-nayak-9b829a249",
      twitter:"https://twitter.com/NoNeed15032003?t=VVER07HhOO_MrWcvgvZb_w&s=09",
      photo: "/Credits/Himanshu.webp",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full py-12">
      <Navbar/>
      <h1 className="text-white text-4xl font-bold text-center pt-[25px]">
        Credits
      </h1>
      <div className="flex flex-wrap justify-center items-center md:my-[100px] space-y-7 md:space-y-0 md:space-x-5">
        {creditDetails.map((item) => (
          <CreditsBox
            key={item.name}
            name={item.name}
            role={item.role}
            insta={item.insta}
            linkedIn={item.linkedIn}
            twitter={item.twitter}
            photo={item.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditsPage;
