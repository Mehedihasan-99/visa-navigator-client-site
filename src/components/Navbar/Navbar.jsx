import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { AuthContext } from '../../Providers/AuthProvider';
import { ThemeContext } from '../../Providers/ThemeProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const {toggleTheme, theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    const email = user?.email

    const links = <div className="flex flex-col lg:flex-row *:text-xs gap-2 lg:gap-5 text-gray-700">
        <li><NavLink to="/" className='hover:text-blue-600'>Home</NavLink></li>
        <li><NavLink to="/all-visas" className='hover:text-blue-600'>All Visas</NavLink></li>
        <li><NavLink to="/add-visa" className='hover:text-blue-600'>Add Visa</NavLink></li>
        <li><NavLink to={`/my-added-visas/${email}`} className='hover:text-blue-600'>My added visas</NavLink></li>
        <li><NavLink to={`/my-applications/${email}`} className='hover:text-blue-600'>My visa Applications</NavLink></li>
    </div>;

    const handleLogout = () => {
        logout()
        navigate("/")

    }

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
                    <NavLink to="/">
                        <img src={`https://i.ibb.co/bXWhGvC/visa-navigator-logo.webp`}
                            alt=""
                            className='size-8' />
                    </NavLink>
                </div>
                <div className="nav-center hidden lg:flex">
                    <ul className=" px-1">
                        {links}
                    </ul>
                </div>
                <div className="nav-end gap-10">
                    <input
                        type="checkbox"
                        onClick={toggleTheme}
                        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />
                    {
                        user ? <div className='relative group'>
                            <img
                                alt="user photo"
                                src={user?.photo ? user?.photo : user?.photoURL}
                                className='w-10 rounded-full cursor-pointer' />
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className='text-xs md:text-xl'>{user?.name || user?.displayName}</p>
                                <button onClick={handleLogout} className="btn btn-primary btn-sm text-white">Logout
                                </button>
                            </div>
                        </div> :
                            <div className='space-x-2'>
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
