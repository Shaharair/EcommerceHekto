import React from 'react'
import ContactFF from "../assets/contact.png"

const ContactsUs = () => {
    return (
        <section>
            <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Contact Us</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; Contact Us</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:pb-[20px] pb-2">Information About us</h3>
                        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[30px] pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className="flex items-center lg:gap-3 gap-2">
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5625DF]"></h4>
                            </div>
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#FB2E86]"></h4>
                            </div>
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#37DAF3]"></h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] py-[20px]">Contact Way</h3>
                        <div className="flex items-center lg:gap-[100px] gap-[10px]">
                            <div className="lg:w-[24%] w-[48%] flex items-center lg:gap-5 gap-1">
                                <div className="">
                                    <h4 className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] rounded-full bg-[#5625DF]"></h4>
                                </div>
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Tel:877-67-88</h5>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">EMail:shop@store.com</p>
                                </div>
                            </div>
                            <div className="lg:w-[24%] w-[48%] flex items-center lg:gap-5 gap-1">
                                <div className="">
                                    <h4 className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] rounded-full bg-[#FB2E86]"></h4>
                                </div>
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Support Forum</h5>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">For over 24hr</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center lg:gap-[100px] gap-[10px] lg:mt-[20px] mt-[10px]">
                            <div className=" lg:w-[24%] w-[48%] flex items-center lg:gap-5 gap-1">
                                <div className="">
                                    <h4 className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] rounded-full bg-[#FFB265]"></h4>
                                </div>
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">20,Margaret,st,London</h3>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Great,britain,3NM98,LK</p>
                                </div>
                            </div>
                            <div className="lg:w-[24%] w-[48%] flex items-center lg:gap-5 gap-1 lg:mt-[20px] mt-[10px]">
                                <div className="">
                                    <h4 className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] rounded-full bg-[#1BE982]"></h4>
                                </div>
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Free,standard,shipping</h5>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">on all orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[30px] lg:mb-[100px] mb-[30px]">
                    <div className="lg:w-[40%] w-full">
                        <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:pb-[10px]">Get In Touch</h3>
                        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <form>
                            <div className="">
                                <div className="flex items-center lg:gap-5 gap-2 lg:mt-[50px] mt-[20px]">
                                    <div className="">
                                        <input type="text" placeholder="Your Name*" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pl-[10px] pl-1 outline-none border-2 lg:w-[297px] w-[162px] lg:h-[50px] h-[40px]" />
                                    </div>
                                    <div className="">
                                        <input type="text" placeholder="Your E-mail*" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pl-[10px] pl-1 outline-none border-2 lg:w-[297px] w-[162px] lg:h-[50px] h-[40px]" />
                                    </div>
                                </div>
                                <div className="mt-[30px]">
                                    <input type="text" placeholder="Subject*" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pl-[10px] pl-1 w-full lg:h-[50px] h-[40px] outline-none border-2" />
                                </div>
                                <div className="mt-[30px] font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] w-full lg:h-[250px] h-[150px] border-2">
                                    <input type="text" placeholder="Type Your Messege*"  className=" pl-[10px] outline-none mt-[30px]"/>
                                </div>
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] bg-[#FB2E86] lg:px-[60px] px-[40px] lg:py-3 py-2">Send Mail</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[60%] lg:opacity-100 opacity-0">
                        <img src={ContactFF} alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsUs