import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { Link } from 'react-router-dom';
import { LuShoppingCart, LuSearchX } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/ReduxSlice';

const Post = ({ allData }) => {

    let dispatch = useDispatch()

    let handlecart = (items) => {
        dispatch(addToCart({ ...items, qun: 1 }))
    }
    return (
        <>

            <div className="container mx-auto">
                <div className="flex items-center justify-between flex-wrap">
                    {allData.map((items) => (
                        <div className="lg:w-[24%] w-[48%] lg:py-5 py-3">
                            <div className=" lg:py-[80px] py-[50px] relative group overflow-hidden shadow">
                                <Link to={`/products/${items.id}`}>
                                    <img src={items.thumbnail} alt="" />
                                </Link>
                                <div className="flex items-center lg:gap-5 gap-2 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                    <div onClick={() => handlecart(items)} className="">
                                        <LuShoppingCart />
                                    </div>
                                    <FaRegHeart />
                                    <LuSearchX />
                                </div>
                                <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[100px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[12px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                    <div className="flex items-center lg:gap-3 gap-2 lg:py-[10px] py-1 lg:pl-[130px] pl-[58px]">
                                        <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#05E6B7] rounded"></h5>
                                        <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#F701A8] rounded"></h5>
                                        <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#00009D] rounded"></h5>
                                    </div>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[white] text-center">Code - Y523201</p>
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[white] mb-[20px] text-center">${items.price}</h4>
                                </div>
                            </div>
                            <div className="flex items-center justify-between lg:py-5 py-3">
                                <p className="font-dm-sans font-semibold lg:text-[20px] text-[12px] text-[#262626]">{items.title}</p>
                                <h3 className="font-dm-sans font-medium lg:text-[16px] text-[10px] text-[#767676]">${items.price}</h3>
                            </div>
                            <h3 className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676]">Black</h3>
                        </div >
                    ))}
                </div>
            </div>

        </>
    )
}

export default Post