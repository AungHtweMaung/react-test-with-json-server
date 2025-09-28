import React, { useEffect, useState } from 'react'

export default function Index() {
    let [trips, setTrips] = useState([]);
    let [location, setLocation] = useState('All');

    let [url, setUrl] = useState('http://localhost:3001/trips');
    // let url = `http://localhost:3001/trips?location=${location}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTrips(data));
    }, [url]);


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
        <>
            <div style={{
                margin: '20px',
                padding: '30px',
                backgroundColor: "green",
                display: "inline-block",
            }}>
                <h1 style={{ color : "white" }}>Ready To Go?</h1>
                {/* <button>All</button> */}
                <select value={location} onChange={filterByLocation}>
                    <option value="">All</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Japan">Japan</option>
                    <option value="Thailand">Thailand</option>
                </select>
                <ul>
                    {trips.map((trip) =>
                        <li key={trip.id} style={{ color: "white" }}>
                            <p>{trip.name}</p>
                            <p>{trip.price}</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
