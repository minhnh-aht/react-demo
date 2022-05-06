import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseNavigate = () => {
  const navigate = useNavigate();

  const handleClickGoHome = () => {
    navigate('/');
  };
  
  const handleClickGoHooks = () => {
    navigate('/routehooks');
  };

  return (
    <div>
      <h1>UseNavigate</h1>
      <button type="button" onClick={handleClickGoHome}>
        Back to home
      </button>
      <button type="button" onClick={handleClickGoHooks}>
        Go to RouteHooks
      </button>
    </div>
  );
};

export default UseNavigate;
