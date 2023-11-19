import Events from "../Components/Events/Events";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
  const images = [
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
  
      <Navbar/>
      <Hero images = {images}/>
      <Events/>
      <Highlights/>
    </>
  )
}