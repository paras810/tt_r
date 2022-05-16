import './App.css';
import React from 'react'
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';




const App = () => {
  return (
    <>

      <NoteState>
          <Navbar />
            
         <Home/>
         <About/>
      </NoteState>

    </>

  )
}

export default App
