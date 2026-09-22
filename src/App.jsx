import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Financiamento from './pages/Financiamento'

import PixPage from './pages/PixPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financiamento" element={<Financiamento />} />
        <Route path="/area-pix" element={<PixPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
