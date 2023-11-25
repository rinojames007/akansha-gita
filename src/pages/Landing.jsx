import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
  return (
    <>
    {/* #FF0076 – #590FB7 */}
    {/* #402662 – #3900A6 */}
    {/* #000066 – #6699FF */}
        
    <body className="bg-gradient-to-b from-black via-purple-900 to-black h-full"> 
      <Navbar/>
      <Hero/>
      <Events/>
      <EventUpdates/>
      <Highlights images = {images}/>
      <Footer/>
      </body>
    </>
  )
}