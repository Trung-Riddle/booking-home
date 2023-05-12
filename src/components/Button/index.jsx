import React, {memo} from 'react'

const Button = ({children, textColor, bgColor, className, border, icon, onClick}) => {
  return (
    <button 
        type='button' 
        onClick={onClick}
        className={`py-2 px-4 outline-none font-medium rounded-md shadow-lg flex items-center gap-1 ${border} ${textColor} ${className} ${bgColor}`}>
        <span>{icon}</span> <span>{children} </span>
    </button>
  )
}

export default memo(Button)
