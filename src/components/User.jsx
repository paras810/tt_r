import React from 'react'
import { Link , useLocation, useParams} from 'react-router-dom'

const User = () => {
    const {fname , lname} = useParams() 
    const location = useLocation()
    // console.log(location)
    // console.log(location.pathname)

  return (
      <>
    <div> user page { fname } { lname }</div>
    <button><Link to="/">Home Page</Link></button>
    <p>curren location is {location.pathname}</p>
    {location.pathname === '/user/paras/added'? <button onClick={()=>{alert('going to service page')}}> <Link to="/service">More</Link></button>: null}
    </>
  )
}

export default User 