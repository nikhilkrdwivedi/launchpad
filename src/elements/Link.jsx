import React from 'react'
// import { IconBase } from 'react-icons';

export default function Link({title,Icon, btnClass,href,target, IconSize=18}) {
  return (
    <a href={href} target={target} className={`flex items-center justify-evenly cursor-pointer ${btnClass}`}>
        {Icon && <Icon size={IconSize} />}
        {title}
    </a>
  )
}
