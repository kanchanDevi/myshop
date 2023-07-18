import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
  return (
    <div>
       {err.message}
    </div>
  )
}

export default Error