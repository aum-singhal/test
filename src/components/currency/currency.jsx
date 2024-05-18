import { useState } from "react";
import "./currency.css";

export const CurrencyComponent = ( props ) => {
  const currency = ["USD", "EUR", "INR", "AUD"];
  const [showError, setShowError] = useState(false);
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState("USD");
  const [target, setTarget] = useState("INR");
  const [value, setValue] = useState(0);
  const [text, setText] = useState("")

  const getValue = () => {
    if (source === "EUR" && target === "USD") { setValue((amount / props.eurusd).toFixed(2)) }
    else if (source === "INR" && target === "USD") { setValue((amount / props.usdinr).toFixed(2)) }
    else if (source === "AUD" && target === "USD") { setValue((amount / props.audusd).toFixed(2)) }
    if (source === "USD" && target === "EUR") { setValue((amount * props.eurusd).toFixed(2)) }
    else if (source === "USD" && target === "INR") { setValue((amount * props.usdinr).toFixed(2)) }
    else if (source === "USD" && target === "AUD") { setValue((amount * props.audusd).toFixed(2)) }
    else if(source === target){setText("source and target currency cannot be the same"); setShowError(true)}
    else { setText("currency cannot be converted, please look at market again carefully!"); setShowError(true) }
  }

  const ErrorCard = () => {
    return <div className="error-card flex-a-cen-j-cen">
      <div className="error-container">
        <div onClick={()=>setShowError(false)} className="close">X</div>
        {text}
      </div>
    </div>
  }

  return (
    <div className="currency flex-d-col">
      {showError? <ErrorCard /> : ""}
      <div className="font-30 bold text-center">
        Currency
      </div>

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
        <div className="estimated-amount green-text">{value}</div>
      </div>

      <button onClick={() => getValue()} className="button bold font-21">Exchange</button>
    </div>
  );
}