import React from 'react';

const Grid =({currentColor, cells, setCells, initGrid})=>{
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
        <div className={"grid " + initGrid}>
            {cells.map((cell, i) => (
                <div key={i} style={{background: cell.color}} className="cell" onClick={updateCell(i)}></div>
            ))}
        </div>
    )
};

export default Grid;