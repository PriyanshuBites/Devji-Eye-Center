import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-b from-blue-300 to-blue-100 pt-10 pb-5">
                <div className="container mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="mb-6 md:mb-0 md:w-[350px]">
                            <div className="text-xl font-semibold mb-3 ml-md-7">ADDRESS LIST</div>
                            <ul className="text-blue-600">
                                <li className="flex mb-4">
                                    <FaMapMarkerAlt className="mr-2 text-blue-800 mt-md-2 md:text-2xl lg:text-4xl text-2xl" />
                                    <p className='text-lg'>Dvjei Netralaya Tilwara Near Tilwara Bridge,Jotpur,
                                        <br className='hidden ' /> Jabalpur,Madhya Pradesh.
                                    </p>
                                </li>
                                <li className="flex items-center mb-4">
                                    <FaPhoneAlt className="mr-2 text-blue-800 md:text-xl " />
                                    <p className='text-lg'>
                                        + 07612636400, 401, 402
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="mr-2 text-blue-800 md:text-xl " />
                                    <p className='text-lg'>
                                        dvjei.jbp@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap mt-5 md:mt-[-15px] ">
                            <div className="mb-6 md:mb-0 md:ml-10">
                                <h3 className='text-xl font-semibold mb-3 '>LINKS</h3>
                                <ul className="text-blue-600 text-lg leading-8">
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="text-blue-800 mr-2 " />
                                        Home
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 " />
                                        About Us
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 " />
                                        Appointment
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 " />
                                        Blogs
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="mb-6 md:mb-0 md:ml-10 text-lg leading-8 md:mt-5">
                                <ul className="text-blue-600">
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 " />
                                        Donation
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center lg:items-start '>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 lg:mt-2 " />
                                        Contact Us
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center'>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 " />
                                        <p className='hidden md:block'>T & C</p>
                                        <p className='md:hidden'>Terms & Condition</p>
                                    </li>
                                    <li className='hover:underline hover:cursor-pointer flex items-center lg:items-start '>
                                        <MdKeyboardDoubleArrowRight className="mr-2 text-blue-800 lg:mt-1 lg:text-2xl xl:text-xl" />
                                        Privacy Policy
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='md:hidden lg:block'>
                            <div className="flex flex-col md:ml-10">
                                <h2 className="font-semibold text-blue-900 mb-2 text-lg">Be Our Subscribers</h2>
                                <p className="text-blue-600 mb-4 text-md-lg">To get the latest news about health from our experts</p>
                                <div className="flex">
                                    <input type="email" placeholder="example@email.com" className="px-md-4 py-md-2 px-2 rounded-l-md focus:outline-none text-md-lg" />
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Submit →</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between flex-md-row flex-col items-center md:items-start mt-10'>
                        <div className='lg:flex lg:justify-between lg:w-[100%]'>
                            <div className='md:flex md:justify-between md:w-[100%]'>
                                <div className=" flex flex-col lg:flex-row items-center md:items-start text-blue-600 mb-md-0 mb-8">
                                    <div className="mb-4 md:text-lg text-black font-semibold md:mb-4 md:text-start">Follow Us On -</div>
                                    <div className='flex justify-around md:justify-between w-[250px]'>
                                        <FaFacebookF className='text-blue-800 hover:text-blue-500 cursor-pointer text-2xl' />
                                        <FaTwitter className='text-blue-800 hover:text-black cursor-pointer text-2xl' />
                                        <FaInstagram className='text-blue-800 hover:text-pink-600 cursor-pointer text-2xl' />
                                        <FaLinkedinIn className='text-blue-800 hover:text-blue-500 cursor-pointer text-2xl' />
                                        <FaYoutube className='text-blue-800 hover:text-red-500 cursor-pointer text-2xl' />
                                        <FaPinterest className='text-blue-800 hover:text-red-400 cursor-pointer text-2xl' />
                                    </div>
                                </div>
                                <div className='hidden md:block md:mb-5 lg:hidden'>
                                    <div className="flex flex-col md:ml-10">
                                        <h2 className="font-semibold text-blue-900 mb-2 text-lg">Be Our Subscribers</h2>
                                        <p className="text-blue-600 mb-4 text-md-lg">To get the latest news about health from our experts</p>
                                        <div className="flex">
                                            <input type="email" placeholder="example@email.com" className="px-md-4 py-md-2 px-2 rounded-l-md focus:outline-none text-md-lg" />
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Submit →</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%]'>
                                <hr className='border border-gray-400 w-full mb-5 lg:hidden' />
                                <div className="text-sm md:text-lg text-center">&copy; 2024 DOAGuru IT Solution. All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;