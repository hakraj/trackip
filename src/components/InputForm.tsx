import { useState } from "react";

const InputForm = () => {
  const [ip, setIp] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIp(e.target.value);
    console.log(e.target.value);

  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log("submitted sucessfully!");
    setIp("");

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
