import React, { useState } from 'react';

function StateAndData(props) {
    const [color, setColor] = useState("black");

    return (
      <div>
        <div style={{backgroundColor: color, color: 'white'}}>{color}</div>
        <button onClick={() => setColor("red")}>Change to red</button>
        <button onClick={() => setColor("blue")}>Change to blue</button>
      </div>
    );
}

export default StateAndData;