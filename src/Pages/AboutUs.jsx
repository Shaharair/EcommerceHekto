import React from 'react'
import AboutFF from "../assets/about.png"
import FreeEE from "../assets/free.png"
import CashWW from "../assets/cash.png"
import QualityXX from "../assets/quaility.png"
import SupportEE from "../assets/support.png"
import ClientCC from "../assets/client.png"
import ClientEE from "../assets/client1.png"
import ClientOO from "../assets/client2.png"

const AboutUs = () => {
    return (
        <section>
            <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">About Us</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62;  About Us</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[30px]">
                    <div className="lg:w-[50%] w-full">
                        <img src={AboutFF} alt="about" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Josefin Sans font-bold lg:text-[36px] text-[20px] text-[#151875] lg:pr-[200px] pt-2 lg:pt-0">Know About Our Ecomerce Business, History</h3>
                        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:py-[20px] py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] bg-[#FB2E86] lg:px-[50px] px-[40px] lg:py-3 py-2 lg:mt-[30px] mt-2">Contact us</button>
                    </div>
                </div>
                <div className="">
                    <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] text-center lg:mt-[100px] mt-[30px] lg:pb-[50px] pb-[20px]">Our Features</h3>
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="lg:w-[24%] w-[48%] shadow text-center lg:py-[100px] py-[30px]">
                            <div className="lg:pl-[140px] pl-[50px]">
                                <img src={FreeEE} alt="free" />
                            </div>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[10px] py-1">Free Delivery</h3>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="lg:w-[24%] w-[48%] shadow text-center lg:py-[100px] py-[30px]">
                            <div className="lg:pl-[140px] pl-[50px]">
                                <img src={CashWW} alt="cash" />
                            </div>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[10px] py-1">100% Cash Back</h3>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="lg:w-[24%] w-[48%] shadow text-center lg:py-[100px] py-[30px] mt-[15px] lg:mt-0">
                            <div className="lg:pl-[140px] pl-[50px]">
                                <img src={QualityXX} alt="quaility" />
                            </div>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[10px] py-1">Quality Product</h3>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="lg:w-[24%] w-[48%] shadow text-center lg:py-[100px] py-[30px] mt-[15px] lg:mt-0">
                            <div className="lg:pl-[140px] pl-[50px]">
                                <img src={SupportEE} alt="support" />
                            </div>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[10px] py-1">24/7 Support</h3>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBFBFF] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px] lg:mb-[100px] mb-[30px]">
                    <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] text-center lg:py-[60px] py-[20px]">Our Client Say!</h3>
                    <div className="">
                        <div className="flex items-center lg:gap-5 gap-3 justify-center">
                            <div className="">
                                <img className="hover:pt-5" src={ClientCC} alt="client" />
                            </div>
                            <div className="">
                                <img className="hover:pt-5" src={ClientEE} alt="client1" />
                            </div>
                            <div className="">
                                <img className="hover:pt-5" src={ClientOO} alt="client2" />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:py-[10px] py-1 text-center">Selina Gomez</h3>
                            <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] text-center">Ceo At Webecy Digital</h5>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] text-center lg:pl-[400px] lg:pr-[400px] lg:pt-[60px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs