import './App.css';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNum, decNum } from './actions/index'


const App = () => {
  const myState = useSelector((e)=> e.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <h1>increment/decrement counter</h1>
        <h4>using react and redux</h4>

        <div className="container my-4">
          <button className="btn btn-info mx-3" title='Decrement' onClick={()=>{dispatch(decNum(5))}}>-</button>
          <input name='quantity' type="text"  value={myState}/>
          <button className="btn btn-info mx-3" title='Increment' onClick={()=>{dispatch(incNum(5))}} >+</button>
        </div>
      </div>
    </>

  )
}

export default App
