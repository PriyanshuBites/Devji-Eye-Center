import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bodyimg from "../assets/bodyimg.jpg.webp";
import freecamp1 from '../assets/freecamp1.webp';
import freecamp2 from '../assets/freecamp2.webp';
import freecamp3 from '../assets/freecamp3.webp';
import freecamp4 from '../assets/freecamp4.webp';
import freecamp5 from '../assets/freecamp5.webp';
import freecamp6 from '../assets/freecamp6.webp';
import freecamp7 from '../assets/freecamp7.webp';
import freecamp8 from '../assets/freecamp8.webp';
import freecamp9 from '../assets/freecamp9.webp';
import freecamp10 from '../assets/freecamp10.webp';
// Import other images similarly

const Body = () => {
  const images = [
    freecamp1,
    freecamp2,
    freecamp3,
    freecamp4,
    freecamp5,
    freecamp6,
    freecamp7,
    freecamp8,
    freecamp9,
    freecamp10,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Constant Background Image */}
      <img
        src={bodyimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#A1D6E2] opacity-90"></div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-full w-full">
        <div className="container justify-around flex flex-col md:flex-column lg:flex-row items-center px-5 md:px-8">
          {/* Left Image Slider */}
          <div className="md:w-full md:ml-32 mb-4 md:mb-0 relative z-10">
            <img
              src={images[currentImageIndex]}
              alt="Camp Activities"
              className="w-[320px] h-[220px] sm:w-[400px] sm:h-[300px] md:w-[550px] md:h-[650px] lg:w-[650px] lg:h-[750px] shadow-lg object-cover mt-24 md:mt-[270px] rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:pl-4 md:mr-56 p-5 mt-6 md:mt-28">
            <h1 className="absolute md:top-6 top-10 text-black text-2xl sm:text-3xl md:text-5xl font-sans font-semibold md:text-white md:ml-[240px] lg:ml-0 ml-10">
              CAMP ACTIVITIES
            </h1>

            <div className="absolute bg-white md:w-[500px] w-auto h-34 left-8 sm:left-12 bottom-[280px] lg:left-0 md:left-[240px] md:bottom-[220px] rounded shadow-lg z-20">
              <h2 className="p-3 text-xl sm:text-3xl md:text-5xl text-black font-semibold">
                FREE CAMP FOR EYE CHECKUPS
              </h2>
            </div>

            <p className="md:text-xl text-white lg:ml-0 text-sm sm:text-lg mb-6 ml-5 md:ml-[200px] bg-red-500" >
              There are many people in our country, who never think and care for their eyes,
              we are organizing free camps of eye checkups at various remote areas, and providing
              best-in-class treatments, free of cost donation of eye glasses, medicines and healthy
              foods to all attendees. These events improve awareness and eye care for those who cannot
              think to visit the{' '}
              <span className="text-red-500">
                <a href="https://janjyotieyehospital.com/">best eye hospital in Jabalpur</a>
              </span>.
            </p>

            <Link
              to="/gallery"
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-md shadow-lg transition duration-300"
            >
              VISIT OUR GALLERY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
