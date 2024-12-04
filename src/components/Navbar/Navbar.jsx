import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const links = <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-gray-700">
        <NavLink to="/" className='hover:text-blue-600'>Home</NavLink>
        <NavLink to="/all-visas" className='hover:text-blue-600'>All Visas</NavLink>
        <NavLink to="/add-visa" className='hover:text-blue-600'>Add Visa</NavLink>
        <NavLink to="/my-added-visas" className='hover:text-blue-600'>My added visas</NavLink>
        <NavLink to="/my-applications" className='hover:text-blue-600'>My visa Applications</NavLink>
    </div>;

    return (
        <div className='shadow-md'>
            <div className="navbar justify-between md:w-11/12 mx-auto bg-base-100">
                <div className="nav-start space-x-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" text-2xl md:hidden">
                            <IoMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-600"><NavLink to="/">Visa Navigator</NavLink></h2>
                </div>
                <div className="nav-center hidden md:flex">
                    <ul className=" px-1">
                        {links}
                    </ul>
                </div>
                <div className="nav-end">
                    <button className="btn btn-primary btn-sm text-white">
                        <Link to="/login"> Login </Link>
                    </button>
                    {/* <button className="btn btn-secondary btn-sm text-white">
                        <Link to="/register"> Register </Link>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;