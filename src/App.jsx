/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  return (
    <>
      <h1 className="text-3xl font-bold bg-orange-500">Currency app</h1>
    </>
  );
}

export default App;
