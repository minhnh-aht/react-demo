import React from 'react';
import useClock from '../../../hooks/useClock';

function UseCustom2() {
  const {timeString} = useClock();

  return (
    <>
      <h1>customHook2</h1>
      <p style={{ fontSize: '50px', color: 'red'}}>{timeString}</p>
    </>
  );
}

export default UseCustom2;
