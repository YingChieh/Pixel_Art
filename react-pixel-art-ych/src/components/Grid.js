import React, {useState} from 'react';

const initialCells =Array.from({length:64}, () => ({
    color: '#ffffff',
}));

const Grid =({currentColor})=>{
    const [cells, setCells] = useState(initialCells);
    const updateCell = (i) => () => {
        setCells(cells.map((cell, cellIndex) => {
            if(cellIndex === i){
                //set to currentColor
                return {color: currentColor,}
            }
            return cell;
        }))
    };
    return(
        <div className="grid">
            {cells.map((cell, i) => (
                <div key={i} style={{background: cell.color}} className="cell" onClick={updateCell(i)}></div>
            ))}
        </div>
    )
};

export default Grid;