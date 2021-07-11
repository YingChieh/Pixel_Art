import React, {useState} from "react";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import {pure} from "recompose";

const cellAmont = [64,144,256,1024];
const initialCells = Array.from({length:cellAmont[0]}, () => ({
    color: '#ffffff',
}));

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState("#ff0000");
  const [colorHistory, setColorHistory] = useState([]);

  const onSetColor = (color) => {
    setColorHistory(colorHistory.slice(-7).concat(color));
  };

  return (
    <div className="app">
      <div className="pickerContainer">
        <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
        <button className="addList" onClick={() => onSetColor(currentColor)}>Add to List</button>
      </div>
      <div className="colorListContainer">
        {colorHistory.map((color,i) => (
          <div key={i} className="colorList" onClick={() => setCurrentColor(color)} style={{ background:color }}></div>
          ))}
      </div>
      
      <Grid currentColor={currentColor} cells={cells} setCells={setCells} />      
    </div>
  );
}

export default pure(App);
