import  { useState } from 'react'

const EX16 = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="demo-card">
      <h2>Exercise 16: Event Handling Demo</h2>
      <div className="clicker-section">
        <div className="counter-display-wrapper">
          <div className="counter-display">{count}</div>
          <div className="counter-label">Count</div>
        </div>
        <button className="action-btn" onClick={handleButtonClick}>
          Increase Count
        </button>
      </div>
    </div>
  )
}

export default EX16
