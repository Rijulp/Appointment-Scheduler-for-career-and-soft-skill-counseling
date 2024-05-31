import React from "react";

import heroimg01 from "../assets/images/hero-img01.jpg"
import heroContent01 from "../assets/images/hero-content01.jpg"
import heroContent02 from "../assets/images/hero-content02.jpg"

const Home = () => {
    return (
    <>
        {/* ======== hero section ========= */}
        
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* ============ hero content ============ */}
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    Achieve Your Career Goals with Expert Guidance.
                                </h1>
                                <p className="text__para">
                                    Our experienced counselors are here to help you identify your strengths,
                                    develop essential soft skills, and create a clear career path.
                                    Book your session today and take the first step towards achieving your professional aspirations.
                                </p>
                                <button className="btn">Request an Appointment</button>

                            </div>

                            {/* ============ hero counter ============= */}
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        5+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years of Experience</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        15+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Experts</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        100%
                                    </h2>
                                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Client's Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* ============ hero content ============== */}

                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={heroimg01} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======== hero section end ========= */}


            <section>
                <div className="container flex items-center justify-center">
                  
                    <div class="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">           
                        <div>
                        <h2 class="text-xl font-bold">Flexible Scheduling</h2>
                        <p class="text-gray-700">Book your counseling sessions at times that fit your busy schedule.
                            Our flexible appointment options ensure you can get the support you need
                            without disrupting your daily routine.
                            </p>
                        </div>
                        <img src={heroContent01} alt="Placeholder Image" class="w-28 h-28 object-cover flex-shrink-0 rounded-full" />

                    </div>


                </div>
                <div className="container flex items-center justify-center">
                   
                    <div class="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                        <img src={heroContent02}alt="Placeholder Image" class="w-24 h-24 object-cover flex-shrink-0 rounded-full"/>
                            <div>
                                <h2 class="text-xl font-bold">Confidential and Secure</h2>
                                <p class="text-gray-700">Your privacy is our priority.
                                 All counseling sessions and personal information
                                  are kept confidential and secure, providing you
                                   with a safe space to discuss your career challenges
                                    and aspirations.</p>
                            </div>
                    </div>
                    

                </div>

            </section>
        </>
    );
};

export default Home;