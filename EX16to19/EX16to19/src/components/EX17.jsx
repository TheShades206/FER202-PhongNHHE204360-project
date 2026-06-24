import { useState } from 'react'

const EX17 = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="demo-card">
      <h2>Exercise 17: Render and Commit Demo</h2>
      <div className="clicker-section">
        <div className="counter-display-wrapper">
          <div className="counter-display">{count}</div>
          <div className="counter-label">Count</div>
        </div>
        <button className="action-btn" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default EX17
