import React from 'react';
import './index.css'

export default function Counter() {
  let [counter, setCounter] = React.useState(0);
  let [inpValue, setInpValue] = React.useState(1);

  const add = () => {
    setCounter(counter + inpValue);
  }

  const sub = () => {
    setCounter(counter - inpValue);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className="controls">
        <button onClick={add}>+</button>
        <input aria-label="counterInput" type="number" value={inpValue} onChange={(e) => setInpValue(+(e.target.value))} />
        <button onClick={sub}>-</button>
      </div>
    </div>
  )
}