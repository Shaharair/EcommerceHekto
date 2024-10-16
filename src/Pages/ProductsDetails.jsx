import React, { useContext, useEffect, useState } from 'react'
import DetailsFF from "../assets/details1.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaStar } from "react-icons/fa";
import { MdOutlineStarOutline, MdStarHalf, MdOutlineStar } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import DetailsEE from "../assets/details2.png"
import DetailsXX from "../assets/details3.png"
import DetailsII from "../assets/details4.png"
import DetailsNN from "../assets/details5.png"
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addToCart } from '../Components/Slice/ReduxSlice';



const ProductsDetails = () => {


    let [singleData, setSingleData] = useState([])
    let productId = useParams()
    let dispatch = useDispatch()


    let getData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleData(response.data);

        })
    }
    useEffect(() => {
        getData()
    }, [])

    let ClaintRatting = Array.from({ length: 5 }, (elm, index) => {

        let ratingNumber = index + 0.5

        return (
            singleData.rating >= index + 1 ? <MdOutlineStar className="text-[#FFD881]" /> : singleData.rating > ratingNumber ? <MdStarHalf className="text-[#FFD881]" /> : <MdOutlineStarOutline className="text-[#FFD881]" />
        )
    })

    let handleAddTocart = (items) => {
        dispatch(addToCart({...items, qun:1 }))
        
    }






    return (
        <section>
            <div className="bg-[#F6F5FF] text-center lg:py-[100px] py-[30px]">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Product Details</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; Product Details</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between lg:mt-[100px] mt-[30px]">
                    {singleData?.images?.map((items) => (
                        <div className="w-[50%] flex">
                            <div className="lg:w-[30%] w-[20%]">
                                <div className="">
                                    <img src={items} alt="" />
                                </div>
                                <div className="">
                                    <img src={items} alt="" />
                                </div>
                                <div className="">
                                    <img src={items} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[70%] w-[20%]">
                                <img src={items} alt="" />
                            </div>
                        </div>
                    ))}
                    <div className="lg:w-[50%] w-[50%] lg:mt-[50px]">
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[30px] text-[18px] text-[#151875] lg:pb-[10px] pb-1">{singleData.title}</h3>
                            <div className="flex items-center lg:gap-2 gap-1">
                                {ClaintRatting}
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-5 gap-3 lg:mt-3">
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#151875]">${singleData.price}</h4>
                                </div>
                                <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#FB2E86]">{singleData.discountPercentage}%</h4>
                                </div>
                            </div>
                            <div className="lg:mt-[20px]">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[20px] text-[16px] text-[#151875] lg:pb-[10px] pb-1">Brand:{singleData.brand}</h3>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="lg:my-[20px] my-1">
                                <Link to="/cart" onClick={() => handleAddTocart(singleData)}>
                                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] bg-[#FB2E86] lg:px-[60px] px-[40px] lg:py-3 py-2">Add To cart</button>
                                </Link>
                            </div>
                            <h3 className="font-Josefin Sans font-semibold lg:text-[20px] text-[16px] text-[#151875] lg:pb-[10px]">Categories:{singleData.category}</h3>
                            <h5 className="font-Josefin Sans font-semibold lg:text-[20px] text-[16px] text-[#151875] lg:pb-[10px]">Tags:{singleData.tags}</h5>
                            <div className="flex items-center lg:gap-5 gap-3 lg:text-[20px] text-[14px]">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[20px] text-[16px] text-[#151875] lg:pb-[10px]">Share:</h3>
                                <div className="bg-[#5625DF] lg:w-[40px] w-[25px] lg:h-[40px] h-[25px] text-white rounded-full lg:pl-[10px] pl-[5px] lg:pt-[10px] pt-[5px]">
                                    <FaFacebookF />
                                </div>
                                <div className="bg-[#FF27B7] lg:w-[40px] w-[25px] lg:h-[40px] h-[25px] text-white rounded-full lg:pl-[10px] pl-[5px] lg:pt-[10px] pt-[5px]">
                                    <FaInstagram />
                                </div>
                                <div className="bg-[#37DAF3] lg:w-[40px] w-[25px] lg:h-[40px] h-[25px] text-white rounded-full lg:pl-[10px] pl-[5px] lg:pt-[10px] pt-[5px]">
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[#F9F8FE] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px]">
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:w-[80%] w-full">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="lg:w-[24%] w-[48%] lg:py-[20px] py-1">
                                <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Description</u>
                            </div>
                            <div className="lg:w-[24%] w-[48%] lg:py-[20px] py-1">
                                <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Additional Info</u>
                            </div>
                            <div className="lg:w-[24%] w-[48%] lg:py-[20px] py-1">
                                <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Reviews</u>
                            </div>
                            <div className="lg:w-[24%] w-[48%] lg:py-[20px] py-1">
                                <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Video</u>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:py-[20px] py-2">Varius tempor.</h3>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                        <div className="">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:py-[20px] py-2">More details</h3>
                            <div className="flex items-center lg:gap-5 gap-3">
                                <FaArrowRightLong />
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3 lg:py-3 py-2">
                                <FaArrowRightLong />
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3 lg:pb-3 pb-2">
                                <FaArrowRightLong />
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3">
                                <FaArrowRightLong />
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:mt-[100px] mt-[30px] lg:pb-[50px] pb-[20px]">Related Products</h3>
                <div className="flex items-center justify-between flex-wrap">
                    <div className="lg:w-[24%] w-[48%]">
                        <div className="">
                            <img src={DetailsEE} alt="details2" />
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-5 gap-3 lg:py-3 py-1">
                                <p className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">Mens Fashion Wear</p>
                                <div className="flex items-center lg:gap-[6px] lg:text-[18px] text-[12px]">
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                </div>
                            </div>
                            <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">$43.00</h3>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%]">
                        <div className="">
                            <img src={DetailsXX} alt="details3" />
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-5 gap-3 lg:py-3 py-1">
                                <p className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">Mens Fashion Wear</p>
                                <div className="flex items-center lg:gap-[6px] lg:text-[18px] text-[12px]">
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                </div>
                            </div>
                            <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">$43.00</h3>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                        <div className="">
                            <img src={DetailsII} alt="details4" />
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-5 gap-3 lg:py-3 py-1">
                                <p className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">Mens Fashion Wear</p>
                                <div className="flex items-center lg:gap-[6px] lg:text-[18px] text-[12px]">
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                </div>
                            </div>
                            <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">$43.00</h3>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] mt-[10px] lg:mt-0">
                        <div className="">
                            <img src={DetailsNN} alt="details5" />
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-5 gap-3 lg:py-3 py-1">
                                <p className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">Mens Fashion Wear</p>
                                <div className="flex items-center lg:gap-[6px] lg:text-[18px] text-[12px]">
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                    <FaStar className="text-[#FFC416]" />
                                </div>
                            </div>
                            <h3 className="font-Josefin Sans font-semibold lg:text-[16px] text-[10px] text-[#151875]">$43.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsDetails