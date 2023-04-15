import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
function Layout() {
  return (
    <>
      <Navbar  />
      <Outlet />
      {/* <Footer /> */}
      <a className='nav-link ms-5' href='https://t.me/OlamgirIbrohimov' target={'_blank'}>Admin</a>
    </>
  )
}

export default Layout