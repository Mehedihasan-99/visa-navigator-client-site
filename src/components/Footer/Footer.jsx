import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {

    const links = <div className="flex flex-col gap-1 text-gray-700">
        <NavLink to="/" className='hover:text-blue-600'>Home</NavLink>
        <NavLink to="/all-visas" className='hover:text-blue-600'>All Visas</NavLink>
        <NavLink to="/add-visa" className='hover:text-blue-600'>Add Visa</NavLink>
        <NavLink to="/my-added-visas" className='hover:text-blue-600'>My added visas</NavLink>
        <NavLink to="/my-applications" className='hover:text-blue-600'>My visa Applications</NavLink>
    </div>;

    return (
        <footer className="bg-gray-900  text-white py-8">
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 ">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-bold"><Link to="/"> Visa Navigator </Link></h1>
                    <p className="mt-2 text-sm text-gray-400">
                        Simplifying Your Journey Across Borders.
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="mt-2 space-y-2 text-gray-300">
                        {links}
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Email: support@visanavigator.com</p>
                    <p className="mt-1 text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
                    <p className="mt-1 text-sm text-gray-400">
                        Address:
                        <span>123 Visa Lane, Global City, Country</span>
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center px-4">
                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <Link to="https://facebook.com" target="_blank">
                        <FaFacebookF className="text-4xl text-blue-400  rounded-full p-1 bg-gray-700" />
                    </Link>
                    <Link to="https://twitter.com" target="_blank">
                        <FaTwitter className="text-4xl text-blue-400" />
                    </Link>
                    <Link to="https://linkedin.com" target="_blank">
                        <FaLinkedinIn className="text-4xl" />
                    </Link>
                    <Link to="https://instagram.com" target="_blank">
                        <FaInstagram className="text-4xl text-orange-500" />
                    </Link>
                </div>

                {/* Legal */}
                <p className="mt-4 sm:mt-0 text-sm text-gray-400">
                    © {new Date().getFullYear()} Visa Navigator. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
