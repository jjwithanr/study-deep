import React, { useEffect, useContext } from 'react'
import Timer from './components/Timer'
import Navbar from './components/Navbar'

const App = () => {
  const showSettings = false;
  return (
    <>
      <Navbar />
      { showSettings === false ?
      <>
        <Timer duration={25} />
      </>: <h1>TESTING</h1>}
      
    </>
  )
    
}

export default App