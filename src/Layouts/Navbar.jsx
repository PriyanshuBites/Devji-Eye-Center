import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and close icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md py-4 flex items-center justify-between md:justify-around relative">
            <div className="ml-4 mx-10 lg:mr-28">
                <img src={logo} alt="Logo" className="h-10 w-10 " /> {/* Adjust height as needed */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mr-4 ">
                <button onClick={handleToggle} className="focus:outline-none">
                    <FiMenu className="text-3xl text-blue-600" />
                </button>
            </div>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex md:flex-grow lg:flex-grow-0 lg:w-[50rem] md:justify-around">
                <li>
                    <Link to="/" className="text-blue-600 font-bold hover:text-blue-700">HOME</Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-blue-500 font-bold">SERVICES</Link>
                </li>
                <li>
                    <Link to="/education" className="hover:text-blue-500 font-bold">EDUCATION</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-blue-500 font-bold">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-blue-500 font-bold">CONTACT</Link>
                </li>
            </ul>

            <div className="hidden md:block ml-10 mr-4 lg:ml-28">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-red-600 hover:scale-105">
                    DONATION
                </button>
            </div>

            {/* Mobile Navbar */}
            <div className={`fixed top-0 right-0 w-full h-full md:w-full bg-gradient-to-b from-blue-300 to-blue-100 opacity-90 shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className='flex justify-end mt-4'>
                    <FiX onClick={handleToggle} className='text-end text-3xl mr-4'/>
                </div>
                <ul className="flex flex-col items-center justify-center mt-20 space-y-8">
                    <li>
                        <Link to="/"  className=" font-bold hover:text-blue-700 text-2xl">HOME</Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-blue-500 font-bold text-2xl">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/education" className="hover:text-blue-500 font-bold text-2xl">EDUCATION</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500 font-bold text-2xl">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500 font-bold text-2xl">CONTACT</Link>
                    </li>
                    <li>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-red-600 hover:scale-105">
                            DONATION
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
