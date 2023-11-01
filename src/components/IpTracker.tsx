import '../App.css';
import Info from './Info';
import InputForm from './InputForm';

const IpTracker = () => {
  return (
    <div className='relative bg-pattern min-h-[40vh] md:min-h-[33vh] pt-6 pb-40 md:pb-20'>
      <div className=' text-center'>
        <p className=' font-medium text-white text-3xl'>📍 Trackip</p>
        <InputForm />
      </div>
      <Info />
    </div>
  )
};

export default IpTracker;
