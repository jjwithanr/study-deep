import React, { useEffect, useContext } from 'react'
import Timer from './components/Timer'
import Settings from './components/Settings'

const App = () => {
  return (
    <div>
      <h1>Deep-Study</h1>
      <Timer duration={25} />
    </div>
  )
    
}

export default App