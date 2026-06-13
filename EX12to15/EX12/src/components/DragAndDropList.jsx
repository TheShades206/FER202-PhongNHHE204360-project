import  { useState } from "react";

function DragAndDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDrop = (dropIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => setDragIndex(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{ padding: "5px", cursor: "grab" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDropList;
