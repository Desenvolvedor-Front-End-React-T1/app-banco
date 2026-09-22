import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Financiamento from './pages/Financiamento'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financiamento" element={<Financiamento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
