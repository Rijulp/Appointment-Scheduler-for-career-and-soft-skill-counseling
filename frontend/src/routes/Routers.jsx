// import Home from "../pages/Home"
// import Services from "../pages/Services"
// import Login from "../pages/Login"
// import Signup from "../pages/Signup"
// import Contact from "../pages/Contact"
// import Counselors from "../pages/Counselor/Counselors"
// import CounselorDetails from "../pages/Counselor/CounselorDetails"
// import MyAccount from "../Dashboard/user-account/MyAccount"
// import Dashboard from "../Dashboard/counselor-account/Dashboard"
// import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
// import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from "./ProtectedRoute"
// import Booking from "../pages/Counselor/Booking.jsx";

// const Routers = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/counselors" element={<Counselors />} />
//             <Route path="/counselors/:id" element={<CounselorDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Signup />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/booking" element={<Booking />} /> 
//             <Route path="/checkout-success" element={<CheckoutSuccess />} />
//             <Route
//                 path="/users/profile/me"
//                 element={
//                     <ProtectedRoute allowedRoles={['client']}>
//                         <MyAccount />
//                     </ProtectedRoute>} />
//             <Route
//                 path="/counselors/profile/me"
//                 element={
//                     <ProtectedRoute allowedRoles={['counselor']}>
//                         <Dashboard />
//                     </ProtectedRoute>} />
//         </Routes>
//     );
// };

// export default Routers;
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Counselors from "../pages/Counselor/Counselors";
import CounselorDetails from "../pages/Counselor/CounselorDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/counselor-account/Dashboard";
import Booking from "../pages/Counselor/Booking"; // Import Booking if needed
import CheckoutSuccess from "../pages/CheckoutSuccess"; // Import CheckoutSuccess
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/counselors" element={<Counselors />} />
      <Route path="/counselors/:id" element={<CounselorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} /> {/* Add route for Booking */}
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={['client']}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/counselors/profile/me"
        element={
          <ProtectedRoute allowedRoles={['counselor']}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/checkout-success" element={<CheckoutSuccess />} /> {/* Add route for CheckoutSuccess */}
    </Routes>
  );
};

export default Routers;
