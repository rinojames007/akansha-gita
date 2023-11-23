import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
  const images = [
    {
      url:'./Demo-pics/Template.jpeg'
    },
    {
      url:'./Demo-pics/College-logo.jpg'
    },
    {
      url:'./Demo-pics/College-lighting.jpeg'
    },
    {
      url:'./Demo-pics/face-paint.jpeg'
    },
    {
      url:'./Demo-pics/College-fest.jpeg'
    },
    {
      url:'./image-slider/01_img.jpeg'
    },
    {
      url:'./image-slider/02_img.jpeg'
    },
    {
      url:'./image-slider/03_img.jpeg'
    },
    {
      url:'./image-slider/04_img.jpeg'
    }
    
  ];
  return (
    <>
    {/* #FF0076 – #590FB7 */}
    {/* #402662 – #3900A6 */}
    {/* #000066 – #6699FF */}
      <body className="bg-slate-100 h-full">   
      
      <Navbar/>
      <Hero images = {images}/>
      <Events/>
      <EventUpdates/>
      <Highlights/>
      <Footer/>
      </body>
    </>
  )
}