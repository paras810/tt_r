import React, { createContext } from 'react'
import ComA from './components/ComA'

const firstName = createContext()
const Age = createContext()
const live = createContext()


const App = () => {
  return (
    <>
      <firstName.Provider value={'genius'} >
        <Age.Provider value={' 24 '}>
          <live.Provider value={'DELHI'}>

        <ComA />
       
        </live.Provider>
        </Age.Provider>
      </firstName.Provider>
    </>
  )
}

export default App
export { firstName , Age ,live}