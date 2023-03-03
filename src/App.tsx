import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Admin from './Components/Admin/Admin'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {


  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
