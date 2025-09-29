import './App.css';
import TripList from './components/trip-list/index.js';
import HomePage from './components/home/index.js'
import { useState } from 'react';

function App() {
  let [show, setShow] = useState(true);

  return (
    <>

      <button onClick={() => setShow(false)}>hide trips</button>
      { show && <TripList /> }


      {/* <HomePage/> */}

    </>
  );
}

export default App;
