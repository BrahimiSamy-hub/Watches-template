import { useEffect } from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    })
  }, [])

  return (
    <Router>
      <div className='h-screen flex flex-col bg-n-1'>
        <Navbar />
        <div className='flex-grow mt-24'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
