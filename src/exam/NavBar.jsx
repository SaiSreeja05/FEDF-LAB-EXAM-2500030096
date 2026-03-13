import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import RegisteredFarmers from './RegisteredFarmers'
import ApiDemo from './ApiDemo'

export default function NavBar() {
  return (
    <div>
      <Link to="/" style={{marginRight:"20px"}}>Home</Link>
      <Link to="registration" style={{marginRight:"20px"}}>Registration</Link>
      <Link to="registeredfarmers" style={{marginRight:"20px"}}>RegisteredFarmers</Link>
      <Link to="apidemo">API Demo</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/registeredfarmers' element={<RegisteredFarmers/>}/>
          <Route path='/apidemo' element={<ApiDemo/>}/>
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
    </div>
  )
}
