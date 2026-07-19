import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Portfolio from './pages/Portfolio'
import ProjetoDetalhe from './pages/ProjetoDetalhe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/portfolio/:slug" element={<ProjetoDetalhe />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
