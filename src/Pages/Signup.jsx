import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const auth = getAuth();
    const db = getDatabase();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [passwordShow, setPasswordShow] = useState(false)
    let navigate = useNavigate()
    let [fristName, setFristName] = useState("")

    let handleFristName = (e) => {
        setFristName(e.target.value);

    }

    let handleEmail = (e) => {
        setEmail(e.target.value);

    }

    let handlePassword = (e) => {
        setPassword(e.target.value);

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {

            }).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: fristName ,
                })
            })
            .then(() => {
                toast("Go to Login Pages")
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            })
            .then(() => {
                set(ref(db, 'user/'), {
                    username: fristName,
                    email: email,
                });
            }).then(() => {
                console.log("done");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);

            });

    }


    return (
        <section>
            <div className="bg-[#F6F5FF] text-center lg:mb-[60px] mb-[20px]">
                <h3 className="font-dm-sans font-bold lg:text-[48px] text-[24px] text-[#151875] lg:pt-[100px] pt-[20px]">Sign up</h3>
                <h5 className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#151875] lg:pb-[100px] pb-[20px]">Home  &#62;	Sign up</h5>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <p className="font-dm-sans font-medium lg:text-[16px] text-[16px] text-[#767676] lg:pr-[900px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <form>
                    <div className="lg:pb-[70px] pb-[30px] lg:border-b-2 border-b-[1px]">
                        <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:py-[50px] py-[20px]">Your Personal Details</h3>
                        <div className="flex items-center justify-between">
                            <div className="w-[50%] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">First Name</h3>
                                <input onChange={handleFristName} type="text" placeholder="First Name" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Last Name</h3>
                                <input type="text" placeholder="Last Name" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-[50%] lg:border-b-2 border-b-[1px] lg:mt-[20px] mt-[10px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Email address</h3>
                                <input value={email} onChange={handleEmail} type="text" placeholder="Email address" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px] lg:mt-[20px] mt-[10px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Telephone</h3>
                                <input type="text" placeholder="Your phone number" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:py-[50px] py-[10px]">New Customer</h3>
                        <div className="flex items-center justify-between">
                            <div className="w-[50%] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[#151875] lg:pb-[10px]">Address 1</h3>
                                <input type="text" placeholder="Your Address" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Address 2</h3>
                                <input type="text" placeholder="Your Address" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-[50%] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px] lg:mt-[20px] mt-[10px]">City</h3>
                                <input type="text" placeholder="Your city" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px] lg:mt-[20px] mt-[10px]">Post Code</h3>
                                <input type="text" placeholder="Your Post Code" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between lg:pb-[70px] pb-[40px] lg:border-b-2 border-b-[1px] relative">
                            <div className="w-[50%] flex items-center justify-between lg:border-b-2 border-b-[1px]">
                                <div className="">
                                    <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px] lg:mt-[20px] mt-[10px]">Division</h3>
                                    <input type="text" placeholder="Your Division" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                                </div>
                                <div className="text-[30px] pt-[50px]">
                                    <div className="">
                                        <select className="absolute top-[40px] left-[550px] mt-[10px] font-dm-sans font-semibold text-[18px] text-[#151875] outline-none">
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Dhaka</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Barishal</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Khulna</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rangpur</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Mymesingh</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rajshahi</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Chattogram</option>
                                            <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Sylhet</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px] relative">
                                <div className=" flex items-center justify-between">
                                    <div className="">
                                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px] lg:mt-[20px] mt-[10px]">District</h3>
                                        <input type="text" placeholder="Your District" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                                    </div>
                                    <div className="text-[30px] pt-[50px]">
                                        <div className="">
                                            <select className="absolute top-[50px] left-[550px] font-dm-sans font-semibold text-[18px] text-[#151875] outline-none">
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Dhaka</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Dinajpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Bandarban</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Bagerhat</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Bhola</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Bogra</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Brahmanbaria</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Chandpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Chittagong</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Chuadanga</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Comilla</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Cox'S Bazar</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Faridput</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Feni</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Gaibandha</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Gazipur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Gopalganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Habiganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Jaipurhat</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Jamalpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Jessore</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Jalakathi</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Jhinaidah</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Khagrachari</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Khulna</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Kishoreganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Kurigram</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Kushtia</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Lakshmipur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Lalmonirhat</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Madaripur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Magura</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Manikganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Meharpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Moulavibazar</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Munshiganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Mymensingh</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Naogaon</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Narayanganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Narsingdi</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Natore</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Nawabganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Netrokona</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Nilphamari</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Noakhali</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Norail</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Pabna</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Panchagarh</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Patuakhali</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Pirojpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rajbari</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rajshahi</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rangamati</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Rangpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Satkhira</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Shariyatpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Sherpur</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Sirajganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Sunamganj</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Tangail</option>
                                                <option value="" className="font-sans font-semibold text-[18px] text-[#767676] hover:bg-[#262626] hover:text-[white] duration-300 ease-in-out py-1">Thakurgaon</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pb-[70px] pb-[40px] lg:border-b-2 border-b-[1px]">
                        <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[20px] text-[#151875] lg:py-[50px] py-[20px]">Your Password</h3>
                        <div className="flex items-center justify-between">
                            <div className="w-[50%] lg:border-b-2 border-b-[1px] relative">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Password</h3>
                                <input onChange={handlePassword} type={passwordShow ? "text" : "password"} placeholder="Your Password" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                                <div onClick={() => setPasswordShow(!passwordShow)} className=" absolute top-[70%] translate-y-[-70%] lg:right-[50px] right-0">
                                    {passwordShow == true ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <div className="w-[50%] mx-[20px] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[10px]">Conform Password</h3>
                                <input type="text" placeholder="Conform password" className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-[100px] mt-[40px]">
                        <div className="flex">
                            <label form=""></label>
                            <input type="checkbox" />
                            <h3 className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#151875] lg:mx-[30px] mx-[20px]">I have read and agree to the Privacy Policy</h3>
                        </div>
                        <div className="flex">
                            <h3 className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#151875] lg:py-[30px] py-[15px]">Subscribe Newsletter</h3>
                            <input type="checkbox" name="Yes" className="lg:mx-[30px] mx-[20px]" />
                            <h3 className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#151875] lg:py-[30px] py-[15px]">Yes</h3>
                            <input type="checkbox" name="No" className="lg:mx-[30px] mx-[20px]" />
                            <h3 className="font-dm-sans font-medium lg:text-[16px] text-[12px] text-[#151875] lg:py-[30px] py-[15px]">No</h3>
                        </div>
                    </div>
                </form>
                <div className="lg:pb-[100px] pb-[40px]">
                    <button onClick={handleSubmit} className="font-dm-sans font-semibold text-[18px] text-[white] bg-[#FB2E86] lg:px-[80px] px-[50px] py-3">Sign up</button>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Signup