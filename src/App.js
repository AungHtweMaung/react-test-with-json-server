import './App.css';
import TripList from './components/trip-list/index.js';
import HomePage from './components/home/index.js'
import { useEffect, useState } from 'react';

function App() {
  let [show, toggleShow] = useState(true);

  let [data, setData] = useState('user data');

  function changeData() {
    setData('Updated User');
  }

  useEffect(() => {
    // setData('updated data');
    changeData();
    console.log('running');
  }, [changeData])

  return (
    <>
      <p>{ data }</p>
      <button onClick={() => toggleShow(!show) }>
        toggle show hide trips
      </button>
      { show && <TripList /> }


      {/* <HomePage/> */}

    </>
  );
}

export default App;
