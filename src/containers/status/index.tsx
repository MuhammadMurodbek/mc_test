import React from 'react'

const Status = ({status}:any) => {
const classStyle:string = 'text-white text-center rounded'
  return (
    <div className={status ? `bg-info `+classStyle:`bg-warning `+classStyle}>
        {status ? 'Active':'InActive'}
    </div>
  )
}

export default Status