import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Order = () => {
  return (
    <section>
      <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Order Completed</h3>
        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; Order Completed</p>
      </div>
      <div className="container px-3 lg:px-0 mx-auto">
        <div className="lg:mt-[100px] mt-[30px]">
          <div className="w-[10%]">
            <div className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#F6F7FA] lg:text-[24px] text-[18px] pl-[18px] lg:mx-[730px] mx-[140px] pt-[18px] rounded-full">
              <FaCheck />
            </div>
          </div>
          <div className="">
            <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[24px] text-[#151875] text-center lg:pb-[50px] pb-[20px]">Your Order Is Completed! </h3>
            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pl-[500px] lg:pr-[500px] text-center">Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
            <div className="text-center mt-[30px]">
              <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] bg-[#FF1788] lg:px-[60px] px-[50px] py-3"><Link to="/demo">Continue Shopping</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order