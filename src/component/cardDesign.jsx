// import { FaUser,FaStar } from 'react-icons/fa';

// const CardDesign = ({ data }) => {
//     const { id, userName, description } = data;
//     return (
//         <>
//             <div className='bg-slate-100 shadow-lg rounded-lg w-56 h-36 items-center'>
//                 <div className='flex space-x-10'>
//                     <FaUser className='m-1'/>
//                     <p>{userName}</p>
//                 </div>
//                 <div className='flex m-6'>
//                     <FaStar style={{ color: "#FFD43B" }} /> {/* Use FaStar icon */}
//                     <FaStar style={{ color: "#FFD43B" }} />
//                     <FaStar style={{ color: "#FFD43B" }} />
//                     <FaStar style={{ color: "#FFD43B" }} />
//                     <FaStar style={{ color: "#FFD43B" }} />
//                 </div>
//                 <div>
//                     <p>{description}</p>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default CardDesign;

import { FaUser, FaStar } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import google from '../assets/googleicon.png';

const CardDesign = ({ data }) => {
    const { userName, description, date } = data;
    return (
        <div className='bg-white shadow-lg border rounded-lg p-4 w-64 lg:w-64 h-44 flex flex-col justify-between mx-auto'>
            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/50" // Replace with the actual image source
                    alt={userName}
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold">{userName}</p>
                        <AiFillCheckCircle className="text-blue-500" />
                    </div>
                    <p className="text-gray-500 text-xs">{date}</p>
                </div>
            </div>
            <div className='flex'>
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} style={{ color: "#FFD43B" }} />
                ))}
            </div>
            <div>
                <p className='text-gray-700 text-sm'>{description}</p>
            </div>
            <div className='flex justify-end'>
                <img
                    src={google}
                    alt="Google Logo"
                    className="w-5 h-5"
                />
            </div>
        </div>
    );
};

export default CardDesign;
