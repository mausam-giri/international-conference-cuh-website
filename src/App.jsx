import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App relative">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App
