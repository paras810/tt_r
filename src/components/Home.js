import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Home = () => {
const myPh_no = useContext(NoteContext)
  return (
      <>

    <div>Home page</div>
    <p>Ph No. <strong>{myPh_no.number}</strong></p>

    </>
  )
}

export default Home