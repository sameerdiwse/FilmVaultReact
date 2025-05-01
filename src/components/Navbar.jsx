import React from "react";
import Logo from '../netflix-icon-icon-2048x2048-yj41gpvr.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div class='flex space-x-8 items-center pl-3 py-4'>
    <img className='w-[50px] rounded-xl' src={Logo} alt="" />
    <Link className='text-orange-600 text-1xl font-bold' to="/">Movies</Link>
    <Link className='text-orange-600 text-1xl font-bold' to='/watchlist'>Watchlist</Link>
    </div>
    )
}

export default Navbar;
