
import { counselors } from "./../../assets/data/counselors.js";
import CounselorCard from './CounselorCard';

const CounselorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {counselors.map((counselor,index)=> <CounselorCard key={index} counselor={counselor}/>)}

    </div>
  )
}

export default CounselorList