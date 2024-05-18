import { useState } from "react";
import "./currency.css";

export const CurrencyComponent = ({ props }) => {
  const currency = ["USD", "EUR", "INR", "AUD"];
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState("INR");
  const [target, setTarget] = useState("USD");

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
    if(source === "USD" && target === "EUR" || source === "EUR" && target === "USD"){return (amount * props.eurusd).toFixed(2)}
    else if(source === "USD" && target === "INR" || source === "INR" && target === "USD"){return (amount * props.usdinr).toFixed(2)}
    else if(source === "USD" && target === "AUD" || source === "AUD" && target === "USD"){return (amount * props.audusd).toFixed(2)}
    else { return "ERROR!!"}
  }

      return (
      <div className="currency flex-d-col">
        <div className="font-30 bold text-center">
          Currency
        </div>

        <CurrencyDropDown value={source} currency={currency} id={"source"} set={setSource} title={"Source currency"} />

        <CurrencyDropDown value={target} currency={currency} id={"target"} set={setTarget} title={"Target currency"} />

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
      );
}

const CustomDropdown = () =>{
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