import React from "react";
import logo from "../assets/logo.svg";
import { FaUser, FaStar } from 'react-icons/fa'; // Import FaStar from react-icons

const Excellent = () => {
  return (
    <>
      <div className="text-center m-10">
        <div className="text-black font-semibold lg:text-4xl p-1 ">Excellent</div>
        <div className="flex items-center justify-center p-1 md:text-4xl text-lg">
          <FaStar style={{color: "#FFD43B"}} /> {/* Use FaStar icon */}
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
        </div>
        <div>
          <p className="lg:text-2xl text-sm">Based On <span className="text-black font-bold lg:text-2xl p-1">219 reviews</span></p>
        </div>
        <div className="flex items-center justify-center p-1">
          <img src={logo} alt="Logo" className=" w-24 lg:h-10 "/>
        </div>
      </div>
    </>
  );
};

export default Excellent;
