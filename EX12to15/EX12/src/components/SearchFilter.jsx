import { useState } from 'react';

function SearchFilter() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;