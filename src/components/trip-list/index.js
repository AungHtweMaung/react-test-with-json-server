import React, { useEffect, useState } from 'react'

export default function Index() {
    let [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/trips')
        .then(res => res.json())
        .then(data => setTrips(data));
    }, []);
    // console.log(trips);
    return (
        <>
            <h1>Ready To Go?</h1>
            <ul>
                { trips.map((trip) => 
                <li>
                    <p>{trip.name}</p>
                    <p>{trip.price}</p>
                </li>
                ) }
            </ul>
        </>
    )
}
