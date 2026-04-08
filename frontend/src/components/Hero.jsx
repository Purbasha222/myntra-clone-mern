import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  const bannerImages = [banner1, banner2, banner3, banner4, banner5];

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt="slide" className="w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
