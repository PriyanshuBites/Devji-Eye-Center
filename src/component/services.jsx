import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/img2.jpg"
import img2 from "../assets/service2.jpg"

const Services = () => {
  const [showContent, setShowContent] = useState([false, false]); // State for both cards
  const cardRefs = [useRef(null), useRef(null)]; // Refs for each card

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index); // Use dataset to get index
        if (entry.isIntersecting) {
          setShowContent((prev) => {
            const newShowContent = [...prev];
            newShowContent[index] = true; // Show the specific card
            return newShowContent;
          });
        } else {
          setShowContent((prev) => {
            const newShowContent = [...prev];
            newShowContent[index] = false; // Hide the specific card
            return newShowContent;
          });
        }
      });
    });

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current); // Observe each card
      }
    });

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 tracking-wide">
          OUR SERVICES
        </h1>

        {/* Card 1: Eye Services */}
        <div
          ref={cardRefs[0]}
          data-index="0" // Set index as a data attribute
          className={`flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 md:p-8 rounded-lg mb-12 transform transition-all duration-1000 ${
            showContent[0] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50%]'
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Eye Checkup"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10">Personalized Eye Care</h2>
            <p className="mb-6 text-lg md:text-2xl">
              At DVJEI, we stand as the best eye hospital in Jabalpur, offering exceptional cataract eye care. Our team includes the best eye doctors in Jabalpur, dedicated to delivering personalized care.
            </p>
            <p className="mb-4 text-lg md:text-2xl">
              We offer a range of services, including cataract surgery, LASIK surgery, glaucoma treatment, and pediatric ophthalmology. Our experienced and dedicated team is here to provide the best care possible.
            </p>
          </div>
        </div>

        {/* Card 2: Fellowship Program */}
        <div
          ref={cardRefs[1]}
          data-index="1" // Set index as a data attribute
          className={`flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 md:p-8 rounded-lg mb-12 transform transition-all duration-1000 ${
            showContent[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50%]'
          }`}
        >
          {/* Content Section */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10">Fellowship Program</h2>
            <p className="mb-6 text-lg md:text-2xl">
              We offer fellowship programs for aspiring ophthalmologists looking to specialize in cataract surgery, surgical retina, glaucoma, and more.
            </p>
            <p className="mb-4 text-lg md:text-2xl">
              We also offer short-term and long-term cataract fellowship programs with the latest techniques and technologies for cataract surgery.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <img
              src={img2}
              alt="Fellowship Program"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
