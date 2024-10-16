import React from 'react'
import BannerTT from "../assets/banner.png"
import Slider from "react-slick";


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    position: "absolute",
                    left: "60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="shahariar"
                style={{
                    width: "30px",
                    color: "transprents",
                    borderRight: "2px white solid",
                    padding: "8px 0"
                }}
            >
                0{i + 1}
            </div>
        )
    }
    return (
        <section>
            <Slider {...settings}>
                <div className="">
                    <img src={BannerTT} alt="banner" />
                </div>
                <div className="">
                    <img src={BannerTT} alt="banner" />
                </div>
                <div className="">
                    <img src={BannerTT} alt="banner" />
                </div>
                <div className="">
                    <img src={BannerTT} alt="banner" />
                </div>
            </Slider>
        </section>
    )
}

export default Banner