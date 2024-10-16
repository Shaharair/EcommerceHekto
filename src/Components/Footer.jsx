import React from 'react'
import LogoOO from "../assets/logo.png"

const Footer = () => {
    return (
        <section className="bg-[#EEEFFB] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="lg:w-[40%] w-[48%]">
                        <img src={LogoOO} alt="logo" />
                        <div className="lg:w-[60%] w-full relative lg:py-[20px] py-[10px]">
                            <input type="text" placeholder="Enter Your Email" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] lg:pl-2 pl-1 text-[#767676] lg:w-[370px] w-[150px] lg:h-[50px] h-[30px] outline-none" />
                            <div className=" absolute top-[50%] translate-y-[-50%] right-0 bg-[#FB2E86] lg:w-[130px] w-[60px] lg:h-[50px] h-[30px] rounded lg:pt-[13px] lg:pl-[35px] pl-[10px]">
                                <a className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[white]">Sign Up</a>
                            </div>
                        </div>
                        <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] pb-[10px] lg:pb-0">Contact Info</h5>
                        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <ul>
                            <li className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[20px] pb-[10px]">Catagories</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Laptops & Computers</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Cameras & Photography</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Smart Phones & Tablets</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Video Games & Consoles</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <ul>
                            <li className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[20px] pb-[10px]">Customer Care</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">My Account</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Discount</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Returns</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Orders History</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Order Tracking</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <ul>
                            <li className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[20px] pb-[10px]">Pages</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Blog</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Browse the Shop</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Category</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Pre-Built Pages</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">Visual Composer Elements</li>
                            <li className="font font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-2 pb-1">WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer