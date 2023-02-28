import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Components/Admin/Admin'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'


function App() {


  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Routes>
        
        <Route path='/admin' element={<Home/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
