// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// const Booking = ({ onBook }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (selectedDate && selectedTime) {
//       const bookingData = {
//         date: selectedDate,
//         time: selectedTime,
//       };

//       // Check if onBook is provided and is a function, if not handle redirection directly
//       if (onBook && typeof onBook === 'function') {
//         onBook(bookingData); // Pass the booking data to the parent component
//       } else {
//         // Redirect to the CheckoutSuccess page if onBook is not provided
//         navigate('/checkout-success');
//       }
//     } else {
//       alert('Please select both date and time.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book an Appointment</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="date-picker">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Select Date:</label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               minDate={new Date()} // Prevent past dates
//               dateFormat="MMMM d, yyyy"
//               className="input w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="time-picker">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Select Time:</label>
//             <input
//               type="time"
//               value={selectedTime}
//               onChange={handleTimeChange}
//               className="input w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Booking = ({ onBook }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDate && selectedTime) {
      const bookingData = {
        date: selectedDate,
        time: selectedTime,
      };

      if (onBook && typeof onBook === 'function') {
        onBook(bookingData);
      } else {
        navigate('/checkout-success');
      }
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4"> {/* Adjust padding to fit within parent */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Book an Appointment</h2> {/* Reduced margins and size */}
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Reduced spacing */}
          <div className="date-picker">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()} // Prevent past dates
              dateFormat="MMMM d, yyyy"
              className="input w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="time-picker">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="input w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;

