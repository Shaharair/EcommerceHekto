import React, { useContext } from 'react'
import FeaturedIitem from './FeaturedIitem'
import { Link } from 'react-router-dom'
import { apiData, } from './ContextApi';
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-[#979797] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] lg:pl-[16px] pl-[10px] pt-[4px] rounded-full absolute top-[35%] right-[-7px] z-50 translate-y-[-35%]"><FaLongArrowAltRight className="inline-block" /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-[#979797] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] rounded-full lg:pl-[16px] pl-[10px] pt-[4px] absolute top-[35%] left-[-10px] z-50 translate-y-[-35%]" ><FaLongArrowAltLeft className="inline-block" /></div>
  );
}

const FeaturedProducts = () => {
  let data = useContext(apiData)
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]
  };


  return (
    <section>
      <div className="container px-3 lg:px-0 mx-auto">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] text-center lg:py-[50px] py-[20px]">Featured Products</h3>
        <div className="">
          <Slider {...settings}>
            {data.map((items) => (
              <Link to="/products">
                <FeaturedIitem items={items} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts