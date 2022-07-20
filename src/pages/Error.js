import React from 'react'
import {BiError} from 'react-icons/bi'

function Error() {
  return (
    <div className="container">
      <h1><BiError color="red" /></h1>
      <h1>Invalid Path</h1>
    </div>
  )
}

export default Error