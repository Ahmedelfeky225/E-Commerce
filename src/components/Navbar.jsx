import { CircleUserRound, Menu, Search, ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchPage from '../pages/SearchPage'

const Navbar = () => {
    const [openSearchPage,setOpenSearchPage] = useState(null)
  return (
    <>
    <nav className='shadow-sm bg-white py-[15px] fixed left-0 right-0 z-50 px-3'>
        <div className='flex items-center justify-between container mx-auto  max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl my-2'>
        <NavLink to="/"  reloadDocument>
            <img src="/images/logo.webp" alt="" className='w-[100px]' />
        </NavLink>
        <ul className='hidden  md-max:flex gap-5'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
                <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
                <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
        </ul>
        <ul className='flex  items-center gap-4 '>
            <li>
            <select className=" border-0 outline-0 text-black p-2">
                <option>English</option>
                <option>Arabic</option>
              </select>
            </li>
            <button onClick={() =>setOpenSearchPage(true)}>
                 <Search size={20} />
            </button>
            <li>
            <ShoppingBag />
            </li>
            <li>
            <NavLink to="/login">
                 <CircleUserRound />
            </NavLink>
            </li>
        </ul>
        </div>
    </nav>

    {/* Fixed Bottom Navigation in small screen */}
    <div className='fixed bottom-3 left-3 right-3 bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50 rounded-full sm-max:max-w-[300px] sm-max:mx-auto md-max:hidden'>
        <NavLink to="/" className='font-extrabold text-2xl'>
            B
        </NavLink>
        <NavLink to="/categories">
            <Menu/>
        </NavLink>
        <NavLink to="/offers">
            <img src="/images/tag price.png" alt="Offers" className='w-6 h-6' />
        </NavLink>
        <NavLink to="/brands">
            <img src="/images/cloakroom.png" alt="Brands" className='w-6 h-6'/>
        </NavLink>
        <NavLink to="/login">
            <CircleUserRound />
        </NavLink>
    </div>
    {/* Fixed Bottom Navigation in small screen */}
    {openSearchPage && <SearchPage setOpenSearchPage={setOpenSearchPage}/>}
    </>
  )
}

export default Navbar



