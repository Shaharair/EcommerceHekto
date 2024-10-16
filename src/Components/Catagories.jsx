import React, { useContext } from 'react'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Catagories = () => {

    let data = useContext(apiData)

    var settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
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
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:py-[50px] py-[20px] text-center">Top Categories</h3>
                <div className="flex-wrap justify-between">
                    <Slider {...settings}>
                        {data.map((items) => (
                            <div className="w-[24%]">
                                <div className=" pb-[30px]">
                                    <Link to="/products">
                                        <div className="">
                                            <img src={items.thumbnail} alt="" />
                                        </div>
                                    </Link>
                                    <div className="text-center">
                                        <p className="font-Josefin Sans font-semibold lg:text-[20px] text-[16px] text-[#151875] lg:pt-[30px] pt-[20px]">{items.title}</p>
                                        <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875] lg:pt-[10px]">${items.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Catagories