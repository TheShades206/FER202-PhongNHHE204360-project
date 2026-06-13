import { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('');

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '10px' }}>
      </div>
    </div>
  );
}

export default ColorSwitcher;