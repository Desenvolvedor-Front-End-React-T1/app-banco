import { useState } from 'react'
import './App.css'
import Cliente from './components/Cliente'
import { sacar } from './services/conta'
function App() {

  const [saldo, setSaldo] = useState(1000.00)
  function handleSaque() {
    const novoSaldo = sacar(saldo, 100)
    setSaldo(novoSaldo)
  }

  return (
    <>
     <Cliente 
      nome="João da Silva" 
      email="joao.silva@example.com" 
      statusConta="Ativa" 
      valorConta={saldo}
      funcaoSaque={handleSaque} />
    </>
  )
}

export default App
