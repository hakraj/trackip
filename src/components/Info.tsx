import React from 'react';
import '../App.css';


interface IpInfo {
  key: string,
  value: string,
}

const InfoDetail = ({ info, isFirst }: { info: IpInfo, isFirst: boolean }) => {
  const { key, value } = info;
  return (
    <div className=' flex items-start justify-start'>
      {!isFirst &&
        <div className='mt-2 h-16 w-[0.5px] bg-[#969696]/50'></div>
      }
      <div className={` ${isFirst ? "px-1 min-w-0" : "px-6"}`}>
        <p className=' font-bold text-sm text-[#969696] mb-2'>{key}</p>
        <p className=' font-medium text-2xl'>{value}</p>
      </div>
    </div>
  )
}

const MobileInfoDetail = ({ info }: { info: IpInfo }) => {
  const { key, value } = info;
  return (
    <div className='my-2'>
      <p className=' font-bold text-xs text-[#969696]'>{key}</p>
      <p className=' font-medium text-xl'>{value}</p>
    </div>
  )
}


const Info = () => {
  const ipInfo: IpInfo[] = [
    {
      key: "IP Address",
      value: "192.212.174.101"
    },
    {
      key: "Location",
      value: "Ikeja, Lagos, Nigeria"
    }, {
      key: "Timezone",
      value: "GMT +01:00"
    }, {
      key: "ISP",
      value: "Space X Starlink"
    },
  ]
  return (
    <>
      <div className='mobile'>
        <div className=' absolute left-[8%] w-10/12 bg-white -bottom-36 rounded-2xl p-6 text-center shadow'>
          {ipInfo.map((info, i) => {
            return <MobileInfoDetail info={info} />
          })}
        </div>
      </div>

      <div className='desktop'>
        <div className='absolute left-[10%] -bottom-16 w-4/5 bg-white rounded-2xl p-8 grid grid-cols-4 gap-0 items-stretch shadow'>
          {ipInfo.map((info, i) => {
            return <InfoDetail info={info} isFirst={i === 0} />
          })}
        </div>
      </div>
    </>
  )
};

export default Info;
