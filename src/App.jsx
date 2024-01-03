import { useState } from "react";
import "./App.css";
import Elements from "./Components/Elements";
import Keeper from "./Components/Keeper";

function App() {
  const elements = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragStart = (element) => {
    setDraggedElement(element);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("Dropped Element:", draggedElement);
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
