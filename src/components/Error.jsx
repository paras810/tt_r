import React from 'react'
import {Link} from "react-router-dom";

const Error = () => {
  return (
      <>
    <div>could not find page</div>
    <button><Link to="/">Home Page</Link></button>
    </>
  )
}

export default Error