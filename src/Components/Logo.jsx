import React from 'react'
import LogoQQ from "../assets/logo1.png"

const Logo = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:pl-[300px] lg:mt-[50px] mt-[30px]">
                    <img src={LogoQQ } alt="logo1" />
                </div>
            </div>
        </section>
    )
}

export default Logo