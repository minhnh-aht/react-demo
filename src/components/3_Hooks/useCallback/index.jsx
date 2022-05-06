import React, { useCallback, useEffect, useState } from 'react';

UseCallback.propTypes = {};

function UseCallback(props) {
  const [isChange, setIsChange] = useState(true);

  // const getDateNow = () => {
  //   let date = new Date();
  //   let result = '';
  //   result += date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + (date.getHours() + 1) + ':' + date.getMinutes() + ':' + date.getSeconds();

  //   console.log(result);
  // };
  const getDateNow = useCallback(() => {
    let date = new Date();
    let result = '';
    result += date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + (date.getHours() + 1) + ':' + date.getMinutes() + ':' + date.getSeconds();

    console.log(result);
  }, []);

  useEffect(() => {
    console.log('getDateNow is change');
  }, [getDateNow]);

  useEffect(() => {
    console.log('Rerender!');
  });

  return (
    <>
      <h1>useCallback</h1>
      <button onClick={getDateNow}>Get datetime</button>
      <button
        onClick={() => {
          setIsChange(!isChange);
        }}
      >
        Rerender
      </button>
    </>
  );
}

export default UseCallback;
