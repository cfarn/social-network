
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App