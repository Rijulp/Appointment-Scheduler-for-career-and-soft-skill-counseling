import React from "react";
import heroimg01 from "../assets/images/hero-img01.jpg";
import heroContent01 from "../assets/images/hero-content01.jpg";
import heroContent02 from "../assets/images/hero-content02.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.jpg";
import icon03 from "../assets/images/icon03.jpg";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../assets/images/feature-img.jpg";
import CounselorList from "../components/Counselors/CounselorList";
import faqImg from "../assets/images/faq-img.jpg"
import FaqList from "../components/Faq/FaqList";
import { useSpring, animated } from "react-spring";
// import Testimonial from "../components/Testimonial/Testimonial.jsx";

const Home = () => {

    // Define animations using react-spring
    const heroContentAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500, // Delay before animation starts
    });

    return (
        <>

            {/* animated hero section test start */}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* ============ hero content ============ */}
                        <animated.div style={heroContentAnimation}>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    Achieve Your Career Goals with Expert Guidance.
                                </h1>
                                <p className="text__para">
                                    Our experienced counselors are here to help you identify your strengths,
                                    develop essential soft skills, and create a clear career path.
                                    Book your session today and take the first step towards achieving your professional aspirations.
                                </p>
                                <Link to='/appointment'>
                                    <button className="btn">Request an Appointment</button>
                                </Link>
                            </div>
                        </animated.div>

                        {/* ============ hero content ============== */}
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={heroimg01} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* animated hero section test start */}

            {/*============= mid content start ==============*/}

            <section className="w-full bg-orange-50 py-8">
                {/* First Content Block */}
                <div className="flex justify-center mb-8 transition-transform transform hover:scale-105">
                    <div className="w-full max-w-5xl flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                        <div className="flex-grow">
                            <h2 className="text-xl font-bold">Flexible Scheduling</h2>
                            <p className="text-gray-700">
                                Book your counseling sessions at times that fit your busy schedule.<br />
                                Our flexible appointment options ensure you can get the support you need
                                without disrupting your daily routine.
                            </p>
                        </div>
                        <img src={heroContent01} alt="Placeholder Image" className="w-28 h-28 object-cover flex-shrink-0 rounded-full" />
                    </div>
                </div>

                {/* Second Content Block */}
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <div className="w-full max-w-5xl flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                        <img src={heroContent02} alt="Placeholder Image" className="w-28 h-28 object-cover flex-shrink-0 rounded-full" />
                        <div className="flex-grow">
                            <h2 className="text-xl font-bold">Confidential and Secure</h2>
                            <p className="text-gray-700">
                                Your privacy is our priority.
                                All counseling sessions and personal information
                                are kept confidential and secure,<br />
                                providing you with a safe space to discuss your career challenges
                                and aspirations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= end =================*/}


            {/*=========== cards section start ==============*/}
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]  lg:mt-[55px] ">
                        <div className="py-[30px] px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon01} className="h-[180px] w-[180px] " alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Counselor
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Counselors offer guidance and support to those facing personal challenges,
                                    helping them explore feelings and develop coping strategies.
                                </p>
                                <Link to='/Counselors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div>


                        <div className="py-[30px] px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon02} className="h-[180px] w-[180px] " alt="" />
                            </div>


                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Services
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    An appointment booking service streamlines scheduling between clients and providers,
                                    offering online booking, reminders, and cancellations for efficient coordination.
                                </p>
                                <Link to='/Counselors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div>



                        <div className="py-[30px] px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex items-center justify-center">
                                <img src={icon03} className="h-[180px] w-[180px] " alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Contact
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    Contact the counselor's office by phone or email to book an appointment,
                                    sharing your availability and reason briefly. Staff will then help schedule a suitable time for you.
                                </p>
                                <Link to='/Counselors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*============= cards section end ========*/}

            {/*============ about section start ==========*/}
            <About />
            {/*============ about section ends ==========*/}

            {/* ========== services section ============= */}
            <section>
                <div className="container">
                    <div className="xl:w-[600px] mx-auto">
                        <h2 className="heading text-center">Our Counseling Services</h2>
                        <p className="text__para text-center">
                            Comprehensive Career Counseling Services Tailored to Your Needs
                            Navigating your career can be challenging, but with the right
                            guidance, you can achieve your professional goals and realize
                            your full potential.
                        </p>

                    </div>

                    <ServiceList />
                </div>
            </section>
            {/* ========== services ends ============= */}


            {/*================= feature section starts ===============*/}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">

                        {/*=============== feature content ========== */}
                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                Seamless Scheduling for Your Professional Growth.
                            </h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    Intuitive Interface
                                </li>
                                <li className="text__para">
                                    Flexible Appointment Options
                                </li>
                                <li className="text__para">
                                    Personalized Counselor Matching
                                </li>
                            </ul>
                            <Link to="/">
                                <button className="btn">Learn More</button>
                            </Link>
                        </div>

                        {/*============ feature image ===========*/}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={featureImg} className="w-3/4" alt="" />

                        </div>
                    </div>

                </div>

            </section>



            {/*================= feature section end ===============*/}


            {/*=================== counselor section =====================  */}
            <section>
                <div className="container">
                    <div className="xl:w-[600px] mx-auto">
                        <h2 className="heading text-center">Our Counselors</h2>
                        <p className="text__para text-center">
                            Our team of counselors is comprised of industry leaders
                            and experienced professionals dedicated to guiding you toward
                            your career and personal development goals.
                        </p>

                    </div>
                    <CounselorList />
                </div>

            </section>
            {/*=================== counselor section end =====================  */}


            {/*===================== faq section start ================= */}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                            <img src={faqImg} alt="faqImage" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="heading">
                                Most Asked questions by our Clients.
                            </h2>
                            <FaqList />
                        </div>
                    </div>
                </div>
            </section>
            {/*===================== faq section end ================= */}

        </>
    );
};

export default Home;