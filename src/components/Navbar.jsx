import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
    <ul className='navbar'>
      <li><NavLink  to="/">Home</NavLink></li>
      <li><NavLink  to="/about">About</NavLink></li>
      <li><NavLink  to="/contact">Contact Us</NavLink></li>
      <li><NavLink  to="/user/paras/singh">User</NavLink></li>
      <li><NavLink  to="/service">Service</NavLink></li>
    </ul>
    </>
  )
}

export default Navbar