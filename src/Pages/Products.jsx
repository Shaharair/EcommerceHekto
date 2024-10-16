import React, { useContext, useEffect, useState } from 'react'
import { MdWindow } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import ProductsFF from "../assets/products.png"
import { Link } from 'react-router-dom';
import { apiData } from '../Components/ContextApi';
import { LuShoppingCart, LuSearchX } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import Post from '../Components/Pagination/Post';
import PaginationArea from '../Components/Pagination/PaginationArea';


const Products = () => {
    let data = useContext(apiData)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(9)
    let [multilist, setMultilist] = useState('')
    let [mobileview, setMobileView] = useState(true)

    let lastpage = currentPage * perPage
    let fristpage = lastpage - perPage

    let allData = data.slice(fristpage, lastpage);
    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
        pageNumber.push(i)
    }

    let Paginate = (pageNumber) => {
        setCurrentPage(pageNumber + 1)

    }

    let next = () => {
        if (currentPage < pageNumber.length) {
            setCurrentPage((state) => state + 1)
        }

    }

    let prev = () => {
        if (currentPage > 1) {
            setCurrentPage((state) => state - 1)
        }

    }

    let handlelist = () => {
        setMultilist("activelist")
    }

    let handleperPage = (e) => {
        setPerPage(e.target.value);

    }

    useEffect(() => {
        function navbarMenu() {
            if (window.innerWidth < 1024) {
                setMobileView(false)
            } else {
                setMobileView(true)
            }
        }
        navbarMenu()
        window.addEventListener("resize", navbarMenu)
    }, [])
    
    console.log(mobileview);


    return (
        <section>
            <div className="bg-[#F6F5FF] text-center lg:py-[100px] py-[40px]">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Shop Products</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; Products</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <form>
                    <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[20px] lg:pb-[60px] pb-[20px]">
                        <div className="lg:w-[30%] w-full pb-[20px] lg:pb-0">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875]">Ecommerce Acceories & Fashion item </h3>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="lg:w-[70%] w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-between">
                                    <div className="lg:w-[50%] w-[50%] flex items-center gap-6">
                                        <div onClick={() => setMultilist("")} className={`font-dm-sans font-bold lg:text-[24px] text-[16px] text-[#767676] border-2 px-[10px] py-3  ${multilist == "activelist" ? "" : "bg-black text-white"}`}>
                                            <MdWindow />
                                        </div>
                                        <div onClick={handlelist} className={`font-dm-sans font-bold lg:text-[24px] text-[16px] text-[#767676] border-2 px-[10px] py-3  ${multilist == "" ? "" : "bg-black text-white"}`}>
                                            <Link to="/shopproducts"><FaListUl /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div onChange={handleperPage} className="lg:w-[25%] w-[45%] flex items-center lg:gap-6 gap-2">
                                    <div className="">
                                        <h3 className="font-dm-sans font-medium lg:text-[18px] text-[14px] text-[#767676]">Per Page:</h3>
                                    </div>
                                    <div className="">
                                        <select className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#262626] border-2 lg:px-[30px] px-[20px] lg:py-3 py-2 outline-none">
                                            <option value="9" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">9</option>
                                            <option value="18" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">18</option>
                                            <option value="27" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">27</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:w-[25%] w-[5%] flex items-center gap-6 opacity-0 lg:opacity-100">
                                    <div className="">
                                        <h3 className="font-dm-sans font-medium text-[18px] text-[#767676]">Sort by:</h3>
                                    </div>
                                    <div className="">
                                        <select className="border-2 px-[30px] font-dm-sans font-semibold text-[18px] text-[#262626] lg:py-3 py-1 outline-none">
                                            <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[#767676]">Best Match</option>
                                            <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[#767676]">Best Match</option>
                                            <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[#767676]">Best Match</option>
                                            <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[#767676]">Best Match</option>
                                            <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[#767676]">Best Match</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex items-center justify-between flex-wrap">
                    <Post allData={allData} multilist={multilist} />
                </div>
                <div className="text-end">
                    <PaginationArea pageNumber={pageNumber} Paginate={Paginate} currentPage={currentPage} next={next} prev={prev} mobileview={mobileview} />
                </div>
            </div>
        </section>
    )
}

export default Products