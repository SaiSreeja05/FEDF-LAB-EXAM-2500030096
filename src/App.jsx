//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

import { BrowserRouter } from "react-router-dom"
import NavBar from "./exam/NavBar"

function App() {
  return (
    <div>
      <h2 style={{textAlign:"center", color:"green"}}><u>Farmers Registration</u></h2>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
