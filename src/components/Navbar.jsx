import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const menuItems =
        <>
            <li className="hover:text-white" ><Link  to="/">Home</Link></li>
            <li className="hover:text-white" ><a  href="/#about">About</a></li>
            <li className="hover:text-white" ><a  href="/#projects">Projects</a></li>
            <li className="hover:text-white" ><Link  to="/blogs">Blog</Link></li>
            <li className="hover:text-white" ><a  href="/#contact">Contact</a></li>
            
        </>




    return (
        <div className="bg-base-100">
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-md">
                    {menuItems}
                    </ul>
                </div>
              <div className="flex items-center">
                  
              <Link to="/"> <li className="__logo  btn btn-ghost normal-case text-xl tracking-wider hover:text-white font-bold">ALAPOTTRA</li></Link>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-md">
                    {menuItems}
                </ul>
            </div>

        </div>
    </div>
    );
};

export default Navbar;