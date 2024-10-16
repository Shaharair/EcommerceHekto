import React from 'react'
import { RxCross2 } from "react-icons/rx";
import ProductsEE from "../assets/products1.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleardata, decrement, increment, removeProducts } from '../Components/Slice/ReduxSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let data = useSelector((state) => state.counter.CartItem)

  let handleIncrement = (index) => {
    dispatch(increment(index))

  }

  let handleDecrement = (index) => {
    dispatch(decrement(index))

  }

  let handleRemove = (index) => {
    dispatch(removeProducts(index))

  }

  let handleClear = (index) => {
    dispatch(cleardata(index))

  }

  const { totalPrice, totalQuantity } = data.reduce((acc, items) => {
    acc.totalPrice += items.price * items.qun
    acc.totalQuantity += items.qun

    return acc

  }, { totalPrice: 0, totalQuantity: 0 })

  let handleCheckout = () => {
    toast("Go To Checkout Pages");
    setTimeout(() => {
      navigate("/checkout")
    }, 2000)
  }


  return (
    <section>
      <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
        <h3 className="font-Josefin Sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Shopping Curt</h3>
        <p className="font-Josefin Sans font-medium lg:text-[16px] text-[16px] text-[#151875]">Home &#62; shopping curt</p>
      </div>
      <div className="container px-3 lg:px-0 mx-auto">
        <div className="lg:flex justify-between mt-[100px]">
          <div className="lg:w-[70%] w-full">
            <div className="flex items-center justify-between">
              <div className="lg:w-[40%] w-[45%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[50px] pb-[20px]">Product:</h3>
              </div>
              <div className="lg:w-[20%] w-[15%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[50px] pb-[20px]">Price:</h3>
              </div>
              <div className="lg:w-[20%] w-[25%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[50px] pb-[20px]">Quantity:</h3>
              </div>
              <div className="lg:w-[20%] w-[15%]">
                <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[16px] text-[#151875] lg:pb-[50px] pb-[20px]">Total:</h3>
              </div>
            </div>
            {data.map((items, index) => (
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="lg:w-[40%] w-[45%] flex items-center lg:gap-[50px] gap-1">
                    <div onClick={() => handleRemove(index)} className="">
                      <RxCross2 />
                    </div>
                    <div className="">
                      <img className="lg:w-[100px] w-[70px] lg:h-[100px] h-[70px]" src={items.thumbnail} alt="products" />
                    </div>
                    <div className="">
                      <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[10px] text-[#151875]">{items.title}</p>
                    </div>
                  </div>
                  <div className="lg:w-[20%] w-[15%]">
                    <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">${items.price}</h3>
                  </div>
                  <div className="lg:w-[20%] w-[25%]">
                    <div className="flex items-center justify-between lg:w-[100px] w-[70px]">
                      <div onClick={() => handleDecrement(index)} className="">
                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#767676]">-</h3>
                      </div>
                      <div className="">
                        <h4 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#767676]">{items.qun}</h4>
                      </div>
                      <div onClick={() => handleIncrement(index)} className="">
                        <h5 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#767676]">+</h5>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[20%] w-[15%]">
                    <h3 className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875]">${items.price * items.qun}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between lg:mt-[50px] mt-[20px]">
                  <div className="">
                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[white] lg:px-[60px] px-[40px] lg:py-3 py-2 bg-[#FB2E86]"><Link to="/products">Update Curt</Link></button>
                  </div>
                  <div onClick={() => handleClear(index)} className="pr-[50px]">
                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[12px] text-[white] lg:px-[70px] px-[40px] lg:py-3 py-2 bg-[#FB2E86]">Clear Curt</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-[30%] w-full">
            <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[24px] text-[#151875] text-center lg:pb-[30px] mt-[10px] lg:mt-0 pb-[10px]">Cart Totals</h3>
            <div className="lg:border-2 border-[1px] bg-[#F4F4FC]">
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Subtotals:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">${totalPrice}</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Quantity:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">{totalQuantity}</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                <div className="">
                  <h3 className="font-Josefin Sans font-semibold lg:text-[24px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pl-[20px]">Totals:</h3>
                </div>
                <div className="">
                  <p className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[#151875] lg:py-[20px] py-[10px] pr-[20px]">${totalPrice}</p>
                </div>
              </div>
              <div onClick={handleCheckout} className="text-center lg:my-[50px] my-[20px]">
                <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[60px] px-[40px] lg:py-3 py-2 bg-[#19D16F]"><Link to="/checkout">Proceed To Checkout</Link></button>
              </div>
            </div>
            <form>
              <div className="">
                <h3 className="font-Josefin Sans font-semibold lg:text-[36px] text-[24px] text-[#151875] lg:py-[30px] py-[20px] text-center">Calculate Shopping</h3>
                <div className="lg:border-2 border-[1px]">
                  <div className="lg:border-b-2 border-b-[1px]">
                    <input type="text" placeholder="Bangladesh" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] pl-[20px] lg:py-[20px] py-[10px] outline-none" />
                  </div>
                  <div className="lg:border-b-2 border-b-[1px]">
                    <input type="text" placeholder="Mirpur Dhaka - 1200" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] pl-[20px] lg:py-[20px] py-[10px] outline-none" />
                  </div>
                  <div className="lg:border-b-2 border-b-[1px]">
                    <input type="text" placeholder="Postal Code" className="font-Josefin Sans font-medium lg:text-[16px] text-[14px] text-[#767676] pl-[20px] lg:py-[20px] py-[10px] outline-none" />
                  </div>
                  <div className="lg:my-[50px] my-[20px] pl-[20px]">
                    <button className="font-Josefin Sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:px-[60px] px-[40px] lg:py-3 py-2 bg-[#FB2E86]"><Link to="/order">Calculate Shiping</Link></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Cart