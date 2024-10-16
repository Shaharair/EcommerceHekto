import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash,FaEye } from "react-icons/fa";



const Login = () => {

    const auth = getAuth();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let [passwordshow, setPasswordShow] = useState("")

    let handlesubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log("user", user);
                
            }).then(() => {
                toast("Got to My Account Pages")
                setTimeout(() => {
                    navigate("/myaccount")
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                
                
            });
    }

    let handleEmail = (e) =>{
        setEmail(e.target.value);
        
    }

    let handlepassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <section>
            <div className="bg-[#F6F5FF] text-center lg:mb-[60px] mb-[20px]">
                <h3 className="font-dm-sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:pt-[100px] pt-[20px]">Login</h3>
                <h4 className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#151875] lg:pb-[100px] pb-[20px]">Home  &#62;	 Login</h4>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <form>
                    <div className="w-full lg:text-center lg:pl-[500px]">
                        <div className="lg:w-[70%] w-full shadow rounded">
                            <h2 className="font-Josefin Sans font-semibold lg:text-[30px] text-[22px] text-[#262626] lg:py-[20px] py-[10px] lg:pr-[190px]">Sing in to your account</h2>
                            <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pr-[395px] lg:pb-[20px] pb-[10px]">Your Email</h3>
                                <input onChange={handleEmail} type="text" placeholder="Enter Your Email" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pl-4 pl-2 outline-none lg:w-[500px] w-[330px] lg:h-[60px] h-[50px] border-2 border-[#262626]" />
                            </div>
                            <div className=" relative">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pr-[350px] lg:py-[20px] py-[10px]">Your Password</h3>
                                <input onChange={handlepassword} type={passwordshow == true ? "text" : "password"} placeholder="Enter Your Password" className="font-Josefin Sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pl-4 pl-2 outline-none lg:w-[500px] w-[330px] lg:h-[60px] h-[50px] border-2 border-[#262626]" />
                                <div onClick={() => setPasswordShow(!passwordshow)} className=" absolute lg:top-[82%] top-[65%] lg:translate-y-[-82%] translate-x-[-65%] lg:right-[150px] right-[30px]">
                                    {passwordshow == true ? <FaEye/> : <FaEyeSlash/>}
                                </div>
                            </div>
                            <div className=" lg:pt-[50px] pt-[20px]">
                                <button onClick={handlesubmit} className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] lg:w-[500px] w-[330px] lg:h-[60px] h-[50px] bg-[rgb(255,0,0)]">Log in</button>
                            </div>
                            <div className="text-end">
                                <p className="font-Josefin Sans font-semibold lg:text-[16px] text-[14px] text-[blue] lg:pt-[20px] pt-[10px] lg:pr-[110px] pr-[10px] pb-[100px]">Forgotten your password</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Login