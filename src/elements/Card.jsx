import React from 'react'

export default function Card({cardClass, headerClass, title, bodyClass, children}) {
  return (
    <div className={cardClass}>
        <div className={headerClass}>{title}</div>
        <div className={bodyClass}>
            {children}
        </div>
    </div>
  )
}
