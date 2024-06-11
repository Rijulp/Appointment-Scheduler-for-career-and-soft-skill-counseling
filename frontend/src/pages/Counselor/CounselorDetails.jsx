import React, { useState } from "react";
import counselorImg from '../../assets/images/counselor-img02.jpg'
import starIcon from '../../assets/images/Star.png'
import CounselorAbout from "./CounselorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel.jsx";

const CounselorDetails = () => {

    const [tab,setTab] = useState('about')

    return (
    <section>
        <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-5">
                        <figure className="max-w-[200px] max-h-[200px]">
                            <img src={counselorImg} alt="counselorImg" className="w-full" />
                        </figure>

                            <div>
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                    career counseling
                                </span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                    Jane Smith
                                </h3>
                                <div className="flex items-center gap-[6px]" >
                                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                                    lg:leading-7 font-semibold text-headingColor">
                                        <img src={starIcon} alt="" />4.7
                                    </span>
                                    <span className='text-[14px] leading-5 lg:text-[16px]
                                    lg:leading-7 font-[400] text-textColor'>(272)
                                    </span>
                                </div>
                                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                                Jane Smith is passionate about helping clients grow 
                                their careers through effective development and networking
                                 strategies.
                                </p>
                            </div>
                    </div>

                    <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                            <button
                                onClick={() => setTab('about')}
                                // check tab comment 
                                className={`${
                                    tab === "about" && "border-b border-solid border-primaryColor"
                                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColour font-semibold`}
                                    >
                                About
                            </button>
                            <button
                                onClick={() => setTab('feedback')}
                                // check tab comment 
                                className={`${
                                    tab === "feedback" && 
                                     "border-b border-solid border-primaryColor"
                                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColour font-semibold`}
                                    >
                                Feedback
                            </button>
                    </div>

                    <div className="mt-[50px]">
                        {tab === "about" && <CounselorAbout />}
                        {tab === "feedback" && <Feedback/>}
                    </div>
                </div>
                <SidePanel />

                <div></div>
            </div>
        </div>
    </section>   
    );
};

export default CounselorDetails;