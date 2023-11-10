import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import IpTracker from './components/IpTracker';
import ViewMap from './components/Map';

function App() {
  const [geo, setGeo] = useState([0, 0])

  console.log(geo);


  return (
    <main className='m-0 mx-auto w-screen 2xl:max-w-screen-2xl min-h-screen'>
      <IpTracker setGeo={setGeo} />
      <ViewMap geo={geo} />
    </main>
  );
}

export default App;
