import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "./Demo-pics/Template.jpeg",
  },
  {
    url: "./Demo-pics/College-logo.jpg",
  },
  {
    url: "./Demo-pics/College-lighting.jpeg",
  },
  {
    url: "./Demo-pics/face-paint.jpeg",
  },
  {
    url: "./Demo-pics/College-fest.jpeg",
  },
  {
    url: "./image-slider/01_img.jpeg",
  },
  {
    url: "./image-slider/02_img.jpeg",
  },
  {
    url: "./image-slider/03_img.jpeg",
  },
  {
    url: "./image-slider/04_img.jpeg",
  },
];

const ImageSlider = () => {
  return (
    <>
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
    </>
  );
};

export default ImageSlider;
