import React from 'react'

const InputControl = (props) => {
  return (
    <div className='flex flex-col gap-2 items-start'>
      {props.label && <label className='text-white text-lg font-medium mt-3'>{props.label}</label>}
      <input type="text" className='px-3 py-2 rounded-md w-full text-sm' {...props} />
    </div>
  )
}

export default InputControl
