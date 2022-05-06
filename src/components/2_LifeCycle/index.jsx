import React, { useState } from 'react';
import ComponentDidMount from './componentDidMount';
import ComponentDidUpdate from './componentDidUpdate';
import ComponentWillUnmount from './componentWillUnmount';

function LifeCycle() {
  const [view, setView] = useState(0);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setView(0);
          }}
        >
          ComponentDidMount
        </button>
        <button
          onClick={() => {
            setView(1);
          }}
        >
          ComponentDidUpdate
        </button>
        <button
          onClick={() => {
            setView(2);
          }}
        >
          ComponentWillUnmount
        </button>
      </div>

      {view === 0 && <ComponentDidMount />}

      {view === 1 && <ComponentDidUpdate />}

      {view === 2 && <ComponentWillUnmount />}
    </>
  );
}

export default LifeCycle;
