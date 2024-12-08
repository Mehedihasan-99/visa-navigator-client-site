import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { AuthContext } from '../../Providers/AuthProvider';
import { ImGift } from 'react-icons/im';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user)
    const links = <div className="flex flex-col lg:flex-row *:text-xs gap-2 lg:gap-5 text-gray-700">
        <li><NavLink to="/" className='hover:text-blue-600'>Home</NavLink></li>
        <li><NavLink to="/all-visas" className='hover:text-blue-600'>All Visas</NavLink></li>
        <li><NavLink to="/add-visa" className='hover:text-blue-600'>Add Visa</NavLink></li>
        <li><NavLink to="/my-added-visas" className='hover:text-blue-600'>My added visas</NavLink></li>
        <li><NavLink to="/my-applications" className='hover:text-blue-600'>My visa Applications</NavLink></li> 
    </div>;

    return (
        <div className='shadow-md bg-base-100'>
            <div className="navbar justify-between md:w-11/12 mx-auto bg-base-100">
                <div className="nav-start space-x-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" text-2xl lg:hidden">
                            <IoMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className=" text-xs md:text-2xl font-bold text-blue-600"><NavLink to="/">Visa Navigator</NavLink></h2>
                </div>
                <div className="nav-center hidden lg:flex">
                    <ul className=" px-1">
                        {links}
                    </ul>
                </div>
                <div className="nav-end">
                    {
                        user ? <div className='flex items-center gap-2'><h2 className='text-xs md:text-xl'>{user?.email || user?.displayName}</h2> <button onClick={logout} className="btn btn-primary btn-sm text-white"><Link to="/">Logout</Link>
                        </button></div> : <div className='space-x-2'>
                            <button className="btn btn-primary btn-sm text-white">
                                <Link to="/login"> Login </Link>
                            </button>
                            <button className="btn btn-primary btn-sm text-white">
                                <Link to="/register"> Register </Link>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;