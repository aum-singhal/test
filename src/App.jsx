import { useState } from 'react'
import './App.css'
import { MarketComponent } from './components/market/market'
import { CurrencyComponent } from './components/currency/currency'

function App() {
  const [eurusd , setEurusd] = useState(1.04);
  const [usdinr, setUsdinr] = useState(80.05);
  const [audusd, setAudusd] = useState(0.67);

  return (
    <div className='App flex-a-cen'>
      <MarketComponent eurusd={eurusd} setEurusd={setEurusd} usdinr={usdinr} setUsdinr={setUsdinr} audusd={audusd} setAudusd={setAudusd} />
      <CurrencyComponent eurusd={eurusd} usdinr={usdinr} audusd={audusd} />
    </ div>
  )
}

export default App
