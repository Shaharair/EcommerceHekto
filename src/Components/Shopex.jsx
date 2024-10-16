import React from 'react'
import FreeRR from "../assets/free.png"
import CashEE from "../assets/cash.png"
import QualityCC from "../assets/quaility.png"
import SupportWW from "../assets/support.png"

const Shopex = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto">
            <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875] text-center lg:mt-[50px] mt-[20px] lg:pb-[100px] pb-[40px]">What Shopex Offer!</h3>
            <div className="flex items-center justify-between flex-wrap">
                <div className="lg:w-[24%] w-[48%] bg-[whitesmoke] lg:py-[50px] py-[20px] text-center">
                    <img className="lg:pl-[160px] pl-[50px] lg:pb-[20px] pb-[10px]" src={FreeRR} alt="free" />
                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">24/7 Support</h3>
                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] py-[10px] lg:pr-[110px] lg:pl-[90px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="lg:w-[24%] w-[48%] bg-[whitesmoke] lg:py-[50px] py-[20px] text-center">
                    <img className="lg:pl-[160px] pl-[50px] lg:pb-[20px] pb-[10px]"  src={CashEE} alt="cash" />
                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">24/7 Support</h3>
                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] py-[10px] lg:pr-[110px] lg:pl-[90px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="lg:w-[24%] w-[48%] bg-[whitesmoke] lg:py-[50px] py-[20px] text-center my-3">
                    <img className="lg:pl-[160px] pl-[50px] lg:pb-[20px] pb-[10px]"  src={QualityCC} alt="quaility" />
                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">24/7 Support</h3>
                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] py-[10px] lg:pr-[110px] lg:pl-[90px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className="lg:w-[24%] w-[48%] bg-[whitesmoke] lg:py-[50px] py-[20px] text-center">
                    <img className="lg:pl-[160px] pl-[50px] lg:pb-[20px] pb-[10px]"  src={SupportWW} alt="support" />
                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">24/7 Support</h3>
                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] py-[10px] lg:pr-[110px] lg:pl-[90px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopex