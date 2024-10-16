import React from 'react'

const Faq = () => {
    return (
        <section>
            <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
                <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">FAQ</h3>
                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62;  FAQ</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:mt-[100px] mt-[30px] lg:mb-[100px] mb-[30px]">
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:pb-[30px] pb-2">Generel Information</h3>
                        <div className="">
                            <h4 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">Eu dictumst cum at sed euismood condimentum?</h4>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[30px] pb-3 lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className="">
                            <h4 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">Magna bibendum est fermentum eros.</h4>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[30px] pb-3 lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className="">
                            <h4 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">Odio muskana hak eris conseekin sceleton?</h4>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[30px] pb-3 lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className="">
                            <h4 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">Elit id blandit sabara boi velit gua mara?</h4>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[30px] pb-3 lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full bg-[#F8F8FD] lg:py-[60px] py-[20px]">
                        <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:pl-[50px] pl-[20px] lg:pb-[50px] pb-[20px]">Ask a Question</h3>
                        <form>
                            <div className="">
                                <div className="">
                                    <input type="text" placeholder="Your Name" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:w-[500px] w-[300px] lg:h-[50px] h-[40px] lg:pl-[10px] pl-1 lg:mx-[50px] mx-[20px] outline-none" />
                                </div>
                                <div className=" lg:my-[30px] my-[20px]">
                                    <input type="text" placeholder="Subject" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:w-[500px] w-[300px] lg:h-[50px] h-[40px] lg:pl-[10px] pl-1 lg:mx-[50px] mx-[20px] outline-none" />
                                </div>
                                <div className="">
                                   <input placeholder="Type Your Message" type="text" className="lg:pb-[100px] pb-[50px] pt-3 pl-3 lg:w-[500px] w-[300px] lg:mx-[50px] mx-[20px] outline-none" />
                                </div>
                                <div className="lg:pl-[50px] pl-[20px] lg:mt-[30px] mt-[20px]">
                                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] bg-[#FB2E86] lg:px-[60px] px-[40px] lg:py-3 py-2">Send Mail</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq