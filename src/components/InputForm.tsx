import { useState } from "react";

const InputForm = (
  { setGeo, setInfo }
    :
    {
      setGeo: React.Dispatch<React.SetStateAction<number[]>>,
      setInfo: React.Dispatch<React.SetStateAction<{
        ip: string;
        location: string;
        timezone: string;
        isp: string;
      }>>
    }
) => {
  const [ip, setIp] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIp(e.target.value);
    console.log(e.target.value);

  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

    if (!ipRegex.test(ip)) {
      return alert("Invalid input. Please enter a valid IP address.")
    }

    try {

      const res: Response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=fce0ba1966824d228aaf0e20253b0ecd&ip_address=${ip}`);

      if (!res.ok) {
        return alert("Invalid input. Please enter a valid IP address.")
      }

      const data = await res.json()

      if (data.error || !data?.city) {
        return alert("Invalid input. Please enter a valid IP address.")
      }

      setGeo([data?.latitude, data?.longitude]);
      setInfo({
        ip: data?.ip_address,
        location: `${data?.city}, ${data?.region}, ${data?.country} ${data?.flag?.emoji}`,
        timezone: `UTC   ${data?.timezone?.gmt_offset}:00`,
        isp: data?.connection?.isp_name
      })

      console.log("submitted sucessfully!");

    } catch (error) {
      console.log(error);
      // throw new Error("Submission failed");
    }

    return setIp("");
  }

  return (
    <form onSubmit={handleSubmit} className='mt-6 w-10/12 md:w-3/5 lg:w-2/5 mx-auto flex gap-0'>
      <input
        className=' px-6 w-[85%] md:w-[90%] py-3 rounded-s-2xl outline-0 text-sm md:text-lg placeholder:text-[#969696]'
        placeholder='Search for any IP address or domain'
        onChange={handleChange}
        value={ip}
        type="text" />
      <button className='w-[15%] md:w-[10%] flex-1 rounded-e-2xl bg-black hover:bg-[#2b2b2b]' type="submit">
        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </form>
  )
};

export default InputForm;
