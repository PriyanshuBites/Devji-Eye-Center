

import React from "react";
import donateimg from '../assets/donateUs.webp';
import 'tailwindcss/tailwind.css';

const DonateUs = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-300 p-5 md:px-20 overflow-hidden">
            <div className="flex-1 text-center md:text-left ml-7 animate-slide-in-left">
                <p className="text-black font-bold text-sm uppercase tracking-widest mb-10 text-center underline underline-offset-2">
                    Donate Us
                </p>
                <p
                    className="text-slate-700 font-bold text-2xl md:text-4xl leading-tight mb-6 max-w-3xl mx-auto md:mx-0"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '32px',
                        letterSpacing: '-1px',
                        lineHeight: '1.2', // Adjust the line height if needed
                    }}
                >
                    Donation is not only giving, it's contribution for fulfilling someone’s vision, and it becomes special when the contribution is for charity.
                </p>

                {/* <p className="text-slate-500 text-2xl md:text-4xl font-bold  mb-6 max-w-md mx-auto md:mx-0">
                Donation is not only giving, it's contribution     for fulfilling someone’s vision, and it becomes special when the contribution is for charity.
                </p> */}
                <button className="bg-blue-500 ml-64  text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 animate-slide-in-bottom mt-5">
                    Donate Now
                </button>
            </div>
            <div className="flex-1 mt-8 md:mt-0 text-center animate-slide-in-right mr-6">
                <img src={donateimg} className="w-full max-w-sm object-contain mx-auto" alt="Donate Us" />
            </div>
        </div>
    );
};

export default DonateUs;
