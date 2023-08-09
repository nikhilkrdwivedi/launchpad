import Button from '@elements/Button'
import React from 'react'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
export default function ManageLinkHeader({children,onClick}) {
  return (
        <>
    <div className='flex justify-between items-center px-2 md:px-20 py-2 '>
        <div className='text-gray-600 dark:text-gray-200 font-bold text-lg'>Manage Links</div>
        <div><Button btnClass="bg-gray-200 dark:bg-gray-200 !text-gray-600 p-2 gap-1" title="New Link" Icon={AiOutlineAppstoreAdd} onClick={onClick} /></div>
    </div>
    {children}
    </>
  )
}
