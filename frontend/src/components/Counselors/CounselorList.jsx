
import CounselorCard from './CounselorCard';
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../Error/Error.jsx";

const CounselorList = () => {

  const {data:counselors, loading, error} = useFetchData(`${BASE_URL}/counselors`)
  return (
    <>
    {loading && <Loader/>}
    {error && <Error/>}
      { !loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {counselors.map(counselor => (
          <CounselorCard key={counselor._id} counselor={counselor} />
        ))}
      </div>
    )}
    </>
  );
};

export default CounselorList