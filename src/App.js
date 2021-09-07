import React, { useEffect, useContext } from 'react'
import Timer from './components/Timer'
import TopRight from './components/TopRight'

const App = () => {
  const showSettings = false;
  return (
    <>
      <TopRight />
      { showSettings === false ?
      <>
        <Timer duration={25} />
      </>: <h1>TESTING</h1>}
      
    </>
  )
    
}

export default App