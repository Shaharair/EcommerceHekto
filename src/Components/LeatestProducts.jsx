import React, { useContext, useEffect, useState } from 'react'
import ChairWW from "../assets/chair1.png"
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom'
import { LuShoppingCart, LuSearchX } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";

const LeatestProducts = () => {

    let data = useContext(apiData)
    let [category, setCategory] = useState([])
    let [newdata, setNewData] = useState([])
    let [leatestpage, setLeatestPage] = useState(1)
    let [leatestperpage, setLeatestPerPage] = useState(8)

    let leatest = leatestpage * leatestperpage
    let perpage = leatest - leatestperpage
    let AllData = data.slice(perpage, leatest)





    useEffect(() => {
        setCategory([...new Set(data.map((items) => items.category))])

    }, [data])

    let handlenew = (Citems) => {
        let newdataFilter = data.filter((items) => items.category == Citems)
        setNewData(newdataFilter)
    }




    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:py-[50px] py-[20px] text-center">Leatest Products</h3>
                <div className="flex items-center lg:gap-[30px] gap-[10px] justify-center">
                    <div className="">
                        {category.map((items) => (
                            <div onClick={() => handlenew(items)} className="flex">
                                {items == "beauty" && <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#262626] capitalize hover:text-[#F701A8] duration-300 ease-in-out">{`New Arrival`}</h3>}
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {category.map((items) => (
                            <div onClick={() => handlenew(items)} className="flex">
                                {items == "fragrances" && <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#262626] capitalize hover:text-[#F701A8] duration-300 ease-in-out">{`Best Seller`}</h3>}
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {category.map((items) => (
                            <div onClick={() => handlenew(items)} className="flex">
                                {items == "furniture" && <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#262626] capitalize hover:text-[#F701A8] duration-300 ease-in-out">{`Featured`}</h3>}
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {category.map((items) => (
                            <div onClick={() => handlenew(items)} className="flex">
                                {items == "groceries" && <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#262626] capitalize hover:text-[#F701A8] duration-300 ease-in-out">{`Special Offer`}</h3>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between lg:mt-[50px] mt-[30px] flex-wrap">
                    {newdata.length > 0 ?
                        <div className="flex items-center flex-wrap justify-between">
                            {newdata.map((items) => (
                                <div className="lg:w-[24%] w-[48%] pb-[20px] lg:pb-0">
                                    <div className=" lg:py-[80px] py-[50px] relative group overflow-hidden shadow">
                                        <Link to={`/products/${items.id}`}>
                                            <img src={items.thumbnail} alt="" />
                                        </Link>
                                        <div className="flex items-center lg:gap-5 gap-2 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                            <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                            <FaRegHeart />
                                            <LuSearchX />
                                        </div>
                                        <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[100px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[12px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                            <div className="flex items-center lg:gap-3 gap-1 lg:py-[10px] py-1 lg:pl-[130px] pl-[58px]">
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#05E6B7] rounded"></h5>
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#F701A8] rounded"></h5>
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#00009D] rounded"></h5>
                                            </div>
                                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[white] text-center">Code - Y523201</p>
                                            <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[white] lg:mb-[20px] mb-[10px] text-center">${items.price}</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between lg:py-5 py-2">
                                        <p className="font-dm-sans font-semibold lg:text-[20px] text-[12px] text-[#262626]">{items.title}</p>
                                        <h3 className="font-dm-sans font-medium lg:text-[16px] text-[10px] text-[#767676]">${items.price}</h3>
                                    </div>
                                    <h3 className="font-dm-sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Black</h3>
                                </div >
                            ))
                            }
                        </div>
                        :
                        <div className="flex items-center justify-between flex-wrap">
                            {AllData.map((items) => (
                                <div className="lg:w-[24%] w-[48%] pb-[20px] lg:pb-0">
                                    <div className=" lg:py-[80px] py-[50px] relative group overflow-hidden shadow">
                                        <Link to={`/products/${items.id}`}>
                                        <img src={items.thumbnail} alt="" />   
                                        </Link>
                                        <div className="flex items-center lg:gap-5 gap-2 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                            <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                            <FaRegHeart />
                                            <LuSearchX />
                                        </div>
                                        <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[100px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[12px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                            <div className="flex items-center lg:gap-3 gap-1 lg:py-[10px] py-1 lg:pl-[130px] pl-[58px]">
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#05E6B7] rounded"></h5>
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#F701A8] rounded"></h5>
                                                <h5 className="lg:h-[7px] h-[4px] lg:w-[25px] w-[10px] bg-[#00009D] rounded"></h5>
                                            </div>
                                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[white] text-center">Code - Y523201</p>
                                            <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[white] lg:mb-[20px] mb-[10px] text-center">${items.price}</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between lg:py-5 py-2">
                                        <p className="font-dm-sans font-semibold lg:text-[20px] text-[12px] text-[#262626]">{items.title}</p>
                                        <h3 className="font-dm-sans font-medium lg:text-[16px] text-[10px] text-[#767676]">${items.price}</h3>
                                    </div>
                                    <h3 className="font-dm-sans font-medium lg:text-[16px] text-[10px] text-[#767676]">Black</h3>
                                </div >
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default LeatestProducts