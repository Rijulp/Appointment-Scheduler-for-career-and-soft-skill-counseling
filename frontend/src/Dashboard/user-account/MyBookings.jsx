import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import CounselorCard from './../../components/Counselors/CounselorCard.jsx';
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const MyBookings = () => {

  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return <div>
    {loading && !error && <Loading />}

    {error && !loading && <Error errMessage={error} />}

    {!loading && !error && (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appointments.map(counselor => (
          <CounselorCard counselor={counselor} key={counselor._id} />
        ))}
      </div>
    )}

    {!loading && !error && appointments.length === 0 && (
      <h2 className="mt-5 text-center  leading-7 text-[20px] 
      font-semibold text-primaryColor">
        You did not book any counselor yet!
      </h2>
    )}
  </div>
};

export default MyBookings






// import React, { useEffect, useState } from 'react';
// import useFetchData from '../../hooks/useFetchData';
// import { BASE_URL } from '../../config';
// import CounselorCard from './../../components/Counselors/CounselorCard.jsx';
// import Loading from '../../components/Loader/Loading.jsx';
// import Error from '../../components/Error/Error.jsx';

// const MyBookings = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (!userId) return; // Ensure userId is defined before making the request
//         const response = await fetch(`${BASE_URL}/bookings/users/${userId}/bookings`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch appointments');
//         }
//         const data = await response.json();
//         setAppointments(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, [userId]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <Error errMessage={error} />;
//   }

//   if (appointments.length === 0) {
//     return (
//       <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
//         You did not book any counselor yet!
//       </h2>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//       {appointments.map(appointment => (
//         <CounselorCard key={appointment._id} counselor={appointment.counselor} />
//       ))}
//     </div>
//   );
// };

// export default MyBookings;







