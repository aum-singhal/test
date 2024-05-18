import { useEffect } from "react";
import "./market.css";

export const MarketComponent = (props) => {
  const marketRates = [
    {currency: "EUR/USD", amount: props.eurusd},
    {currency: ".USD/INR", amount: props.usdinr},
    {currency: "AUD/USD", amount: props.audusd}
  ]

  useEffect(() => {
    let id;
    const api = () => {
      
      let temp = ((Math.random() * 6)-3)/ 100;
      props.setEurusd(props.eurusd + (props.eurusd * temp));
      props.setUsdinr(props.usdinr + (props.usdinr * temp));
      props.setAudusd(props.audusd + (props.audusd * temp));
      id = setTimeout(api, 1000);
    };
    api();
    return () => {
     clearTimeout(id);
    };
   }, [])
   
  return (
    <div className="market flex-d-col">
      <div className="font-30 bold">Market</div>

      <table className="market-chart">
        {marketRates.map((item, index)=>{
          return (
            <tr className="market-chart-item" key={index}>
              <td className="market-chart-item-currency">{item.currency}</td>
              <td className="market-chart-item-amount">{item.amount.toFixed(2)}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}