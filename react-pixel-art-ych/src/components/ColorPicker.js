import React from "react";

const ColorPicker = ({currentColor, setCurrentColor}) => {
    const colorChange = (event) =>{
        setCurrentColor(event.target.value);
    }

    return (
      <input className="colorPicker" type="color" onChange={colorChange} value={currentColor}/>
    );
};

export default ColorPicker;