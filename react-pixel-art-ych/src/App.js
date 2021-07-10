import React, {useState} from "react";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [currentColor, setCurrentColor] = useState("#FF0000");
  const [cells]=useState(Array.from({length:64}));

  return (
    <div className="app">
      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Grid cells={cells} />      
    </div>
  );
}

export default App;
