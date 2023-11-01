import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import IpTracker from './components/IpTracker';
import ViewMap from './components/Map';

function App() {
  return (
    <main className='m-0 mx-auto w-screen 2xl:max-w-screen-2xl min-h-screen'>
      <IpTracker />
      <ViewMap />
    </main>
  );
}

export default App;
