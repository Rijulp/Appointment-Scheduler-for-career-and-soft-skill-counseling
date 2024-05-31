import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Counselors from "../pages/Counselor/Counselors"
import CounselorDetails from "../pages/Counselor/CounselorDetails"

import {Routes, Route}from 'react-router-dom'
const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/counselors" element={<Counselors/>}/>
        <Route path="/counselors/:id" element={<CounselorDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
    </Routes>
};

export default Routers;