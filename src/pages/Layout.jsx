import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
    
       <div className='py-5 px-2'>
          <Outlet/> 
       </div>
    
      <Footer/>
    </>
  )
}

export default RootLayout