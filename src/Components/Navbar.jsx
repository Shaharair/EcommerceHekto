import React, { useContext, useRef, useState } from 'react'
import LogoIR from "../assets/logo.png"
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { apiData } from './ContextApi';
import ProductsFF from "../assets/products.png"

const Navbar = () => {
    let info = useContext(apiData);
    let [show, setShow] = useState(false);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [highlightIndex, setHighlightIndex] = useState(-1); // Track highlighted item
    let navigate = useNavigate();

    let handleInput = (e) => {
        setSearchInput(e.target.value);

        if (e.target.value === "") {
            setSearchFilter([]);
        } else {
            let searchshow = info.filter((items) => items.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchFilter(searchshow);
            setHighlightIndex(-1); // Reset the highlighted index when input changes
        }
    };

    let handlesingleSearch = (id) => {
        navigate(`/products/${id}`);
        setSearchFilter([]);
        setSearchInput("");
    };

    let handleKey = (e) => {
        if (e.key === "ArrowDown") {
            setHighlightIndex((prevIndex) => Math.min(prevIndex + 1, searchFilter.length - 1));
        } else if (e.key === "ArrowUp") {
            setHighlightIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === "Enter" && highlightIndex >= 0) {
            // Navigate to selected product when Enter is pressed
            handlesingleSearch(searchFilter[highlightIndex].id);
        }
    };

    return (
        <section className="bg-[#FFF6FB] lg:py-[20px] py-[10px] lg:border-2 border-[#FFCC2E] border-[1px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="lg:w-[20%] w-[20%]">
                        <img src={LogoIR} alt="logo" />
                    </div>
                    <div className="lg:w-[45%]">
                        <ul className={`lg:flex z-50 items-center gap-5 absolute top-0 left-0 lg:static duration-700 ease-in-out pt-[40px] lg:pt-0 ${show == true ? "bg-[#2F1AC4] top-[162px] w-[200px] h-[300px]" : "left-[-200px]"}`}>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/">Home</Link></li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/aboutus">About</Link></li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/shopproducts">Shop</Link></li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/blogproducts">Blog</Link> </li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/products">Products</Link></li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/faq">FAQ</Link></li>
                            <li className="font-Josefin Sans font-semibold text-[18px] lg:text-[#262626] text-[white] text-center lg:text-start hover:text-[#FB2E86] duration-300 ease-in-out py-1 lg:py-0"><Link to="/contactsus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-[35%] w-[50%]">
                        <div className="relative">
                            <input
                                value={searchInput}
                                onKeyDown={handleKey} // Listen for keydown events
                                onChange={handleInput}
                                type="text"
                                placeholder="Search"
                                className="w-full lg:h-[50px] h-[40px] font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] outline-none bg-[#767676] lg:pl-5 pl-3"
                            />
                            <div className="absolute top-[50%] translate-y-[-50%] right-0 bg-[#FB2E86] lg:h-[50px] h-[40px] lg:w-[60px] w-[40px] lg:pl-[20px] pl-[10px] lg:pt-[17px] pt-[14px]">
                                <FaSearch />
                            </div>
                        </div>
                        {searchFilter.length > 0 && (
                            <div className="w-[500px] h-[400px] overflow-y-scroll z-50 absolute top-[150px] right-[40px] border-2 border-[white] bg-[#F5F5F3]">
                                {searchFilter.map((items, index) => (
                                    <div
                                        key={items.id}
                                        onClick={() => handlesingleSearch(items.id)}
                                        className={`flex items-center justify-around py-5 cursor-pointer ${highlightIndex === index ? 'bg-[#FB2E86]' : ''}`}
                                    >
                                        <div>
                                            <img className="w-[100px] h-[100px]" src={items.thumbnail} alt="" />
                                        </div>
                                        <div>
                                            <h3 className="font-dm-sans font-semibold text-[18px] text-[#262626]">
                                                {items.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div onClick={() => setShow(!show)} className="lg:hidden text-[24px]">
                        {show === true ? <RxCross2 /> : <FaBars />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
