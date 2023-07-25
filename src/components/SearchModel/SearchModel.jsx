import { memo } from "react"

const SearchModel = ({ iconBefore, iconAfter, children, fontWeight }) => {
  return (
    <div className='bg-white py-2 px-4 rounded-md w-full text-[17px] shadow-sm border border-orange-200 flex justify-center items-center gap-[4px]  text-gray-600 cursor-pointer hover:bg-orange-100 transition ease-in-out'>
      <span>{iconBefore}</span>
      <span className={`${fontWeight && 'font-bold text-black'} text-[15px] w-[170px] d-block text-ellipsis whitespace-nowrap overflow-hidden`}>{children}</span>
      <span className="flex-1 flex justify-end">{iconAfter}</span>
    </div>
  )
}

export default memo(SearchModel) 
