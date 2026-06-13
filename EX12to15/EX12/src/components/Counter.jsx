import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="counter-card">
      <p className="counter-label"><b>Count : {count}</b></p>
      <button className="counter-btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;