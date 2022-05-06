import React, { useEffect, useState } from 'react';

UseEffect.propTypes = {};

function formatDate(date) {
  if (!date) return '';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  
  return `${hours}:${minutes}:${seconds}`;
}

function UseEffect() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);
    
    // return () => {
    //   clearInterval(clockInterval);
    // }
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <p style={{fontSize: '50px'}}>{timeString}</p>
    </>
  );
}

export default UseEffect;
