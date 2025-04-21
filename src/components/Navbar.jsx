import React from "react";
import Logo from '../netflix-icon-icon-2048x2048-yj41gpvr.png'

const Navbar = () => {
    return (
    <div class='flex space-x-8 items-center pl-3 py-4'>
    <img className='w-[50px] rounded-xl' src={Logo} alt="" />
    <a className='text-orange-600 text-1xl font-bold' href="/">Home</a>
    <a className='text-orange-600 text-1xl font-bold' href='/watchlist'>Watchlist</a>
    </div>
    )
}

export default Navbar;