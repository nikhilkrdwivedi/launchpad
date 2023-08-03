import React from 'react'
// import { IconBase } from 'react-icons';

export default function Button({title,Icon, btnClass,onClick}) {
  return (
    <button onClick={onClick} className={`bg-green-600 text-white font-medium rounded-md p-2 w-40 md:w-44 text-center flex items-center justify-evenly ${btnClass}`}>
        {Icon && <Icon size={18} />}
        {title}
    </button>
  )
}
