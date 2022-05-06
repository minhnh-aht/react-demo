import React from 'react';
import useClock from '../../../hooks/useClock';

function UseCustom() {
  const {timeString} = useClock();

  return (
    <>
      <h1>customHook</h1>
      <p style={{ fontSize: '50px' }}>{timeString}</p>
    </>
  );
}

export default UseCustom;
