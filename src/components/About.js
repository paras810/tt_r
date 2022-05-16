import React, {useContext,useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
     const a = useContext(NoteContext)

     useEffect(() => {
      
        a.update()
        // eslint-disable-next-line
     }, [])
     
  return (
    <div>About page <strong>{a.state.name}</strong>  and <strong>{a.state.class}</strong></div>
  )
}

export default About