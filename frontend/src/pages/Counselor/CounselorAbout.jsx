import React from 'react'
import { formateDate } from '../../utils/formateDate';

const CounselorAbout = () => {
  return (
    <div>
          <div>
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                  About of
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                  Jane Smith</span>
              </h3>
              <p className="text__para">Jane provides strategic career counseling 
                focusing on long-term career development and the power of 
                networking. Her sessions are designed to empower clients 
                to leverage their connections for career advancement.
              </p>
          </div>

          <div className="mt-12">
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                  Education
              </h3>
              <ul className="pt-4 md:px-5">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                      <div>
                          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                              {formateDate("12-04-2010")} -{formateDate("12-04-2012")}
                          </span>
                          <p className="text-[15px] leading-6 font-medium text-textColor">
                              M.S. in Career Counseling, Seattle University
                          </p>
                      </div>
                      <p className="text-[14px] leading-5 font-medium text-textColor">
                          654 Cedar Ln, Seattle, WA 98101.
                      </p>
                  </li>
                  
              </ul>
          </div>


          <div className='mt-12'>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                  Experience
              </h3>

              {/*  */}
              <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} -{formateDate("12-04-2019")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                Corporate Transition Specialist at Fortune 500 Companies
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Global Enterprises Inc.
              </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} -{formateDate("12-04-2019")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                Leadership Coach for Senior Executives
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Executive Leadership Academy.
              </p>
            </li>
        </ul>
              {/*  */}

          </div>

        </div>
  );
};

export default CounselorAbout