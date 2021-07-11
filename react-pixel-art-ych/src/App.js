import React, {useState} from "react";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import {pure} from "recompose";
import html2canvas from "html2canvas";


const cellAmontList = [64,144,256,1024];
let  initialCells = Array.from({length:cellAmontList[0]}, () => ({
    color: '#ffffff',
}));

function App() {
  const [initGrid, setGrid] = useState("grid-8");
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState("#ff0000");
  const [colorHistory, setColorHistory] = useState([]);

  const onSetColor = (color) => {
    setColorHistory(colorHistory.slice(-7).concat(color));
  };

  const onSetGrid = (i, value) =>{
    setGrid(value);
    setCellAmount(i);
    setCells(initialCells);
  }

  const setCellAmount = (i) =>{
    initialCells=Array.from({length:cellAmontList[i]}, () => ({
    color: '#ffffff',
}));
  }
  
  const capture = (imageType) => {
    var data = document.getElementsByClassName('grid')[0];
    html2canvas(data).then((canvas)=>{
    var image = canvas.toDataURL('image/'+imageType, 1.0);
    var fileName = 'sexported-vis.'+imageType
    saveAs(image, fileName)
    })
  };
  
  const saveAs = (blob, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = blob;
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    }
    else {
      elem.target = '_blank';
      elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }
    
    URL.revokeObjectURL(elem.href);
    elem.remove();
  }

  return (
    <div className="app">
      <div>
        <button className="btnGrid" onClick={() => onSetGrid(0, "grid-8")}>8 X 8</button>
        <button className="btnGrid" onClick={() => onSetGrid(1, "grid-12")}>12 X 12</button>
        <button className="btnGrid" onClick={() => onSetGrid(2, "grid-16")}>16 X 16</button>
        <button className="btnGrid" onClick={() => onSetGrid(3, "grid-32")}>32 X 32</button>
      </div>
      <div className="pickerContainer">
        <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
        <button className="addList" onClick={() => onSetColor(currentColor)}>Add to List</button>
      </div>
      <div className="colorListContainer">
        {colorHistory.map((color,i) => (
          <div key={i} className="colorList" onClick={() => setCurrentColor(color)} style={{ background:color }}></div>
          ))}
      </div>
      <div className="gridWrap">
        <Grid currentColor={currentColor} cells={cells} setCells={setCells} initGrid={initGrid} />
        <div className="downloadContainer">
          <button className="button1" onClick={() => capture('jpg')}>Download as JPG</button>
          <button className="button2" onClick={() => capture('png')}>Download as PNG</button>
          <button className="button3" onClick={() => capture('gif')}>Download as GIF</button>
        </div>
      </div>         
    </div>
  );
}

export default pure(App);
