import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [inputData, setInputData] = useState("")
  const ValueClick = (index) => {
    setInputData(prev => prev + index);
  };
  const ActionClick = (op) => {
    if (inputData === "" && op !== "-") return;

    const last = inputData.slice(-1);
    if ("+-*/".includes(last)) return;

    if (op === "=") {
      try {
        setInputData(String(eval(inputData)));
      } catch {
        setInputData("Error");
      }
      return;
    }

    setInputData(prev => prev + op);
  };
  const Action2Click = (item) => {
    if (item === "AC") {
      setInputData("");
    }
    else if (item === "Del") {
      setInputData(prev => prev.slice(0, -1));
    }
    else if (item === "%") {
      setInputData(inputData / 100)
    }
  };


  return (
    <>
      <div className="glass-calc">
        <div className="glass-top">
          <h1>{inputData || "0"}</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div className="glass-keys">
            {["AC", "Del", "%"].map((item, i) => (<button key={i} className="btn light" onClick={() => Action2Click(item)}>{item}</button>))}
            {["7", "8", "9"].map(n => <button key={n} className="btn" onClick={() => ValueClick(n)}>{n}</button>)}
            {["4", "5", "6"].map(n => <button key={n} className="btn" onClick={() => ValueClick(n)}>{n}</button>)}
            {["1", "2", "3"].map(n => <button key={n} className="btn" onClick={() => ValueClick(n)}>{n}</button>)}
            <button className="btn zero" onClick={() => ValueClick("0")}>0</button>
            <button className="btn" onClick={() => ValueClick(".")}>.</button>
          </div>
          <div>
            {["/", "*", "-", "+", "="].map(n => <button key={n} className="btn action" onClick={() => ActionClick(n)}>{n}</button>)}
          </div>
        </div>
      </div>
    </>
  )
}
export default App
