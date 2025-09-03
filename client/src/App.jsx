import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Applications from './pages/Applications'
import RecuriterLogin from './components/RecuriterLogin'
import { AppContext } from './context/AppContext'

function App() {
  const {showRecuriterLogin} = useContext(AppContext);
  return (
       <div> 
        {showRecuriterLogin && <RecuriterLogin/>} 
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<Applyjob/>}/>
        <Route path='/applications' element={<Applications/>}/>
       </Routes>
      </div>       
  )
}

export default App
