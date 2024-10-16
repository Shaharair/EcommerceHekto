import React from 'react'
import ErrorRR from "../assets/error.png"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
        <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
            <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">404 Not Found</h3>
            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62; 404 Not Found</p>
        </div>
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:pl-[250px] pl-[80px]">
                <img src={ErrorRR} alt="error" />
            </div>
            <div className="text-center">
                <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[80px] px-[50px] lg:py-3 py-2 bg-[#FB2E86]"><Link to="/">Back To Home</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Error