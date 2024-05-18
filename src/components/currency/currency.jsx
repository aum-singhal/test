import { useState } from "react";
import "./currency.css";

export const CurrencyComponent = ( props ) => {
  const currency = ["USD", "EUR", "INR", "AUD"];
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState("INR");
  const [target, setTarget] = useState("USD");
  const [value, setValue] = useState(0);

  const CurrencyDropDown = (props) => {
    return <div className="currency-dropdown">
      <div className="font-15">{props.title}</div>

      <select value={props.value} onChange={e => props.set(e.target.vlaue)} name={props.id} id={props.id}>
        {currency.map(item => {
          return <option value={item} key={item}>{item}</option>
        })}
      </select>
    </div>
  }

  const getValue = () => {
    if (source === "USD" && target === "EUR" || source === "EUR" && target === "USD") { setValue((amount * props.eurusd).toFixed(2)) }
    else if (source === "USD" && target === "INR" || source === "INR" && target === "USD") { setValue((amount * props.usdinr).toFixed(2)) }
    else if (source === "USD" && target === "AUD" || source === "AUD" && target === "USD") { setValue((amount * props.audusd).toFixed(2)) }
    else { return "ERROR!!" }
  }

  return (
    <div className="currency flex-d-col">
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

const CustomDropdown = () => {
  return <div className="dropdown">
    <div onClick={(e) => { setIsActive(!isActive); }} className="dropdown-btn">
      {props.value}
      <span className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"} />
    </div>
    <div className="dropdown-content" style={{ display: isActive ? "block" : "none" }}>
      {
        currency.map((item, index) => {
          return (
            <div key={index} onClick={(e) => {
              props.set(e.target.textContent); setIsActive(!isActive);
            }} className="dropdown-item">{item}</div>
          )
        })
      }
    </div>
  </div>
}