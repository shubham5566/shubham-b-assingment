import React from 'react'

import MyNavbar from './componants/MyNavbar'
import {Outlet} from "react-router-dom"
import MyInput from './componants/Input/MyInput'
import AdditionalFilter from './componants/AdditionalFilter'
import MyContainer from './componants/MyContainer'
import Cards from './componants/Cards'
function Layout() {
  return (
    <>
    <MyNavbar/>
    
    <MyInput/>
    
    <MyContainer/>
     <Outlet/>
     <Cards/>
    
    </>
  )
}

export default Layout