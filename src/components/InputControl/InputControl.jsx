import React from 'react'

const InputControl = (props) => {
  return (
    <div className='flex flex-col gap-2 items-start'>
      {props.label && <label className='text-white text-lg font-medium'>{props.label}</label>}
      <input type="text" className='px-2 py-1 rounded-lg w-full' {...props} />

      
    </div>
  )
}

export default InputControl
