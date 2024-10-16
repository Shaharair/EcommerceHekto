import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Logo from './Logo'

const RootLayout = () => {
  return (
    <>
    
    <Header/>
    <Navbar/>
    <Outlet/>
    <Logo/>
    <Footer/>
    
    </>
  )
}

export default RootLayout