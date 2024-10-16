import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Main from "./Pages/Main"
import RootLayout from "./Components/RootLayout"
import MyAccount from "./Pages/MyAccount"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import BlogProducts from "./Pages/BlogProducts"
import AboutUs from "./Pages/AboutUs"
import ContactsUs from "./Pages/ContactsUs"
import Faq from "./Pages/Faq"
import ShopProducts from "./Pages/ShopProducts"
import Products from "./Pages/Products"
import ProductsDetails from "./Pages/ProductsDetails"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Order from "./Pages/Order"
import Demo from "./Pages/Demo"
import Error from "./Pages/Error"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Main/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/blogproducts" element={<BlogProducts/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/contactsus" element={<ContactsUs/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/shopproducts" element={<ShopProducts/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/products/:id" element={<ProductsDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/order" element={<Order/>}></Route>
    <Route path="/demo" element={<Demo/>}></Route>
    <Route path="*" element={<Error/>}></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
