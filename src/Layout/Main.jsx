import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar/Navbar'
import Footer from '../pages/Shared/Footer/Footer'

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('signup');
  return (
    <div  >
       {noHeaderFooter||  <Navbar></Navbar>}
      <Outlet></Outlet>
     {noHeaderFooter ||  <Footer></Footer>}
    </div>
  )
}

export default Main
