import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import '../src/App.css'
import About from './components/About'
import Contact from './components/Contact';
import Error from './components/Error';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {



  return (
    <>

     <BrowserRouter>
     {/* <Navbar/> */}
     <Routes>

 
      <Route exact path='/' element={<Navbar/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />

      {/* both are working properly */}
      {/* <Route path='/*' element={<Error/>} /> */}
      <Route path='*' element={<Error/>} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App