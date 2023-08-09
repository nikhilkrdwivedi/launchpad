import React from 'react'
import ManageLinkCard from './ManageLinkCard'

export default function ManageLinkList({ loading, data = [] }) {
    return (
        !loading &&
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4">
            {(data || []).map(({ node: item }, index) => (
        <ManageLinkCard data={item} 
        key={index}
         />
            ))}
        </div>
    )
}
