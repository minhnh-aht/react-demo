import React, { useState } from 'react';
import UseCustom from './Custom';
import UseCustom2 from './Custom2';
import UseCallback from "./useCallback";
import UseEffect from "./useEffect";
import UseMemo from "./useMemo";
import UseState from "./useState";

Hooks.propTypes = {
  
};

function Hooks() {

  const [view, setView] = useState(0);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setView(0);
          }}
        >
          useState()
        </button>
        <button
          onClick={() => {
            setView(1);
          }}
        >
          useEffect()
        </button>
        <button
          onClick={() => {
            setView(2);
          }}
        >
          useCallback()
        </button>
        <button
          onClick={() => {
            setView(3);
          }}
        >
          useMemo()
        </button>
        <button
          onClick={() => {
            setView(4);
          }}
        >
          useCustom()
        </button>
      </div>

      {view === 0 && <UseState />}

      {view === 1 && <UseEffect />}

      {view === 2 && <UseCallback />}

      {view === 3 && <UseMemo />}

      {view === 4 && (
        <>
          <UseCustom />
          <UseCustom2 />
        </>
      )}
    </div>
  );
}

export default Hooks;
