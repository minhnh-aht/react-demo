import React, { useEffect, useMemo, useState } from 'react';

UseMemo.propTypes = {};

function UseMemo(props) {
  const [isChange, setIsChange] = useState(true);

  // const myVar = ['my var'];
  const myVar = useMemo(() => ['my var'], []);

  useEffect(() => {
    console.log('my var is change');
  }, [myVar]);

  useEffect(() => {
    console.log('Rerender!');
  });

  return (
    <>
      <h1>useCallback</h1>
      <div>{myVar[0]}</div>
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

export default UseMemo;
