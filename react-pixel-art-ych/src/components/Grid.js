import React from 'react';

const Grid =({cells})=>{
    return(
        <div className="grid">
            {cells.map((_, i) => <div key={i} className="cell"></div>)}
        </div>
    )
};

export default Grid;