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
        <p className={` ${isFirst ? " text-ellipsis overflow-hidden whitespace-nowrap" : ""} font-medium text-2xl`}>{value}</p>
      </div>
    </div>
  )
}

const MobileInfoDetail = ({ info }: { info: IpInfo }) => {
  const { key, value } = info;
  return (
    <div className='my-2'>
      <p className=' font-bold text-xs text-[#969696]'>{key}</p>
      <p className=' font-medium text-xl'>{value && value.length < 28 ? value : `${value.substring(0, 27)}...`}</p>
    </div>
  )
}

const Info = ({ info }: { info: { ip: string, location: string, timezone: string, isp: string } }) => {
  const { ip, location, timezone, isp } = info;

  const ipInfo: IpInfo[] = [
    {
      key: "IP Address",
      value: ip
    },
    {
      key: "Location",
      value: location
    }, {
      key: "Timezone",
      value: timezone
    }, {
      key: "ISP",
      value: isp
    },
  ]
  return (
    <>
      <div className='mobile'>
        <div className=' absolute z-[1000] left-[8%] w-10/12 bg-white -bottom-36 rounded-2xl p-6 text-center shadow'>
          {ipInfo.map((info, i) => {
            return <MobileInfoDetail key={i} info={info} />
          })}
        </div>
      </div>

      <div className='desktop'>
        <div className='absolute z-[1000] left-[10%] -bottom-24  lg:-bottom-20 w-4/5 bg-white rounded-2xl p-8 grid grid-cols-4 gap-0 items-stretch shadow'>
          {ipInfo.map((info, i) => {
            return <InfoDetail key={i} info={info} isFirst={i === 0} />
          })}
        </div>
      </div>
    </>
  )
};

export default Info;
