import React from 'react'
import BagRR from "../assets/bag.png"
import { Link } from 'react-router-dom'
import BagEE from "../assets/bag1.png"
import BagVV from "../assets/bag2.png"
import BagBB from "../assets/bag3.png"
import BagKK from "../assets/bag4.png"

const Demo = () => {
  return (
    <section>
      <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Hekto Demo</h3>
        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; Hecto Demo</p>
      </div>
      <div className="container px-3 lg:px-0 mx-auto">
        <div className="">
          <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#1D3178] mt-[100px]">Hekto Demo</h3>
          <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#1D3178] lg:mt-[10px]">Cart/ Information/ Shipping/ Payment</p>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[60%] w-full bg-[#F8F8FD] lg:py-[50px] py-[30px] lg:mt-[50px] mt-[20px]">
            <form action="" method="">
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="">
                    <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#1D3178] lg:pl-[20px] pl-[10px]">Contact Information</h3>
                  </div>
                  <div className="lg:pr-[20px] pr-[10px]">
                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#C1C8E1]">Already have an account?<span>Login</span></p>
                  </div>
                </div>
                <div className="lg:mt-[50px] mt-[20px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                  <input type="text" id="Email or mobile phone number" placeholder="Email or mobile phone number" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#C1C8E1] lg:h-[60px] h-[50px] w-full outline-none bg-transparent" />
                </div>
                <div className="flex lg:pl-[20px] pl-[10px] lg:mt-[30px] mt-[10px]">
                  <label form=""></label>
                  <input type="checkbox" />
                  <h3 className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:mx-[20px] mx-[10px]">Keep me up to date on news and excluive offers</h3>
                </div>
              </div>
              <div className="lg:mt-[50px] mt-[20px]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#1D3178] lg:pl-[20px] pl-[10px]">Shipping address</h3>
                <div className="flex items-cemter justify-between">
                  <div className="lg:w-[50%] lg:mt-[30px] mt-[10px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                    <input type="text" placeholder="First name (optional)" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
                  </div>
                  <div className="lg:w-[50%] lg:mt-[30px] mt-[10px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                    <input type="text" placeholder="Last name" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
                  </div>
                </div>
              </div>
              <div className="lg:mt-[50px] mt-[20px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                <input type="text" id="Address" placeholder="Address" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
              </div>
              <div className="lg:mt-[50px] mt-[20px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                <input type="text" id="Appaetnentment,suit,e.t.c (optinal)" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
              </div>
              <div className="lg:mt-[50px] mt-[20px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                <input type="text" id="City" placeholder="City" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
              </div>
              <div className="flex items-center justify-between">
                <div className="lg:w-[50%] lg:mt-[30px] mt-[10px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                  <input type="text" id="Bangladesh" placeholder="Bangladesh" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
                </div>
                <div className="lg:w-[50%] lg:mt-[30px] mt-[10px] lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px]">
                  <input type="text" id="Postal Code" placeholder="Postal Code" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#8A91AB] lg:pb-[20px] pb-[10px] bg-transparent outline-none" />
                </div>
              </div>
              <div className="lg:mt-[100px] mt-[30px] lg:mx-[20px] mx-[10px]">
                <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[60px] px-[40px] py-3 bg-[#FB2E86]">Continue Shipping</button>
              </div>
            </form>
          </div>
          <div className="lg:w-[40%] w-full lg:mt-[50px] mt-[30px]">
            <div className="flex items-center justify-between lg:border-b-2 border-b-[1px] lg:mx-[20px] mx-[10px] lg:pb-[20px] pb-[10px]">
              <div className="lg:w-[30%] w-[35%]">
                <img  src={BagRR} alt="bag" />
              </div>
              <div className="lg:w-[50%] w-[40%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#262626]">Ut diam consequat</h3>
                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Color:Brown</h5>
                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Size:XL</h6>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-medium lg:text-[18px] text-[12px] text-[#262626]">$32.00</h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:border-b-2 border-b-[1px] lg:mx-[20px] mt-[20px] lg:mt-[10px] mx-[10px] lg:pb-[20px] pb-[10px]">
              <div className="lg:w-[30%] w-[35%]">
                <img  src={BagRR} alt="bag" />
              </div>
              <div className="lg:w-[50%] w-[40%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#262626]">Ut diam consequat</h3>
                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Color:Brown</h5>
                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Size:XL</h6>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-medium lg:text-[18px] text-[12px] text-[#262626]">$32.00</h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:border-b-2 border-b-[1px] lg:mx-[20px] mt-[20px] lg:mt-[10px] mx-[10px] lg:pb-[20px] pb-[10px]">
              <div className="lg:w-[30%] w-[35%]">
                <img  src={BagRR} alt="bag" />
              </div>
              <div className="lg:w-[50%] w-[40%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#262626]">Ut diam consequat</h3>
                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Color:Brown</h5>
                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Size:XL</h6>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-medium lg:text-[18px] text-[12px] text-[#262626]">$32.00</h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:border-b-2 border-b-[1px] lg:mx-[20px] mt-[20px] lg:mt-[10px] mx-[10px] lg:pb-[20px] pb-[10px]">
              <div className="lg:w-[30%] w-[35%]">
                <img  src={BagRR} alt="bag" />
              </div>
              <div className="lg:w-[50%] w-[40%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#262626]">Ut diam consequat</h3>
                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Color:Brown</h5>
                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Size:XL</h6>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-medium lg:text-[18px] text-[12px] text-[#262626]">$32.00</h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:border-b-2 border-b-[1px] lg:mx-[20px] mt-[20px] lg:mt-[10px] mx-[10px] lg:pb-[20px] pb-[10px]">
              <div className="lg:w-[30%] w-[35%]">
                <img  src={BagRR} alt="bag" />
              </div>
              <div className="lg:w-[50%] w-[40%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[#262626]">Ut diam consequat</h3>
                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Color:Brown</h5>
                <h6 className="font-Josefin Sans font-medium lg:text-[16px] text-[10px] text-[#A1A8C1]">Size:XL</h6>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-medium lg:text-[18px] text-[12px] text-[#262626]">$32.00</h3>
              </div>
            </div>
            <div className="lg:mt-[50px] mt-[30px] lg:mx-[20px] mx-[10px]">
            <div className="lg:border-2 border-[1px] bg-[#F4F4FC]">
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Subtotals:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">$$250.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Quantity:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">2</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Totals:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">$325.00</p>
                </div>
              </div>
              <div className="text-center lg:my-[50px] my-[20px]">
                <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[60px] px-[40px] lg:py-3 py-2 bg-[#19D16F]"><Link to="/checkout">Proceed To Checkout</Link></button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo