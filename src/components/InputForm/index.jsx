import React, { memo } from 'react'

const InputForm = ({ label, bgColor, type, plText, name, value, setValue, field, invalidFields, setInvalidFields }) => {
  return (
    <div className='flex flex-col mt-2'>
      <label htmlFor=''>{label}</label>
      <input
        placeholder={plText}
        type={type}
        name={name}
        value={value}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            [field]: e.target.value
          }))
        }
        onFocus={() => setInvalidFields([])}
        className={`${bgColor} mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-100`}
      />
      {invalidFields.length > 0 && invalidFields.some(f => f.name === field) && <span className='text-red-600'>{invalidFields.find(f => f.name === field)?.message}</span>}
    </div>
  )
}

export default memo(InputForm)
