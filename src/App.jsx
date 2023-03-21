import { useState } from 'react'
import './App.css'
import AppMesa13 from './components/13clase/AppMesa13'
import AppClase14 from './components/14clase/AppClase14'
import AppClase15 from './components/15clase/AppClase15'
import AppFood from './components/food-recipies/AppFood'
function App() {

  return (
    <div className="App">
      {/* <AppMesa13/> */}
      {/* <AppClase14/> */}
      {/* <AppFood/> */}
      <AppClase15/>
    </div>
  )
}

export default App
