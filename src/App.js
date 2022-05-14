import React, { useState } from 'react'
import './App.css'



const App = () => {
  const [fullName, setFullName] = useState(
    {
      fname: '',
      lname: '',
      email: '',
      number: ''
    }
  )

  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    // const value = e.target.value
    // const name = e.target.name
    const {value,name} = e.target

    setFullName((preValue) => {
      // console.log(preValue);
      if (name === 'fname') {
        return {
          fname: value,
          lname: preValue.lname,
          number: preValue.number,
          email: preValue.email
        }
      }

      else if (name === 'lname') {
        return {
          fname: preValue.fname,
          lname: value,
          number: preValue.number,
          email: preValue.email
        }
      }

      else if (name === 'email') {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          number: preValue.number
        }
      }

      else if (name === 'number') {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          number: value
        }
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
    number: ''
  })
  }


  return (
    <form className='div' onSubmit={onSumbit} >

      <h1> {`${fullName.fname} ${fullName.lname}`} </h1>
      <p style={{ color: 'blue' }}>{fullName.email}</p>
      <br />
      <div style={{ color: 'yellowgreen' }}> {fullName.number}</div>
      <input type="text" placeholder='enter your first name' onChange={inputEvent} value={fullName.fname} name="fname" autoComplete="off" />

      <input type="text" placeholder='enter your last name' onChange={inputEvent} value={fullName.lname} name="lname" autoComplete="off" />

      <input type="email" placeholder='enter  your email' name='email' onChange={inputEvent} value={fullName.email} autoComplete="off" />
      <input type="number" name="number" placeholder='enter your ph no.' onChange={inputEvent} value={fullName.number} autoComplete="off" />
      <button type='submit'>Sumbit</button>



    </form>
  )
}

export default App