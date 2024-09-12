import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './dashboard/component/card/Card'
import Button from './dashboard/component/button/Button'
import Line from './dashboard/component/graph/Line'
import Bar from './dashboard/component/graph/Bar'
import Dashboard from './dashboard/Dashboard'
import Stats from './dashboard/component/stats/Stats'
import Daily from './dashboard/component/daily/Daily'
import Navbar from './component/navbar/Navbar'
import DropDowm from './dashboard/component/DropDowm'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/card' element={<Card/>}/>
        <Route path='/button' element={<Button/>}/>
        <Route path='/line' element={<Line/>}/>
        <Route path='/bar' element={<Bar/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/daily' element={<Daily/>}/>
        <Route path='/nav' element={<Navbar/>}/>
        <Route path='/dropdown' element={<DropDowm/>}/>






       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
