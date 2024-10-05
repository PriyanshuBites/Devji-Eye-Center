// src/components/Header.js
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest, } from 'react-icons/fa';


// <FontAwesomeIcon icon={faPhone} style={{color: "#fffdf5",}} />
const Header = () => {
    return (
        <div className="bg-[#1995AD] h-12 lg:flex lg:justify-between md:px-10 items-center text-white">
            <div className="flex justify-between lg:justify-start pt-2 ">  
                <div className="flex lg:items-center">
                    <FaEnvelope className="m-2 text-sm lg:text-xl" />
                    <span className="lg:text-lg font-semibold m-2 text-[12px]">dvjei.jbp@gmail.com</span>
                </div>
                <div className="flex lg:items-center">
                    <IoCallSharp className="m-2 text-sm lg:text-xl " />
                    <span className="lg:text-lg m-2 font-semibold text-[12px]">24/7 Customer Support</span>
                </div>
            </div>
            <div className="lg:block hidden">
                <div className='flex justify-around md:justify-between w-[250px]'>
                    <FaFacebookF className='text-white hover:text-blue-500 cursor-pointer text-2xl' />
                    <FaTwitter className='text-white hover:text-black cursor-pointer text-2xl' />
                    <FaInstagram className='text-white hover:text-pink-600 cursor-pointer text-2xl' />
                    <FaLinkedinIn className='text-white hover:text-blue-500 cursor-pointer text-2xl' />
                    <FaYoutube className='text-white hover:text-red-500 cursor-pointer text-2xl' />
                    <FaPinterest className='text-white hover:text-red-400 cursor-pointer text-2xl' />
                </div>
            </div>
        </div>

    );
};

export default Header;
