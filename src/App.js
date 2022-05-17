import './App.css';
import React from 'react'
import Navbar from './Navbar';
import Shop from './Shop';
import { useSelector } from 'react-redux';



const App = () => {
  const balance = useSelector(state=> state.amount)
  return (
    <>

      <Navbar />
      <div className='d-flex justify-content-center my-4'>
        <div className="btn btn-outline-primary">Balance {balance}</div>
      </div>
      <div className="container my-4">
        <Shop />
      </div>


    </>

  )
}

export default App
