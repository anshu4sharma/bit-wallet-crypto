import React from "react";
import Slide1 from "../../../assets/slide1.png";
import Slide2 from "../../../assets/slide2.png";
import Slide3 from "../../../assets/slide3.png";
import Slider from "react-slick";
const Step2 = ({ nextStep }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    afterChange: (r) => {
      if (r === data.length - 1) {
        console.log(r === data.length - 1);
        setTimeout(() => {
          nextStep();
        }, 500);
      }
    },
  };

  const data = [
    {
      image: Slide1,
      title: "Safe & secure",
      desc: "Your funds are securely stored in BIT wallet",
    },
    {
      image: Slide2,
      title: "Decentralized",
      desc: "BIT wallet is completely decentralized",
    },
    {
      image: Slide3,
      title: "Polygon",
      desc: "Wallet operates on polygon network",
    },
  ];

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <div className="w-full">
        <Slider {...settings}>
          {data.map((val, i) => (
            <div key={i} className="text-center">
              <div className="">
                <img src={val.image} alt="" className="mx-auto h-[300px]" />
              </div>
              <p className="font-bold text-xl mb-1 mt-4">{val.title}</p>
              <p className="text-xl max-w-[300px] mx-auto w-full">{val.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Step2;
