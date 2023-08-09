import React from 'react'

export default function NoDataFound({loading, data=[]}) {
    console.log({flag:!!(!loading && !data && data.length<1) })
  return (
    !!(!loading && !data && data.length<1) &&
    <div>NoDataFound</div>
  )
}
