import React, { useEffect, useContext } from 'react'
import './index.css'
import Timer from './components/Timer'
import TopRight from './components/TopRight'
import Sidebar from './components/Sidebar'


const App = () => {
  const showSettings = false;
  return (
    <>
      <h1>EAGLE IS CHRISTIAN</h1>
      <TopRight />
      <Sidebar />
      { showSettings === false ?
      <>
        <Timer duration={25} />
      </>: <h1>TESTING</h1>}
      
    </>
  )
    
}

export default App