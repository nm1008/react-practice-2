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

  function calculateDate() {
    const today = new Date();
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
    setStep(1);
  }

  const displayMessage = getDisplayMessage();

  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        Step: {step}
      </div>

      <div>
        <button onClick={minusCount}>-</button>

        <input
          type="text"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
        />
        <button onClick={addCount}>+</button>
      </div>

      <div>{displayMessage}</div>

      <div>
        <button
          style={count == 0 && step == 1 ? { visibility: "hidden" } : {}}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      
      {/* {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={reset}>Reset</button>
        </div>
        ) : null} */}
    </>
  );
}
