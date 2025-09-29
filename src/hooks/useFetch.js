import { useState, useEffect } from "react";


function useFetch(url) {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);


    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch(url, {
            signal
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Something went wrong");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setError(null);
                setLoading(false);

            }
            ).catch(e => {
                setError(e.message);
                setLoading(false);
            })
        return () => {
            abortController.abort();
        };
    }, [url]);
    // setLoading(false);



    return { data, loading, error };
}

export default useFetch;








// import { useEffect, useState } from "react";

// function useFetch(url) {
//     let [data,setData] = useState(null);
//     let [ loading, setLoading ] = useState(false);
//     let [ error, setError ] = useState(null);

//     useEffect(() => {
//       setLoading(true);
//         fetch(url)
//         .then(res => {
//           if(!res.ok) {
//             throw Error('something went wrong');
//           }
//           return res.json();
//         })
//         .then(data => {
//           setData(data);
//           setError(null);
//           setLoading(false);
//         })
//         .catch(e => {
//           setError(e.message);
//         })
//       },[url]);
//     return { data , loading , error };
// }

// export default useFetch;