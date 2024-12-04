import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <div className="flex flex-col md:flex-row gap-5 text-gray-700">
        <NavLink to="/" className='hover:text-blue-600'>Home</NavLink>
        <NavLink to="/all-visas" className='hover:text-blue-600'>All Visas</NavLink>
        <NavLink to="/add-visa" className='hover:text-blue-600'>Add Visa</NavLink>
        <NavLink to="/my-added-visas" className='hover:text-blue-600'>My added visas</NavLink>
        <NavLink to="/my-applications" className='hover:text-blue-600'>My visa Applications</NavLink>
    </div>;

    return (
        <div className='shadow-md'>
            <div className="navbar justify-between w-11/12 mx-auto bg-base-100">
                <div className="nav-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
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
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;