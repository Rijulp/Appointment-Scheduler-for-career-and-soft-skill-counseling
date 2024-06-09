import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* ======= baout img ========== */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt=''/>
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
            lg:right-[22%]'>
                <img src={aboutCardImg} alt="" />
            </div>
            </div>

            {/* ====== about content ======= */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Empower Your Career: Expert Guidance for Professional Growth</h2>
            <p className='text__para'>
            Our mission is to empower individuals at all stages of their careers with the tools,
             knowledge, and confidence needed to achieve their professional goals.
              Whether you're a recent graduate, a mid-career professional, or looking to make a career change,
             we're here to support you every step of the way.
            </p>
            <p className='text__para mt-[30px]'>
            Together, we'll create a tailored career plan that aligns
             with your passions and goals, from crafting the perfect resume
              and honing your interview skills to developing essential soft skills
               and building a robust professional network. Let's embark on this journey
                together and unlock your full career potential.
            </p>
            <Link to="/">
            <button className='btn'>Learn More</button>
            </Link>
            </div>
        </div>

    </div>
  </section>
}

export default About