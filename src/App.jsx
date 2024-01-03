import React, { useState } from "react";
import "./App.css";
import Elements from "./Components/Elements";
import Keeper from "./Components/Keeper";

function App() {
  const initialElements = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [elements, setElements] = useState(initialElements);
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragStart = (element) => {
    setDraggedElement(element);
  };

  const handleDrop = () => {
    // Update the elements state by removing the dragged element
    const updatedElements = elements.filter((el) => el !== draggedElement);
    setElements(updatedElements);

    setDraggedElement(null); // Reset the dragged element after drop
  };

  return (
    <div>
      <Elements elements={elements} onDragStart={handleDragStart} />
      <Keeper onDrop={handleDrop} draggedElement={draggedElement} />
    </div>
  );
}

export default App;
