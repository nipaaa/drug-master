import React, { useState } from "react";

const Keeper = ({ onDrop, draggedElement }) => {
  const [roundBoxContent, setRoundBoxContent] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropInternal = (event, index) => {
    event.preventDefault();

    // Update the state to show the dropped element in the specific round box
    setRoundBoxContent({
      ...roundBoxContent,
      [index]: draggedElement,
    });

    // Additional logic for handling the drop in the Keeper component
    onDrop();
  };

  return (
    <div onDragOver={handleDragOver} className="keeper mt-5">
      <div className="d-flex gap-5 m-2 justify-content-center">
        <div onDrop={(event) => handleDropInternal(event, 1)} className="round_box">
          {roundBoxContent[1]}
        </div>
        <div onDrop={(event) => handleDropInternal(event, 2)} className="round_box">
          {roundBoxContent[2]}
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex flex-column gap-5">
          <div onDrop={(event) => handleDropInternal(event, 3)} className="round_box">
            {roundBoxContent[3]}
          </div>
          <div onDrop={(event) => handleDropInternal(event, 4)} className="round_box me-3">
            {roundBoxContent[4]}
          </div>
          <div onDrop={(event) => handleDropInternal(event, 5)} className="round_box">
            {roundBoxContent[5]}
          </div>
        </div>
        <div className="round_inner"></div>
        <div className="d-flex flex-column gap-5">
          <div onDrop={(event) => handleDropInternal(event, 6)} className="round_box">
            {roundBoxContent[6]}
          </div>
          <div onDrop={(event) => handleDropInternal(event, 7)} className="round_box ms-3">
            {roundBoxContent[7]}
          </div>
          <div onDrop={(event) => handleDropInternal(event, 8)} className="round_box">
            {roundBoxContent[8]}
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 m-2 justify-content-center">
        <div onDrop={(event) => handleDropInternal(event, 9)} className="round_box ">
          {roundBoxContent[9]}
        </div>
        <div onDrop={(event) => handleDropInternal(event, 10)} className="round_box">
          {roundBoxContent[10]}
        </div>
      </div>
    </div>
  );
};

export default Keeper;
