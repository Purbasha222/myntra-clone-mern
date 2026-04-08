import banner6 from "../assets/banner6.webp";
import banner7 from "../assets/banner7.webp";
import banner8 from "../assets/banner8.webp";
import banner9 from "../assets/banner9.webp";
import banner10 from "../assets/banner10.webp";
import banner11 from "../assets/banner11.webp";
import banner12 from "../assets/banner12.webp";
import banner13 from "../assets/banner13.webp";
import banner14 from "../assets/banner14.webp";
import banner15 from "../assets/banner15.webp";
import banner16 from "../assets/banner16.webp";
import banner17 from "../assets/banner17.webp";
import banner18 from "../assets/banner18.webp";
import Slider from "react-slick";

const ShopSlider = () => {
  const sliderImages_1 = [
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
  ];

  const sliderImages_2 = [banner15, banner16, banner17, banner18];

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

  return (
    <>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {sliderImages_1.map((img, index) => (
            <div key={index}>
              <img src={img} alt="shop" className="w-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {sliderImages_2.map((img, index) => (
            <div key={index}>
              <img src={img} alt="shop" className="w-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ShopSlider;
