import { CircleUserRound, Menu, Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='shadow-sm bg-white py-[15px] fixed left-0 right-0 z-50 px-3'>
        <div className='flex items-center justify-between container mx-auto  max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl my-2'>
        <Link to="/"  reloadDocument>
            <img src="/images/logo.webp" alt="" className='w-[100px]' />
        </Link>
        <ul className='hidden  md-max:flex gap-5'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
            <li>
                <Link to="/brands">Brands</Link>
            </li>
            <li>
                <Link to="/offers">Offers</Link>
            </li>
            <li>
                <Link to="/contact-us">Contact Us</Link>
            </li>
        </ul>
        <ul className='flex  items-center gap-4 '>
            <li>
            <select className=" border-0 outline-0 text-black p-2">
                <option>English</option>
                <option>Arabic</option>
              </select>
            </li>
            <li>
            <Search />
            </li>
            <li>
            <ShoppingBag />
            </li>
            <li>
            <Link to="/login">
                 <CircleUserRound />
            </Link>
            </li>
        </ul>
        </div>
    </nav>

    {/* Fixed Bottom Navigation in small screen */}
    <div className='fixed bottom-3 left-3 right-3 bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50 rounded-full sm-max:max-w-[300px] sm-max:mx-auto md-max:hidden'>
        <Link to="/" className='font-extrabold text-2xl'>
            B
        </Link>
        <Link to="/categories">
            <Menu/>
        </Link>
        <Link to="/offers">
            <img src="/images/tag price.png" alt="Offers" className='w-6 h-6' />
        </Link>
        <Link to="/brands">
            <img src="/images/cloakroom.png" alt="Brands" className='w-6 h-6'/>
        </Link>
        <Link to="/login">
            <CircleUserRound />
        </Link>
    </div>
    {/* Fixed Bottom Navigation in small screen */}
    </>
  )
}

export default Navbar



