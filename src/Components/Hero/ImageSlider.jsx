import SimpleImageSlider from "react-simple-image-slider";

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

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  ))}
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
    onClick={prevSlide}
  >
    <img src="./slider-arrow/left-arrow.png" alt="left-arrow" className="px-3 w-full h-6 py-2 bg-white rounded-full " />
  </button>
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
    onClick={nextSlide}
  >
    <img src="./slider-arrow/right-arrow.png" alt="right-arrow" className="px-3 w-full h-6 py-2 bg-white rounded-full " />
  </button>
</div>
  );
}

export default ImageSlider;