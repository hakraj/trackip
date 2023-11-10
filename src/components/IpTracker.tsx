import { useEffect, useState } from 'react';
import '../App.css';
import Info from './Info';
import InputForm from './InputForm';

const IpTracker = ({ setGeo }: { setGeo: React.Dispatch<React.SetStateAction<number[]>> }) => {
  const [info, setInfo] = useState({ ip: "", location: "", timezone: "", isp: "" });

  useEffect(() => {
    const getLocation = async () => {
      try {

        const res: Response = await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=fce0ba1966824d228aaf0e20253b0ecd");

        if (!res.ok) {
          throw new Error('Request failed');
        }

        const data = await res.json()

        setGeo([data?.latitude, data?.longitude]);
        setInfo({
          ip: data?.ip_address,
          location: `${data?.city}, ${data?.region}, ${data?.country} ${data?.flag?.emoji}`,
          timezone: `UTC  ${data?.timezone?.gmt_offset}:00`,
          isp: data?.connection?.isp_name
        })

        console.log("located sucessfully!");

      } catch (error) {
        console.log(error);
        // throw new Error("Submission failed");
      }

    }

    getLocation();
  }, [])

  return (
    <div className='relative bg-pattern min-h-[40vh] md:min-h-[33vh] pt-6 pb-40 md:pb-20'>
      <div className=' text-center'>
        <p className=' font-medium text-white text-3xl'><img className=' inline w-8 h-8' src={require("../images/placeholder.png")} alt="logo" /> Trackip</p>
        <InputForm setGeo={setGeo} setInfo={setInfo} />
      </div>
      <Info info={info} />
    </div>
  )
};

export default IpTracker;
