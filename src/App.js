import React, { useState } from 'react'
import './App.css'



const App = () => {
  const [fullName, setFullName] = useState(
    {
      fname:'',
      lname: ''
    }
  )

const inputEvent=(e)=>{
console.log(e.target.value);
console.log(e.target.name);

const value = e.target.value
const name = e.target.name

setFullName((preValue)=>{
  // console.log(preValue);
  if (name === 'fname') {
   return{
     fname:value,
    lname: preValue.lname
   }
  }
  
  else if (name === 'lname') {
    return{
      fname: preValue.fname,
     lname: value
    }
   }
})
}

const onSumbit =(event)=>{
  event.preventDefault()
//  alert('form submitted')s
 setFullName({
  fname:'',
  lname: ''
 })
}


  return (
    <form className='div' onSubmit={onSumbit} >

     <h1> {`${fullName.fname} ${fullName.lname}`} </h1>
     <input type="text" placeholder='enter your first name'  onChange={inputEvent}  value={fullName.fname} name="fname"/>

     <input type="text" placeholder='enter your last name'  onChange={inputEvent} value={fullName.lname}  name="lname"/>
     <button type='submit'>Sumbit</button>



    </form>
  )
}

export default App