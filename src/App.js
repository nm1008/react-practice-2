import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function minusCount() {
    setCount((c) => c - step);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  function minusStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function calculateDate() {
    const today = new Date();
    console.log(today.getFullYear())
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + count);
    
    return targetDate.toDateString();
  }

  function getDisplayMessage() {
    if (count > 0) {
      return `${count} days from today is ${calculateDate()}`;
    } else if (count < 0) {
      return `${-count} days ago was ${calculateDate()}`;
    } else {
      return `Today is ${calculateDate()}`;
    }
  }
  function reset() {
    setCount(0);
  }

  const displayMessage = getDisplayMessage();

  return (
    <>
      <div>
        <button onClick={minusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={addStep}>+</button>
      </div>

      <div>
        <button onClick={minusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={addCount}>+</button>
      </div>

      <div>{displayMessage}</div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
