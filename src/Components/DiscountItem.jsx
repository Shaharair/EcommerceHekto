import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import SofaNN from "../assets/sofa1.png"


const DiscountItem = () => {
  return (
    <section>
      <div className="container px-3 lg:px-0 mx-auto">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] text-center lg:pb-[30px] pb-[0px] lg:mt-[50px] mt-[20px]">Discount Item</h3>
        <div className="">
          <ul className="flex items-center lg:gap-5 gap-3 justify-center">
            <li className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Wood Chair</li>
            <li className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Plastic Chair</li>
            <li className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875] hover:text-[#FB2E86] duration-300 ease-in-out">Sofa Colletion</li>
          </ul>
        </div>
        <div className="flex items-center justify-between flex-wrap lg:py-[50px] py-3">
          <div className="lg:w-[50%] w-full">
            <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[18px] text-[#151875] lg:pb-[10px]">20% Discount Of All Products</h3>
            <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#FB2E86] lg:pb-[10px]">Eams Sofa Compact</h5>
            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <div className=" lg:flex items-center gap-[50px]">
              <div className="w-[50%] flex items-center lg:gap-5 gap-3">
                <IoMdCheckmark className="text-[18px]" />
                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Material expose like metals</p>
              </div>
              <div className="w-[50%] flex items-center lg:gap-5 gap-3">
                <IoMdCheckmark className="text-[18px]" />
                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Clear lines and geomatric figures</p>
              </div>
            </div>
            <div className=" lg:flex items-center">
              <div className="w-[50%] flex items-center lg:gap-5 gap-3">
                <IoMdCheckmark className="text-[18px]" />
                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Simple neutral colours.</p>
              </div>
              <div className="w-[50%] flex items-center lg:gap-5 gap-3 lg:pl-[25px]">
                <IoMdCheckmark className="text-[18px]" />
                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">Material expose like metals</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full bg-[#FCECF1] rounded-full">
            <img src={SofaNN } alt="sofa1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountItem