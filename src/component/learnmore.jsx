// import image from '../assets/innerimg.webp';
// import logo from '../assets/logo.png';

// const LearnMore = () => {
//   return (
//     <div className="relative">
//       <div
//         className="relative h-screen bg-cover bg-fixed bg-center"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 text-white">
//           <img src={logo} className="w-32 h-32 object-contain my-5" alt="Logo" />
//           <p className="text-white text-2xl max-w-2xl leading-relaxed px-6">
//             We are committed to providing quality eye care to all sections of the society.
//             <br />
//             We aspire to provide each patient that comes our way with quality eye care in a hygienic and well-maintained place.
//           </p>
//           <h2 className="text-white text-2xl font-bold my-5">Dr. Pawan Sthapak</h2>
//           <h3 className="text-white text-xl font-bold my-5">(Founder & Chairman)</h3>
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 my-10">
//             Learn more
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearnMore;

import image from '../assets/innerimg.webp';
import logo from '../assets/logo.png';

const LearnMore = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Transparent black overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.69)', // Similar to Elementor's overlay
          opacity: 0.7, // Adjust opacity if needed
          transition: 'background 0.3s, opacity 0.3s', // Add transition effects
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 text-white h-full">
        <img src={logo} className="w-32 h-32 object-contain my-5" alt="Logo" />
        <p className="text-white text-3xl text-center font-semibold leading-relaxed px-6">
          We are committed to providing quality eye care to all sections of the society.
          <br />
          We aspire to provide each patient that comes our way with quality eye care in a hygienic and well-maintained place.
        </p>
        <h2 className="text-white text-2xl font-bold my-5">Dr. Pawan Sthapak</h2>
        <h3 className="text-white text-xl font-bold my-5">(Founder & Chairman)</h3>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 my-10">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
