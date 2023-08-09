import Loader from '@elements/Loader'
import React from 'react'

export default function FullScreenLoader({show,onClick,showCloseIcon}) {
  return (
    show &&
    <Loader onClick={onClick} showCloseIcon={showCloseIcon} />
  )
}
