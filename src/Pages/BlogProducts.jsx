import React from 'react'
import BlogRR from "../assets/blog.png"
import { FaPenNib, FaRegCalendarAlt, FaStar, FaFacebookF, FaInstagram, FaTwitter, FaUser, FaComment } from "react-icons/fa";
import BlogEE from "../assets/blog1.png"
import BlogCC from "../assets/blog2.png"
import BlogXX from "../assets/blog3.png"
import BlogII from "../assets/blog4.png"
import BlogMM from "../assets/blog5.png"
import BlogVV from "../assets/blog6.png"
import { MdEmail } from "react-icons/md";
import BlogNN from "../assets/blog7.png"
import BlogBB from "../assets/blog8.png"
import BlogWW from "../assets/blog9.png"
import BlogTT from "../assets/blog11.png"
import SaleEE from "../assets/sale.png"
import SaleWWW from "../assets/sale1.png"
import SaleCCC from "../assets/sale2.png"
import OfferNNN from "../assets/offer.png"
import OfferTTT from "../assets/offer1.png"
import OfferFFF from "../assets/offer2.png"
import OfferKK from "../assets/offer3.png"


const BlogProducts = () => {
    return (
        <section>
            <div className="bg-[#F6F5FF] text-center lg:mb-[100px] mb-[30px] lg:py-[100px] py-[30px]">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Single Blog</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62;	Single Blog</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:mb-[100px] mb-[30px]">
                    <div className="lg:w-[60%] w-full">
                        <div className="">
                            <img src={BlogRR} alt="blog" />
                        </div>
                        <div className="flex items-center lg:gap-[70px] gap-[10px] py-2">
                            <div className=" flex items-center lg:gap-3 gap-1 lg:py-[20px]">
                                <FaPenNib className="text-[#FB2E86]" />
                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[7px] text-[#151875] bg-[#FFE7F9] lg:px-[50px] px-[40px] lg:py-3 py-1">Surf Auxion</p>
                            </div>
                            <div className="flex items-center lg:gap-3 gap-1 lg:py-[20px] py-2">
                                <FaRegCalendarAlt className="text-[#FFA454]" />
                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[7px] text-[#151875] bg-[#FFE7F9] lg:px-[50px] px-[40px] lg:py-3 py-1">Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-Josefin Sans font-bold lg:text-[36px] text-[24px] text-[#151875] lg:py-[10px] py-1">Mauris at orci non vulputate diam tincidunt nec.</h3>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:py-[20px] py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </h6>
                            <i className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] bg-[#FAFAFB] lg:my-[20px] my-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</i>
                        </div>
                        <div className="flex items-center lg:gap-[60px] gap-[30px] lg:mt-[60px] mt-[30px]">
                            <div className="">
                                <img src={BlogEE} alt="blog1" />
                            </div>
                            <div className="">
                                <img src={BlogCC} alt="blog2" />
                            </div>
                        </div>
                        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pt-[30px] pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                        <div className="flex items-center justify-between lg:mt-[60px] mt-[30px] flex-wrap">
                            <div className="lg:w-[24%] w-[48%]">
                                <div className="">
                                    <img src={BlogXX} alt="blog3" />
                                </div>
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[10px] py-1">Quam sed</h4>
                                    <div className="flex items-center lg:gap-3 gap-1">
                                        <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[12px] text-[#151875]">$32.00</h3>
                                        <del className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#FF38B0]">$56.00</del>
                                        <div className="flex items-center lg:text-[18px] text-[14px]">
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[24%] w-[48%]">
                                <div className="">
                                    <img src={BlogII} alt="blog4" />
                                </div>
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[10px] py-1">Quam sed</h4>
                                    <div className="flex items-center lg:gap-3 gap-1">
                                        <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[12px] text-[#151875]">$32.00</h3>
                                        <del className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#FF38B0]">$56.00</del>
                                        <div className="flex items-center lg:text-[18px] text-[14px]">
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                                <div className="">
                                    <img src={BlogMM} alt="blog5" />
                                </div>
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[10px] py-1">Quam sed</h4>
                                    <div className="flex items-center lg:gap-3 gap-1">
                                        <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[12px] text-[#151875]">$32.00</h3>
                                        <del className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#FF38B0]">$56.00</del>
                                        <div className="flex items-center lg:text-[18px] text-[14px]">
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                                <div className="">
                                    <img src={BlogVV} alt="blog6" />
                                </div>
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[10px] py-1">Quam sed</h4>
                                    <div className="flex items-center lg:gap-3 gap-1">
                                        <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[12px] text-[#151875]">$32.00</h3>
                                        <del className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#FF38B0]">$56.00</del>
                                        <div className="flex items-center lg:text-[18px] text-[14px]">
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                            <FaStar className="text-[#FFD659]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:py-[30px] py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </h6>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 lg:py-[50px] py-[20px] justify-center text-[24px]">
                            <div className="bg-[#5625DF] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                <FaFacebookF />
                            </div>
                            <div className="bg-[#FF27B7] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                <FaInstagram />
                            </div>
                            <div className="bg-[#37DAF3] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                <FaTwitter />
                            </div>
                        </div>
                        <form>
                            <div className="">
                                <div className="lg:flex items-center lg:gap-[50px] gap-[30px]">
                                    <div className=" relative">
                                        <input type="text" placeholder="Your Name*" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:w-[435px] w-[250px] lg:h-[40px] h-[30px] pl-[30px] outline-none border-2" />
                                        <div className=" absolute top-[50%] translate-y-[-50%] left-0 pl-[10px] text-[#767676]">
                                            <FaUser />
                                        </div>
                                    </div>
                                    <div className=" relative mt-[30px] lg:mt-0">
                                        <input type="text" placeholder="Write Your Email*" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:w-[435px] w-[250px] lg:h-[40px] h-[30px] pl-[30px] outline-none border-2" />
                                        <div className=" absolute top-[50%] translate-y-[-50%] pl-[10px] text-[#767676]">
                                            <MdEmail />
                                        </div>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <div className="lg:mt-[60px] mt-[30px] font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:w-full lg:h-[300px] h-[150px] border-2">
                                        <input type="text" placeholder="Write your comment*" className="outline-none lg:pt-[30px] pt-[10px] pl-[30px]" />
                                        <div className=" absolute top-[13%] translate-y-[-13%] pl-[10px] text-[#767676]">
                                            <FaComment />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:py-[20px] py-2">
                                    <label form=""></label>
                                    <input type="checkbox" />
                                    <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#767676] lg:mx-[20px] mx-2">Save my name, email, and website in this browser for the next time I comment.</p>
                                </div>
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] bg-[#FB2E86] lg:px-[200px] px-[40px] lg:py-3 py-2">Continue Shipping</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="lg:w-[40%] w-full">
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[20px] pb-2 mt-[30px] lg:mt-0">Search</h3>
                            <input type="text" placeholder="Search Products" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] border-2 outline-none lg:w-[400px] w-[250px] pl-[10px] lg:py-3 py-2" />
                        </div>
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[30px] py-3">Categories</h3>
                            <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Hobbies (14)</h5>
                                </div>
                                <div className="">
                                    <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Women (21)</p>
                                </div>
                            </div>
                            <div className="flex items-center lg:gap-[50px] gap-[20px] lg:mt-[50px] mt-[20px]">
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Hobbies (14)</h5>
                                </div>
                                <div className="">
                                    <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Women (21)</p>
                                </div>
                            </div>
                            <div className="flex items-center lg:gap-[50px] gap-[20px] lg:mt-[50px] mt-[20px]">
                                <div className="">
                                    <h5 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Hobbies (14)</h5>
                                </div>
                                <div className="">
                                    <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#151875] border-2 lg:px-[40px] px-[30px] lg:py-3 py-2 hover:bg-[#F939BF] hover:text-[white] duration-300 ease-in-out">Women (21)</p>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[30px] py-3">Recent Post</h3>
                                <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                    <div className="">
                                        <img src={BlogNN} alt="blog7" />
                                    </div>
                                    <div className="">
                                        <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">It is a long established fact</p>
                                        <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                    </div>
                                </div>
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <img src={BlogBB} alt="blog7" />
                                        </div>
                                        <div className="">
                                            <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">It is a long established fact</p>
                                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <img src={BlogWW} alt="blog7" />
                                        </div>
                                        <div className="">
                                            <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">It is a long established fact</p>
                                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <img src={BlogTT} alt="blog7" />
                                        </div>
                                        <div className="">
                                            <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">It is a long established fact</p>
                                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[30px] py-[20px]">Sale Product</h3>
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <img src={SaleEE} alt="sale" />
                                        </div>
                                        <div className="">
                                            <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">Elit ornare in enim mauris.</p>
                                            <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                        </div>
                                    </div>
                                    <div className="lg:mt-[30px] mt-[20px]">
                                        <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                            <div className="">
                                                <img src={SaleWWW} alt="sale1" />
                                            </div>
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">Viverra pulvinar et enim.</p>
                                                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:mt-[30px] mt-[20px]">
                                        <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                            <div className="">
                                                <img src={SaleCCC} alt="sale2" />
                                            </div>
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] lg:pb-[10px]">Mattis varius donec fdsfd</p>
                                                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Aug 09 2020</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[30px] py-[20px]">Offer product</h3>
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <img src={OfferNNN} alt="offer" />
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">Duis lectus est.</p>
                                                <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">$12.00 - $15.00</h3>
                                            </div>
                                        </div>
                                        <div className="">
                                            <img src={OfferTTT} alt="offer1" />
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">Sed placerat.</p>
                                                <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">$12.00 - $15.00</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="lg:mt-[30px] mt-[20px]">
                                            <img src={OfferFFF} alt="offer2" />
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">Netus proin.</p>
                                                <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">$12.00 - $15.00</h3>
                                            </div>
                                        </div>
                                        <div className="lg:mt-[30px] mt-[20px]">
                                            <img src={OfferKK} alt="offer3" />
                                            <div className="">
                                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">Platea in.</p>
                                                <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">$12.00 - $15.00</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[30px] py-[20px] lg:pl-[10px]">Follow</h3>
                                    <div className=" lg:w-[45%] w-[60%] shadow lg:py-5 py-3">
                                        <div className="flex items-center gap-5 text-[24px] lg:pl-[30px] pl-[20px]">
                                            <div className="bg-[#5625DF] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                                <FaFacebookF />
                                            </div>
                                            <div className="bg-[#FF27B7] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                                <FaInstagram />
                                            </div>
                                            <div className="bg-[#37DAF3] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] text-white rounded-full lg:pl-[17px] pl-[7px] lg:pt-[17px] pt-[7px]">
                                                <FaTwitter />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:py-[20px] py-[10px]">Tags</h3>
                                    <div className="flex items-center lg:gap-[50px] gap-[20px]">
                                        <div className="">
                                            <u className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">General</u>
                                        </div>
                                        <div className="">
                                            <u className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Atsanil</u>
                                        </div>
                                        <div className="">
                                            <u className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Insas.</u>
                                        </div>
                                    </div>
                                    <div className="flex items-center lg:gap-[50px] gap-[20px] lg:mt-[10px]">
                                        <div className="">
                                            <u className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Bibsaas</u>
                                        </div>
                                        <div className="">
                                            <u className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Nulla.</u>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogProducts