import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import BannerEE from "../assets/banner1.png"
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from './Slice/ReduxSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {

    let data = useSelector((state) => state.counter.CartItem)


    let dispatch = useDispatch()
    let [userShow, setUserShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let navigate = useNavigate()

    let userref = useRef()
    let cartref = useRef()
    let usershow = useRef()

    useEffect(() => (
        document.addEventListener("click", (e) => {
            if (userref.current.contains(e.target) == true) {
                setUserShow(!userShow)
            } else {
                setUserShow(false)
            }
            if (cartref.current.contains(e.target) == true) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)
            }
            if(usershow.current.contains(e.target)){
                setCartShow(true)
            }

        })
    ), [userShow, cartShow])

    let handleDelete = (index) => {
        dispatch(removeProducts(index))
    }

    let handleViewCart = () =>{
        toast("go to cart pages")
        setTimeout(() => {
            navigate("/cart")
        }, 2000);
        setCartShow(false)
    }

    let handleCheckout = () =>{
        toast("go to checkout pages")
        setTimeout(() => {
            navigate("/checkout")
        }, 2000);
    }


    return (
        <section className="bg-[#7E33E0] py-[20px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center gap-[76px]">
                        <div className="flex items-center lg:gap-5 gap-3">
                            <MdOutlineEmail className="lg:text-[24px] text-[16px] text-[white]" />
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white]">shahariarmd806@gmail.com</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <LuPhoneCall className="lg:text-[24px] text-[16px] text-[white]" />
                            <h2 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white]">01981028012</h2>
                        </div>
                    </div>
                    <div className=" flex items-center lg:gap-[50px] gap-2">
                        <div className="">
                            <select className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white] outline-none bg-[#7E33E0]">
                                <option value="" className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white]">English</option>
                                <option value="" className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white]">Bangla</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="">
                                <select className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white] outline-none bg-[#7E33E0]">
                                    <option value="" className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white]">USD</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-2 gap-1">
                                <h4 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white]">Account</h4>
                                <div className=" relative">
                                    <div ref={userref} className="">
                                        <FaRegUser className="lg:text-[24px] text-[16px] text-[white]" />
                                    </div>
                                    {userShow &&
                                        <div className="">
                                            <ul className="absolute z-50 top-[60px] left-[-100px] w-[200px] border-2 border-[white]">
                                                <li className="font-dm-sans font-semibold text-[18px] text-[#262626] text-center py-2 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out"><Link to="/myaccount">My Account</Link></li>
                                                <li className="font-dm-sans font-semibold text-[18px] text-[#262626] text-center py-2 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out"><Link to="/login">Log in</Link></li>
                                                <li className="font-dm-sans font-semibold text-[18px] text-[#262626] text-center py-2 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out"><Link to="/signup">Sign Up</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center lg:gap-2 gap-1">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[white]">Wishlist</h3>
                                <FaRegHeart className="lg:text-[24px] text-[16px] text-[white]" />
                            </div>
                        </div>
                        <div className=" relative">
                            <div ref={cartref} className="lg:text-[24px] text-[16px] text-[white]">
                                <div className="relative lg:pr-[30px] pr-[10px]">
                                    <FiShoppingCart />
                                    {data.length > 0 && (
                                        <div className="absolute content-[''] lg:h-[35px] h-[28px] lg:w-[35px] w-[40px]  border-4 border-[white] bg-[#FB2E86] lg:top-[-22px] top-[-29px] lg:left-[15px] left-[-10px] rounded-full text-center font-Josefin Sans font-semibold lg:text-[18px] text-[14px]">
                                            {data.length}
                                        </div>
                                    )}
                                </div>
                                {/* {data.length} */}
                            </div>
                            <div ref={usershow} className="">
                                {cartShow &&
                                    <div className="w-[350px] z-50 absolute top-[60px] right-0 border-2 border-[white] bg-[#F5F5F3]">
                                        {data.map((items, index) => (
                                            <div className="">
                                                <div className="flex items-center justify-around py-5">
                                                    <div className="">
                                                        <img className="w-[100px] h-[100px]" src={items.thumbnail} alt="" />
                                                    </div>
                                                    <div className="">
                                                        <h3 className="font-dm-sans font-semibold text-[18px] text-[#262626]">{items.title}</h3>
                                                        <h4 className="font-dm-sans font-semibold text-[18px] text-[#262626]">${items.price}</h4>
                                                    </div>
                                                    <div onClick={() => handleDelete(index)} className="text-[18px]">
                                                        <RxCross2 />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between py-[30px]">
                                                    <div onClick={handleViewCart} className="">
                                                        <a className="font-dm-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] px-[30px] mx-4 py-3 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">View Cart</a>
                                                    </div>
                                                    <div onClick={handleCheckout} className="">
                                                        <a className="font-dm-sans font-semibold text-[18px] text-[#262626] border-2 border-[#262626] px-[30px] py-3 hover:bg-[#262626] hover:text-[white] duration-500 ease-in-out">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Header