import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/auth';
import {Route, Routes, redirect } from 'react-router-dom';
function App() {

  return (
    <Routes>
       <Route path='/login' element={<Auth/>}/>
       <Route path='/dashboard' element={null}/>
    </Routes>
  )
}

export default App
