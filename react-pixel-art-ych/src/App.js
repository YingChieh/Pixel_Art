import React, {useState} from "react";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [currentColor, setCurrentColor] = useState("#ff0000");

  return (
    <div className="app">
      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Grid currentColor={currentColor} />      
    </div>
  );
}

export default App;
