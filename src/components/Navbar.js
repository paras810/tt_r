import React ,{useContext}from 'react'
import NoteContext from '../context/notes/NoteContext'

const Navbar = () => {
    const menu_bar = useContext(NoteContext)
  return (
    <div>Navbar my <strong> {menu_bar.text} </strong></div>
  )
}

export default Navbar