// import { counselors } from './../../assets/data/counselors.js'
// import CounselorCard from './../../components/Counselors/CounselorCard.jsx'
// import { BASE_URL } from "../../config.js";
// import useFetchData from "../../hooks/useFetchData.jsx";
// import Loader from "../../components/Loader/Loading.jsx";
// import Error from '../../components/Error/Error.jsx';
// import { useEffect, useState } from 'react';

// const Counselors = () => {
//     const [query, setQuery] = useState("");
//     const [debounceQuerry, setDebounceQuerry] = useState("");

//     //search function
//     const handleSearch = ()=>{
//         setQuery(query.trim())

//         console.log("handle search")
//     }

//     useEffect(()=>{

//         const timeout = setTimeout(()=>{
//             setDebounceQuerry(query)
//         },700)

//         return ()=> clearTimeout(timeout)

//     },[query])

//     const { 
//         data: counselors, 
//         loading, 
//         error 
//     } = useFetchData(`${BASE_URL}/counselors?query=${debounceQuerry}`);

//     return (
//         <>

//             <section className='bg-[#fff9ea]'>{/* bg-[#fff9ea] */}
//                 <div className='container text-center'>
//                     <h2 className='heading'>
//                         Search for Counselor
//                     </h2>
//                     <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center
//                         justify-between '>
//                         <input
//                             type="search"
//                             className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
//                             placeholder='Search counselor by name or specifications'
//                             value={query}
//                             onChange={e=> setQuery(e.target.value)}

//                         />
//                         <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className='container '>

//                     {loading && <Loader />}
//                     {error && <Error />}
//                     {!loading && !error && (
//                     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
//                         {counselors.map(counselor => (
//                             <CounselorCard key={counselor.id} counselor={counselor} />
//                         ))}
//                     </div>)}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Counselors;





// //testing
import React, { useEffect, useState } from 'react';
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from '../../components/Error/Error.jsx';
import CounselorCard from './../../components/Counselors/CounselorCard.jsx';

const Counselors = () => {
    const [query, setQuery] = useState("");
    const [debounceQuery, setDebounceQuery] = useState("");

    // Handle search input and debounce
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceQuery(query.trim());
        }, 700);

        return () => clearTimeout(timeout);
    }, [query]);

    // Fetch data using the debounced query
    const { 
        data: counselors, 
        loading, 
        error 
    } = useFetchData(`${BASE_URL}/counselors?query=${debounceQuery}`);

    // Log the counselors data for debugging
    console.log('Counselors data:', counselors);

    return (
        <>
            <section className='bg-[#fff9ea]'>
                <div className='container text-center'>
                    <h2 className='heading'>
                        Search for Counselor
                    </h2>
                    <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                        <input
                            type="search"
                            className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
                            placeholder='Search counselor by name or specifications'
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={() => setQuery(query.trim())}>
                            Search
                        </button>
                    </div>
                </div>
            </section>
            
            <section>
                <div className='container'>
                    {loading && <Loader />}
                    {error && <Error />}
                    {!loading && !error && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {counselors.map((counselor, index) => {
                                const key = counselor.id || counselor._id || index;
                                console.log(`Counselor Key: ${key}`); // Log the key for debugging
                                return <CounselorCard key={key} counselor={counselor} />;
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Counselors;

