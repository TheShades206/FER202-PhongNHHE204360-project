import { useState } from 'react'

const EX18 = () => {
  const [count, setCount] = useState(0)
  const [snapshot, setSnapshot] = useState(null)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleSnapshot = () => {
    setSnapshot(count)
  }

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot)
    }
  }

  return (
    <div className="demo-card">
      <h2>Exercise 18: State as a Snapshot Demo</h2>
      <div className="clicker-section">
        <div className="counter-display-wrapper">
          <div className="counter-display">{count}</div>
          <div className="counter-label">Count</div>
        </div>
        
        <p style={{ margin: '15px 0', fontSize: '1rem', color: 'var(--text)' }}>
          Saved Snapshot: {snapshot !== null ? <strong style={{ color: '#0d9488', fontSize: '1.2rem' }}>{snapshot}</strong> : 'None'}
        </p>

        <div className="button-group">
          <button className="action-btn" onClick={handleIncrement}>
            Increment
          </button>
          <button className="snapshot-btn" onClick={handleSnapshot}>
            Take Snapshot
          </button>
          <button 
            className="restore-btn" 
            onClick={handleRestore}
            disabled={snapshot === null}
            style={{ opacity: snapshot === null ? 0.5 : 1 }}
          >
            Restore Snapshot
          </button>
        </div>
      </div>
    </div>
  )
}

export default EX18
