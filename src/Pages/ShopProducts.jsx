import React, { useContext, useEffect, useState } from 'react'
import ShopFF from "../assets/shop.png"
import { MdWindow } from "react-icons/md";
import { FaListUl, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart, LuSearchX } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { apiData } from '../Components/ContextApi';




const ShopProducts = () => {
  let arr = ["New Seller", "sajib", "Offer"]

  let data = useContext(apiData)


  let [brandShow, setBrandShow] = useState(false)
  let [discountShow, setDiscountShow] = useState(false)
  let [catagoriesShow, setCatagoriesShow] = useState(false)
  let [priceShow, setPriceShow] = useState(false)
  let [colorShow, setColorShow] = useState(false)
  let [catagory, setCatagory] = useState([])
  let [categoryFilter, setCategoryFilter] = useState([])
  let [brand, setBrand] = useState([])
  let [brandsFilter, setBrandsFilter] = useState([])
  let [discountsFilter, setDiscountsFilter] = useState([])
  let [lowdis, setLowDis] = useState("")
  let [highdis, setHighDis] = useState("")
  let [highPrice, setHighPrice] = useState("")
  let [lowPrice, setLowPricee] = useState("")
  let [filterPrice, setFilterPrice] = useState([])
  let [multilist, setMultilist] = useState('')

  useEffect(() => {
    setCatagory([...new Set(data.map((items) => items.category))])

    setBrand([...new Set(data.map((items) => items.brand))])

  }, [data])



  let handleSubcate = (citems) => {
    let categoryFilters = data.filter((items) => items.category == citems)
    setCategoryFilter(categoryFilters)

  }

  let handlebrand = (bitems) => {
    let brandFilter = data.filter((items) => items.brand == bitems)
    setBrandsFilter(brandFilter)
  }

  let handlediscount = (ditem) => {
    setLowDis(ditem.low)
    setHighDis(ditem.high)
    let discountFilter = data.filter((items) => items.discountPercentage > ditem.low && items.discountPercentage < ditem.high)
    setDiscountsFilter(discountFilter)
  }

  let handleprice = (value) => {
    setLowPricee(value.low)
    setHighPrice(value.high)
    let priceFilter = data.filter((items) => items.price > value.low && items.price < value.high)
    setFilterPrice(priceFilter)


  }

  let handlelist = () => {
    setMultilist("activelist")
  }



  return (
    <section>
      <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Shop List</h3>
        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home &#62;	Shop List </p>
      </div>
      <div className="container px-3 lg:px-0 mx-auto">
        <div className="lg:flex justify-between lg:py-[100px] py-[30px]">
          <div className="lg:w-[30%] w-full">
            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Ecommerce Acceories & Fashion item </h3>
            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[60px] pb-[20px]">About 9,620 results (0.62 seconds)</p>
            <form>
              <div className="">
                <div className="">
                  <div onClick={() => setBrandShow(!brandShow)} className="lg:pb-[20px] pb-[10px]">
                    <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Product Brand</u>
                  </div>
                  {brandShow &&
                    <div className="">
                      {brand.map((items) => (
                        <div onClick={() => handlebrand(items)} className="flex">
                          <label form=""></label>
                          <input type="checkbox" />
                          <h3 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">{items}</h3>
                        </div>
                      ))}
                    </div>
                  }
                </div>
                <div className="">
                  <div onClick={() => setDiscountShow(!discountShow)} className="lg:py-[20px] py-[10px]">
                    <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Discount Offer</u>
                  </div>
                  {discountShow &&
                    <div className="">
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handlediscount({ low: 0, high: 20 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">0%-20%</h3>
                      </div>
                      <div className="flex py-2">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handlediscount({ low: 20, high: 40 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">20%-40%</h3>
                      </div>
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handlediscount({ low: 40, high: 60 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">40%-60%</h3>
                      </div>
                      <div className="flex py-2">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handlediscount({ low: 60, high: 80 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">60%-80%</h3>
                      </div>
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handlediscount({ low: 80, high: 100 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">80%-100%</h3>
                      </div>
                    </div>
                  }
                </div>
                <div className="">
                  <div onClick={() => setCatagoriesShow(!catagoriesShow)} className="lg:py-[20px] py-[10px]">
                    <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Categories</u>
                  </div>
                  {catagoriesShow &&
                    <div className="">
                      <div className="">
                        {catagory.map((items) => (
                          <div onClick={() => handleSubcate(items)} className="flex">
                            <label form=""></label>
                            <input type="checkbox" />
                            <h3 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px] capitalize">{items}</h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                </div>
                <div className="">
                  <div onClick={() => setPriceShow(!priceShow)} className="lg:py-[20px] py-[10px]">
                    <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Price Filter</u>
                  </div>
                  {priceShow &&
                    <div className="">
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 0, high: 150 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$0.00 - $150.00</h3>
                      </div>
                      <div className="flex py-2">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 150, high: 350 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$150.00 - $350.00</h3>
                      </div>
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 350, high: 650 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$350.00 - $650.00</h3>
                      </div>
                      <div className="flex py-2">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 650, high: 1550 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$650.00 - $1550.00</h3>
                      </div>
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 1550, high: 3550 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$1550.00 - $3550.00</h3>
                      </div>
                      <div className="flex py-2">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 3550, high: 10550 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$3550.00 - $1050.00</h3>
                      </div>
                      <div className="flex">
                        <label form=""></label>
                        <input type="checkbox" />
                        <h3 onClick={() => handleprice({ low: 10550, high: 30550 })} className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2] lg:mx-[20px] mx-[10px]">$10550.00 - $30550.00</h3>
                      </div>
                    </div>

                  }
                </div>
                <div className="">
                  <div onClick={() => setColorShow(!colorShow)} className="lg:py-[20px] py-[10px]">
                    <u className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875]">Filter By Color</u>
                  </div>
                  {colorShow &&
                    <div className="">
                      <div className="flex items-center lg:gap-[30px] gap-[15px]">
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Blue</h4>
                        </div>
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#FF9437]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Orange</h4>
                        </div>
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#FFBF95]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Brown</h4>
                        </div>
                      </div>
                      <div className="flex items-center lg:gap-[30px] gap-[15px] lg:mt-[30px] mt-[15px]">
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#33D221]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Green</h4>
                        </div>
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E248FF]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Purple</h4>
                        </div>
                        <div className="flex items-center lg:gap-3 gap-2">
                          <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#26CBFF]"></p>
                          <h4 className="font-Josefin Sans font-semibold lg:text-[20px] text-[14px] text-[#7E81A2]">Sky</h4>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </form>
          </div>
          <div className="lg:w-[70%] w-full mt-[20px] lg:mt-0">
            <div className="flex items-center justify-between lg:pb-[70px] pb-[30px]">
              <div className="lg:w-[50%] flex items-center lg:gap-6 gap-2">
                <div className={`font-dm-sans font-bold lg:text-[24px] text-[14px] text-[#767676] border-2 lg:px-[10px] px-1 lg:py-3 py-1`}>
                  <Link to="/products"><MdWindow /></Link>
                </div>
                <div onClick={handlelist} className={`font-dm-sans font-bold lg:text-[24px] text-[16px] text-[#767676] border-2 lg:px-[10px] px-1 lg:py-3 py-1 ${multilist == "activelist" ? "" : "bg-black text-white"}`}>
                  <FaListUl />
                </div>
              </div>
              <div className="lg:w-[25%] flex items-center lg:gap-6 gap-2">
                <div className="">
                  <h3 className="font-dm-sans font-medium lg:text-[18px] text-[8px] text-[#767676]">Per Page:</h3>
                </div>
                <div className="">
                  <select className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#262626] border-2 lg:px-[30px] px-2 lg:py-3 py-1 outline-none">
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">1</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">2</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">3</option>
                  </select>
                </div>
              </div>
              <div className="lg:w-[25%]  flex items-center lg:gap-6 gap-2">
                <div className="">
                  <h3 className="font-dm-sans font-medium lg:text-[18px] text-[10px] text-[#767676]">Sort by:</h3>
                </div>
                <div className="">
                  <select className="border-2 lg:px-[30px] font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#262626] lg:py-3 py-1 outline-none">
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">Best Match</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">Best Match</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">Best Match</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">Best Match</option>
                    <option value="" className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#767676]">Best Match</option>
                  </select>
                </div>
              </div>
            </div>

            {brandsFilter.length > 0 ?
              <div className="">
                {brandsFilter.map((items) => (
                  <Link to="/cart">
                    <div className="">
                      <div className="lg:flex items-center lg:gap-[50px] gap-[20px]">
                        <div className="lg:w-[40%] w-full lg:mb-[50px] mb-[20px]">
                          <div className=" relative group overflow-hidden shadow">
                            <img src={items.thumbnail} alt="" />
                            <div className="flex items-center lg:gap-5 gap-2 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                              <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                              <FaRegHeart />
                              <LuSearchX />
                            </div>
                            <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[120px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                              <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                              <div className="flex items-center lg:gap-3 gap-2 lg:py-[10px] py-[6px] pl-[130px]">
                                <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#05E6B7] rounded"></h5>
                                <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#F701A8] rounded"></h5>
                                <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#00009D] rounded"></h5>
                              </div>
                              <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] text-center">Code - Y523201</p>
                              <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] lg:mb-[20px] mb-[10px] text-center">${items.price}</h4>
                            </div>
                          </div>
                        </div >
                        <div className="lg:w-[60%] w-full mb-[30px] lg:mb-0">
                          <div className="flex items-center lg:gap-[30px] gap-[20px]">
                            <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">{items.title}</h3>
                            <div className="flex items-center lg:gap-3 gap-2">
                              <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#DE9034]"></p>
                              <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E60584]"></p>
                              <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                            </div>
                          </div>
                          <div className="flex items-center lg:gap-[30px] gap-[10px] lg:pb-[10px]">
                            <div className="">
                              <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">${items.price}</h3>
                            </div>
                            <div className="">
                              <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#E60584]">{items.discountPercentage}%</h4>
                            </div>
                          </div>
                          <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                          <div className="flex items-center lg:gap-5 gap-3 mt-[10px] lg:mt-0">
                            <Link to={`/products/${items.id}`}>
                              <LuShoppingCart />
                            </Link>
                            <FaRegHeart />
                            <LuSearchX />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              :
              discountsFilter.length > 0 ?
                <div className="">
                  {discountsFilter.map((items) => (
                    <Link to="/cart">
                      <div className="">
                        <div className="lg:flex items-center lg:gap-[50px] gap-[20px]">
                          <div className="lg:w-[40%] w-full lg:mb-[50px] mb-[20px]">
                            <div className=" relative group overflow-hidden shadow">
                              <img src={items.thumbnail} alt="" />
                              <div className="flex items-center lg:gap-5 gap-3 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                <FaRegHeart />
                                <LuSearchX />
                              </div>
                              <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[120px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                <div className="flex items-center lg:gap-3 gap-2 lg:py-[10px] py-[6px] pl-[130px]">
                                  <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#05E6B7] rounded"></h5>
                                  <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#F701A8] rounded"></h5>
                                  <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#00009D] rounded"></h5>
                                </div>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] text-center">Code - Y523201</p>
                                <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] mb-[20px] text-center">${items.price}</h4>
                              </div>
                            </div>
                          </div >
                          <div className="lg:w-[60%] w-full mb-[30px] lg:mb-0">
                            <div className="flex items-center lg:gap-[30px] gap-[20px]">
                              <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">{items.title}</h3>
                              <div className="flex items-center lg:gap-3 gap-2">
                                <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#DE9034]"></p>
                                <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E60584]"></p>
                                <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                              </div>
                            </div>
                            <div className="flex items-center lg:gap-[30px] gap-[10px] lg:pb-[10px]">
                              <div className="">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">${items.price}</h3>
                              </div>
                              <div className="">
                                <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#E60584]">{items.discountPercentage}%</h4>
                              </div>
                            </div>
                            <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className="flex items-center lg:gap-5 gap-3 mt-[10px] lg:mt-0">
                              <Link to={`/products/${items.id}`}>
                                <LuShoppingCart />
                              </Link>
                              <FaRegHeart />
                              <LuSearchX />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                :
                filterPrice.length > 0 ?
                  <div className="">
                    {filterPrice.map((items) => (
                      <Link to="/cart">
                        <div className="">
                          <div className="lg:flex items-center lg:gap-[50px] gap-[20px]">
                            <div className="lg:w-[40%] w-full lg:mb-[50px] mb-[20px]">
                              <div className=" relative group overflow-hidden shadow">
                                <img src={items.thumbnail} alt="" />
                                <div className="flex items-center lg:gap-5 gap-3 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                  <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                  <FaRegHeart />
                                  <LuSearchX />
                                </div>
                                <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[120px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                  <div className="flex items-center gap-3 py-[10px] pl-[130px]">
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#05E6B7] rounded"></h5>
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#F701A8] rounded"></h5>
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#00009D] rounded"></h5>
                                  </div>
                                  <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] text-center">Code - Y523201</p>
                                  <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] lg:mb-[20px] mb-[10px] text-center">${items.price}</h4>
                                </div>
                              </div>
                            </div >
                            <div className="lg:w-[60%] w-full mb-[30px] lg:mb-0">
                              <div className="flex items-center lg:gap-[30px] gap-[20px]">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">{items.title}</h3>
                                <div className="flex items-center lg:gap-3 gap-2">
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#DE9034]"></p>
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E60584]"></p>
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                                </div>
                              </div>
                              <div className="flex items-center lg:gap-[30px] gap-[10px] lg:pb-[10px]">
                                <div className="">
                                  <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">${items.price}</h3>
                                </div>
                                <div className="">
                                  <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#E60584]">{items.discountPercentage}%</h4>
                                </div>
                              </div>
                              <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                              <div className="flex items-center lg:gap-5 gap-3 mt-[10px] lg:mt-0">
                                <Link to={`/products/${items.id}`}>
                                  <LuShoppingCart />
                                </Link>
                                <FaRegHeart />
                                <LuSearchX />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  :
                  categoryFilter.length > 0 ?
                    <div className="">
                      {categoryFilter.map((items) => (
                        <Link to="/cart">
                          <div className="">
                            <div className="lg:flex items-center lg:gap-[50px] gap-[20px]">
                              <div className="lg:w-[40%] w-full lg:mb-[50px] mb-[20px]">
                                <div className=" relative group overflow-hidden shadow">
                                  <img src={items.thumbnail} alt="" />
                                  <div className="flex items-center lg:gap-5 gap-3 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                    <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                    <FaRegHeart />
                                    <LuSearchX />
                                  </div>
                                  <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[120px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                    <div className="flex items-center lg:gap-3 gap-2 lg:py-[10px] py-[6px] pl-[130px]">
                                      <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#05E6B7] rounded"></h5>
                                      <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#F701A8] rounded"></h5>
                                      <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#00009D] rounded"></h5>
                                    </div>
                                    <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] text-center">Code - Y523201</p>
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] mb-[20px] text-center">${items.price}</h4>
                                  </div>
                                </div>
                              </div >
                              <div className="lg:w-[60%] w-full mb-[30px] lg:mb-0">
                                <div className="flex items-center lg:gap-[30px] gap-[10px]">
                                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">{items.title}</h3>
                                  <div className="flex items-center lg:gap-3 gap-2">
                                    <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#DE9034]"></p>
                                    <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E60584]"></p>
                                    <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                                  </div>
                                </div>
                                <div className="flex items-center lg:gap-[30px] gap-[10px] lg:pb-[20px]">
                                  <div className="">
                                    <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">${items.price}</h3>
                                  </div>
                                  <div className="">
                                    <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#E60584]">{items.discountPercentage}%</h4>
                                  </div>
                                </div>
                                <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <div className="flex items-center lg:gap-5 gap-3 mt-[10px] lg:mt-0">
                                  <Link to={`/products/${items.id}`}>
                                    <LuShoppingCart />
                                  </Link>
                                  <FaRegHeart />
                                  <LuSearchX />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    :
                    data.map((items) => (
                      <Link to="/cart">
                        <div className="">
                          <div className="lg:flex items-center lg:gap-[50px] gap-[20px]">
                            <div className="lg:w-[40%] w-full lg:mb-[50px] mb-[20px]">
                              <div className=" relative group overflow-hidden shadow">
                                <img src={items.thumbnail} alt="" />
                                <div className="flex items-center lg:gap-5 gap-3 lg:pt-[30px] pt-[20px] top-0 lg:pl-[20px] pl-[10px] w-full left-[-120px] absolute group-hover:left-0 duration-300 ease-in-out">
                                  <Link to={`/products/${items.id}`}><LuShoppingCart /></Link>
                                  <FaRegHeart />
                                  <LuSearchX />
                                </div>
                                <div className="bg-[#2F1AC4] absolute left-0 lg:h-[150px] h-[120px] w-full bottom-[-150px] group-hover:bottom-0 duration-300 ease-in-out">
                                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-center text-[white] lg:pt-[20px] pt-[10px]">{items.title}</h3>
                                  <div className="flex items-center lg:gap-3 gap-2 lg:py-[10px] py-[6px] pl-[130px]">
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#05E6B7] rounded"></h5>
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#F701A8] rounded"></h5>
                                    <h5 className="lg:h-[7px] h-[5px] lg:w-[25px] w-[15px] bg-[#00009D] rounded"></h5>
                                  </div>
                                  <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[white] text-center">Code - Y523201</p>
                                  <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[white] mb-[20px] text-center">${items.price}</h4>
                                </div>
                              </div>
                            </div >
                            <div className="lg:w-[60%] w-full mb-[30px] lg:mb-0">
                              <div className="flex items-center lg:gap-[30px] gap-[20px]">
                                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[18px] text-[#151875] lg:pb-[10px]">{items.title}</h3>
                                <div className="flex items-center lg:gap-3 gap-2">
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#DE9034]"></p>
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#E60584]"></p>
                                  <p className="lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] rounded-full bg-[#5E37FF]"></p>
                                </div>
                              </div>
                              <div className="flex items-center lg:gap-[30px] gap-[10px] lg:pb-[10px]">
                                <div className="">
                                  <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#151875]">${items.price}</h3>
                                </div>
                                <div className="">
                                  <h4 className="font-Josefin Sans font-semibold lg:text-[18px] text-[16px] text-[#E60584]">{items.discountPercentage}%</h4>
                                </div>
                              </div>
                              <p className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                              <div className="flex items-center lg:gap-5 gap-3 mt-[10px] lg:mt-0">
                                <Link to={`/products/${items.id}`}>
                                  <LuShoppingCart />
                                </Link>
                                <FaRegHeart />
                                <LuSearchX />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopProducts