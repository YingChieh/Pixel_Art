import React, {useState} from 'react';

const Grid =()=>{
    const [cells]=useState(Array.from({length:64}));
    return(
        <div className="grid">
            {cells.map(() => <div className="cell"></div>)}
        </div>
    )
};

export default Grid;