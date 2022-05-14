import React, { useState } from 'react'
import './App.css'



const App = () => {
 const fullName = ['vinod', 'thapa']
 const bioData = [1, 24, 'male',...fullName]
//  console.log(fullName);
//  console.log(bioData);

let [a,b,...c] =['a','b','c','d','e']
let game2 =['f','g','h','i','j']
// console.log(game1+ game2);
// console.log(game1 , game2);
// console.log(...game1 , ...game2);
// console.log(a);
// console.log(b);
// console.log(c);

const fullNameObj ={
  fname: 'paras',
  lname: 'nothing'
}
const bioObj ={
  id: 1,
  age: 24,
  gender: 'male',
  ...fullNameObj

}

console.log(bioObj);
  return (
    <div >
     

    </div>
  )
}

export default App