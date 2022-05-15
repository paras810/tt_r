import React from 'react'
import { Link , useParams} from 'react-router-dom'

const User = () => {
    const {fname , lname} = useParams() 

  return (
      <>
    <div> user page { fname } { lname }</div>
    <button><Link to="/">Home Page</Link></button>
    </>
  )
}

export default User 