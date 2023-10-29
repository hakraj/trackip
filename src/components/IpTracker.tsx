import React from 'react';
import '../App.css';
import Info from './Info';

const IpTracker = () => {
  return (
    <div className='relative bg-pattern min-h-[40vh] md:min-h-[33vh] pt-6 pb-40 md:pb-20'>
      <div className=' text-center'>
        <p className=' font-medium text-white text-3xl'>📍 Trackip</p>
        <form className='mt-6 w-10/12 md:w-2/5 mx-auto flex gap-0'>
          <input
            className=' px-6 w-[85%] md:w-[90%] py-3 rounded-s-2xl outline-0 text-sm md:text-lg placeholder:text-[#969696]'
            placeholder='Search for any IP address or domain'
            type="text" />
          <button className='w-[15%] md:w-[10%] flex-1 rounded-e-2xl bg-black hover:bg-[#2b2b2b]' type="submit">
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" /></svg>
          </button>
        </form>
      </div>
      <Info />
    </div>
  )
};

export default IpTracker;
