import React, { useState } from 'react';

UseState.propTypes = {};

function UseState(props) {
  const [color, setColor] = useState('white');

  function handleBoxClick1() {
    setColor('deeppink');
  }

  function handleBoxClick2() {
    setColor('green');
  }

  return (
    <>
      <h1>useState</h1>
      <button className="color-box" onClick={handleBoxClick1}>
        deeppink
      </button>
      <button className="color-box" onClick={handleBoxClick2}>
        green
      </button>
      <div style={{ backgroundColor: color }}>Hello world</div>
    </>
  );
}

export default UseState;
