import React from "react";

const Elements = ({ elements, onDragStart }) => {
  return (
    <div className="box_wrapper mt-5">
      {elements.map((element, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => onDragStart(element)}
          className="box"
        >
          <p>{element}</p>
        </div>
      ))}
    </div>
  );
};

export default Elements;
