import { Link } from "react-router-dom";
import appointment from "../assets/appointment.jpg";
const Appointment = () => {
    return (
        <>
            <div className="relative mt-10">
                <div className="relative">
                <img
                    src={appointment}
                    alt="Background"
                    className="inset-0 object-cover"
                />


                <div className="absolute inset-0 bg-[#A1D6E2] opacity-90"></div>
                </div>
                <div className="absolute inset-0 flex flex-col space-y-10 items-center justify-center text-white">
                     <h2 className="text-3xl font-bold mb-4">Book your appointment now</h2>
                     <Link to="/appointment">  
                     <button className="px-4 py-2 bg-blue-500 rounded">Appointment</button>
                     </Link>
                </div>


            </div>
        </>
    )
};

export default Appointment;