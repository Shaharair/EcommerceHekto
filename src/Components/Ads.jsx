import React from 'react'
import SofaXX from "../assets/sofa.png"

const Ads = () => {
    return (
        <section className="bg-[#F1F0FF] lg:my-[100px] my-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-[50%] w-full">
                        <img src={SofaXX} alt="sofa" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Josefin Sans font-bold lg:text-[36px] text-[24px] text-[#151875] lg:pb-[30px] pb-[10px] lg:pr-[200px]">Unique Features Of leatest & Trending Poducts</h3>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] bg-[#F52B70] rounded-full"></h4>
                            </div>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">All frames constructed with hardwood solids and laminates</p>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 lg:py-4 py-2">
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] bg-[#2B2BF5] rounded-full"></h4>
                            </div>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[230px]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <div className="">
                                <h4 className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] bg-[#2BF5CC] rounded-full"></h4>
                            </div>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676]">Arms, backs and seats are structurally reinforced</p>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <div className="lg:py-[50px] py-[20px]">
                                <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[50px] px-[30px] lg:py-3 py-2 rounded bg-[#FB2E86]">Add To Cart</button>
                            </div>
                            <div className="lg:py-[50px] py-[20px]">
                                <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">B&B Italian Sofa </p>
                                <h5 className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676]">$32.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ads