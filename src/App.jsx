import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [eurusd, setEurusd] = useState(1.04);
  const [usdinr, setUsdinr] = useState(80.05);
  const [audusd, setAudusd] = useState(0.67);
  const currency = ["USD", "EUR", "INR", "AUD"];
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState("INR");
  const [target, setTarget] = useState("USD");
  const marketRates = [
    { currency: "EUR/USD", amount: eurusd },
    { currency: ".USD/INR", amount: usdinr },
    { currency: "AUD/USD", amount: audusd }
  ]

  useEffect(() => {
    let id;
    const api = () => {
      let temp = ((Math.random() * 6) - 3) / 100;
      setEurusd(eurusd + (eurusd * temp));
      setUsdinr(usdinr + (usdinr * temp));
      setAudusd(audusd + (audusd * temp));
      id = setTimeout(api, 1000);
    };
    api();
    return () => {
      clearTimeout(id);
    };
  }, [])

  const getValue = () => {
    if (source === "USD" && target === "EUR" || source === "EUR" && target === "USD") { return (amount * eurusd).toFixed(2) }
    else if (source === "USD" && target === "INR" || source === "INR" && target === "USD") { return (amount * usdinr).toFixed(2) }
    else if (source === "USD" && target === "AUD" || source === "AUD" && target === "USD") { return (amount * audusd).toFixed(2) }
    else { return "ERROR!!" }
  }

  const CurrencyDropDown = (props) => {
    return <div className="currency-dropdown">
      <div className="font-15">{props.title}</div>

      <select value={props.value} onChange={e => props.set(e.target.value)} name={props.id} id={props.id}>
        {currency.map(item => {
          return <option value={item} key={item}>{item}</option>
        })}
      </select>
    </div>
  }

  return (
    <div className='App flex-a-cen'>
      <div className="market flex-d-col">
        <div className="font-30 bold">Market</div>

        <table className="market-chart">
          {marketRates.map((item, index) => {
            return (
              <tr className="market-chart-item" key={index}>
                <td className="market-chart-item-currency">{item.currency}</td>
                <td className="market-chart-item-amount">{item.amount.toFixed(2)}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="currency flex-d-col">
        <div className="font-30 bold text-center">
          Currency
        </div>

        {/* <CurrencyDropDown value={source} currency={currency} id={"source"} set={setSource} title={"Source currency"} />

        <CurrencyDropDown value={target} currency={currency} id={"target"} set={setTarget} title={"Target currency"} /> */}

        <div className="currency-dropdown">
          <div className="font-15">Source Currency</div>

          <select value={source} onChange={e => setSource(e.target.value)} name="source-drop" >
            {currency.map(item => {
              return <option value={item} key={item}>{item}</option>
            })}
          </select>
        </div>

        <div className="currency-dropdown">
          <div className="font-15">Target currency</div>

          <select value={target} onChange={e => setTarget(e.target.value)} name="target-drop" >
            {currency.map(item => {
              return <option value={item} key={item}>{item}</option>
            })}
          </select>
        </div>

        <div className="amount">
          <div className="font-15">Amount</div>
          <input name="amount" onChange={(e) => setAmount(e.target.value)} type="number" placeholder="0.00" />
        </div>

        <div className="estimation flex">
          <div className="font-15">Estimated converted amount:</div>
          &nbsp;&nbsp;
          <div className="estimated-amount green-text">{show ? getValue() : "0.00"}</div>
        </div>

        <button onClick={() => setShow(true)} className="button bold font-21">Exchange</button>
      </div>
    </ div>
  )
}

export default App
