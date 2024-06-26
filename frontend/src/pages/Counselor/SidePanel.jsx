// import React from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import convertTime from "../../utils/convertTime";
// import { BASE_URL, token } from "./../../config.js";
// import { toast } from "react-toastify";

// const SidePanel = ({ counselorId, ticketPrice, timeSlots }) => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleBookingClick = () => {
//     navigate('/booking'); // Navigate to the Booking component
//   };

//   return (
//     <div className="shadow-md p-4 rounded-lg lg:p-5">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">
//           Booking Price:
//         </p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           {ticketPrice} INR
//         </span>
//       </div>

//       <div className="mt-[30px]">
//         <p className="text__para mt-0 font-semibold text-headingColor">
//           Available Time Slots:
//         </p>
//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li key={index} className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <button
//         className="btn px-2 w-full rounded-md"
//         onClick={handleBookingClick} // Attach click handler
//       >
//         Book Appointment
//       </button>
//     </div>
//   );
// };

// export default SidePanel;




// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import convertTime from "../../utils/convertTime";
// import { BASE_URL, token } from "./../../config.js";
// import { toast } from "react-toastify";
// import Booking from './Booking'; // Import the Booking component

// const SidePanel = ({ counselorId, ticketPrice, timeSlots }) => {
//   const [showBooking, setShowBooking] = useState(false); // State to control the display of the Booking component
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleBookingClick = () => {
//     setShowBooking(!showBooking); // Toggle the display of the Booking component
//   };

//   return (
//     <div className="shadow-md p-4 rounded-lg lg:p-5">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">
//           Booking Price:
//         </p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           {ticketPrice} INR
//         </span>
//       </div>

//       <div className="mt-[30px]">
//         <p className="text__para mt-0 font-semibold text-headingColor">
//           Available Time Slots:
//         </p>
//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li key={index} className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <button
//         className="btn px-2 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700"
//         onClick={handleBookingClick} // Attach click handler
//       >
//         {showBooking ? "Hide Booking" : "Book Appointment"} {/* Toggle button text */}
//       </button>

//       {showBooking && ( // Conditionally render the Booking component
//         <div className="mt-4">
//           <Booking onBook={(bookingData) => navigate('/checkout-success')} /> {/* Pass the onBook handler */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidePanel;


// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import convertTime from "../../utils/convertTime";
// import Booking from './Booking'; // Import the Booking component

// const SidePanel = ({ counselorId, ticketPrice, timeSlots }) => {
//   const [showBooking, setShowBooking] = useState(false); // State to control the display of the Booking component
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleBookingClick = () => {
//     setShowBooking(!showBooking); // Toggle the display of the Booking component
//   };

//   return (
//     <div className="shadow-md p-4 rounded-lg lg:p-5">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">
//           Booking Price:
//         </p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           {ticketPrice} INR
//         </span>
//       </div>

//       <div className="mt-[30px]">
//         <p className="text__para mt-0 font-semibold text-headingColor">
//           Available Time Slots:
//         </p>
//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li key={index} className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <button
//         className="btn px-2 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700"
//         onClick={handleBookingClick} // Attach click handler
//       >
//         {showBooking ? "Hide Booking" : "Book Appointment"} {/* Toggle button text */}
//       </button>

//       {showBooking && ( // Conditionally render the Booking component
//         <div className="mt-2"> {/* Reduced margin-top from mt-4 to mt-2 */}
//           <Booking onBook={(bookingData) => navigate('/checkout-success')} /> {/* Pass the onBook handler */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidePanel;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import convertTime from "../../utils/convertTime";
import Booking from './Booking';

const SidePanel = ({ counselorId, ticketPrice, timeSlots }) => {
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate();

  const handleBookingClick = () => {
    setShowBooking(!showBooking);
  };

  return (
    <div className="shadow-md p-4 rounded-lg lg:p-5">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">
          Booking Price:
        </p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        className="btn px-2 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700"
        onClick={handleBookingClick}
      >
        {showBooking ? "Hide Booking" : "Book Appointment"}
      </button>

      {showBooking && (
        <div className="mt-2"> {/* Reduced margin */}
          <Booking onBook={(bookingData) => navigate('/checkout-success')} />
        </div>
      )}
    </div>
  );
};

export default SidePanel;



