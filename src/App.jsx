import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
