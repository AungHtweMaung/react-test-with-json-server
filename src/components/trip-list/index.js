import React, { useEffect, useState } from 'react'
import './index.css';
import useFetch from '../../hooks/useFetch'

export default function Index() {
    // let [trips, setTrips] = useState([]);
    let [location, setLocation] = useState('All');

    let [url, setUrl] = useState('http://localhost:3001/trips');
    // let url = `http://localhost:3001/trips?location=${location}`;

    let {data : trips, loading, error} = useFetch(url);
    // console.log(trips);


    let filterByLocation = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);

        if (selectedLocation === '') {
            setUrl('http://localhost:3001/trips');
        } else {
            setUrl(`http://localhost:3001/trips?location=${selectedLocation}`)
        }
    }

    return (
    
          <div className='container'>
             <div className="flex-container">
                 <h1>Ready To Go?</h1>
                 { loading && <p>loading ...</p> }
                 { error && <p>{error}</p> }
              {/* <button>All</button> */}
              { !loading && !error && trips &&
                <>
                  <select value={location} onChange={filterByLocation}>
                    <option value="">All</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Japan">Japan</option>
                    <option value="Thailand">Thailand</option>
                  </select>
                  <ul className='trips-list'>
                    {trips.map(trip => (
                      <li key={trip.id} className='trip'>
                        <h3>{trip.name}</h3>
                        <p>price - {trip.price} mmk</p>
                      </li>
                    ))}
                  </ul>
                </>
              }
             </div>
          </div>
    )
}



















// import React, {  useState } from 'react'
// import useFetch from '../../hooks/useFetch';
// import './index.css';

// export default function Index() {

//   let [url, setUrl] = useState('http://localhost:3001/trips');
//   let { data : trips , loading , error }= useFetch(url)
  
//   return (
//     <div className='container'>
//       { <div className="flex-container">
//         <h1>Ready to go ?</h1>
//         <div>
//           <button onClick={()=>setUrl('http://localhost:3001/trips')}>all</button>
//           <button onClick={()=>setUrl('http://localhost:3001/trips?location=Myanmar')}>Trips in Myanmar</button>
//         </div>
//         <ul className='trips-list'>
//           {trips && trips.map(trip => (
//             <li key={trip.id} className='trip'>
//               <h3>{trip.name}</h3>
//               <p>price - {trip.price} mmk</p>
//             </li>
//           ))}
        
//         </ul>
//       </div>}
//     </div>
//   )
// }