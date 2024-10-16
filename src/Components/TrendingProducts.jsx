import React from 'react'
import ChairXX from "../assets/chair4.png"
import WatchXX from "../assets/watch2.png"
import WatchCC from "../assets/watch3.png"
import ChairMM from "../assets/chair6.png"
import ChairUU from "../assets/chair7.png"
import ChairYY from "../assets/chair8.png"

const TrendingProducts = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:pb-[50px] pb-[20px] text-center">Trending Products</h3>
                <div className="flex items-center justify-between flex-wrap">
                    <div className="lg:w-[24%] w-[48%]">
                        <div className=" bg-[#F5F6F8] lg:py-[100px] py-[20px]">
                            <img src={ChairXX} alt="chair4" />
                        </div>
                        <div className="text-center lg:py-4 py-1 bg-[red]">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white]">Cantilever chair</h3>
                            <div className="flex items-center lg:gap-3 gap-1 lg:pl-[130px] pl-[30px]">
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[14px] text-[white]">$26.00 </h3>
                                </div>
                                <div className="">
                                    <del className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white]">$42.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%]">
                        <div className=" bg-[#F5F6F8] lg:py-[100px] py-[20px]">
                            <img src={ChairXX} alt="chair4" />
                        </div>
                        <div className="text-center lg:py-4 py-1 bg-[red]">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white]">Cantilever chair</h3>
                            <div className="flex items-center lg:gap-3 gap-1 lg:pl-[130px] pl-[30px]">
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[14px] text-[white]">$26.00 </h3>
                                </div>
                                <div className="">
                                    <del className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white]">$42.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                        <div className=" bg-[#F5F6F8] lg:py-[100px] py-[20px]">
                            <img src={ChairXX} alt="chair4" />
                        </div>
                        <div className="text-center lg:py-4 py-1 bg-[red]">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white]">Cantilever chair</h3>
                            <div className="flex items-center lg:gap-3 gap-1 lg:pl-[130px] pl-[30px]">
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[14px] text-[white]">$26.00 </h3>
                                </div>
                                <div className="">
                                    <del className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white]">$42.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                        <div className=" bg-[#F5F6F8] lg:py-[100px] py-[20px]">
                            <img src={ChairXX} alt="chair4" />
                        </div>
                        <div className="text-center lg:py-4 py-1 bg-[red]">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white]">Cantilever chair</h3>
                            <div className="flex items-center lg:gap-3 gap-1 lg:pl-[130px] pl-[30px]">
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[14px] text-[white]">$26.00 </h3>
                                </div>
                                <div className="">
                                    <del className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white]">$42.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between flex-wrap lg:mt-[30px] mt-[20px]">
                    <div className="lg:w-[32%] w-full bg-[#FFF6FB] py-[30px]">
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] pb-[10px] lg:pl-[30px] pl-[20px]">23% off in all products</h3>
                            <u className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#FB2E86] lg:pl-[30px] pl-[20px]">Shop Now</u>
                        </div>
                        <div className="lg:mx-[150px] mx-[80px]">
                            <img src={WatchXX} alt="watch2" />
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full bg-[#FFF6FB] py-[70px] mt-[20px] lg:mt-0">
                        <div className="">
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] pb-[10px] lg:pl-[30px] pl-[20px]">23% off in all products</h3>
                                <u className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#FB2E86] lg:pl-[30px] pl-[20px]">View Collection</u>
                            </div>
                            <div className="lg:mx-[150px] mx-[80px]">
                                <img src={WatchCC} alt="watch3" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full mt-[20px] lg:mt-0">
                        <div className="flex items-center gap-5">
                            <img className="bg-[#F5F6F8]" src={ChairMM} alt="chair6" />
                            <div className="">
                                <p className="font-Josefin Sans font-semibold text-[18px] text-[#151875]">Executive Seat chair</p>
                                <h3 className="font-Josefin Sans font-medium text-[16px] text-[#767676]">$32.00</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 py-[10px]">
                            <img className="bg-[#F5F6F8]" src={ChairUU} alt="chair7" />
                            <div className="">
                                <p className="font-Josefin Sans font-semibold text-[18px] text-[#151875]">Executive Seat chair</p>
                                <h3 className="font-Josefin Sans font-medium text-[16px] text-[#767676]">$32.00</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <img className="bg-[#F5F6F8]" src={ChairYY} alt="chair8" />
                            <div className="">
                                <p className="font-Josefin Sans font-semibold text-[18px] text-[#151875]">Executive Seat chair</p>
                                <h3 className="font-Josefin Sans font-medium text-[16px] text-[#767676]">$32.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts