import React from 'react'
import { Link , useParams} from 'react-router-dom'

const User = () => {
    let { name } = useParams();

  return (
      <>
    <div>  user  {name}</div>
    <button><Link to="/">Home Page</Link></button>
    </>
  )
}

export default User