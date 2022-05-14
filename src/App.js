import React, { useState } from 'react'
import './App.css'



const App = () => {
  const [fullName, setFullName] = useState(
    {
      fname: '',
      lname: '',
      email: '',
      number: '',
      hobby: ''
    }
  )

  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    // const value = e.target.value
    // const name = e.target.name
    const {value,name} = e.target

    setFullName((preValue) => {
     return{
       ...preValue,
       [name]: value,
     }
      

    })
  }

  const onSumbit = (event) => {
    event.preventDefault()
    //  alert('form submitted')
   setFullName({
    fname: '',
    lname: '',
    email: '',
    number: '',
    hobby: ''
  })
  }


  return (
    <form className='div' onSubmit={onSumbit} >

      <p> {`${fullName.fname} ${fullName.lname}`} </p>
      <p style={{ color: 'blue' }}>{fullName.email}</p>
      <br />
      <p style={{ color: 'yellowgreen' }}> {fullName.number}</p>
      <p>{fullName.hobby}</p>
      <input type="text" placeholder='enter your first name' onChange={inputEvent} value={fullName.fname} name="fname" autoComplete="off" required/>

      <input type="text" placeholder='enter your last name' onChange={inputEvent} value={fullName.lname} name="lname" autoComplete="off"required />

      <input type="email" placeholder='enter  your email' name='email' onChange={inputEvent} value={fullName.email} autoComplete="off" required/>

      <input type="number" 
      name="number"
       placeholder='enter your ph no.'
        onChange={inputEvent}
         value={fullName.number} 
         autoComplete="off" required/>

      <input type="text" 
      name="hobby"
       placeholder='enter your hobby'
        onChange={inputEvent}
         value={fullName.hobby}
         autoComplete="off" required />


      <button type='submit'>Sumbit</button>



    </form>
  )
}

export default App