import React from 'react';
import { useLocation } from 'react-router-dom';

const UseLocation = () => {
    const location = useLocation();
    console.log("location: ", location);
    
    return (
      <div>
        <h1>useLocation</h1>
        <p>Current location is: {location.pathname}</p>
      </div>
    );
};

export default UseLocation;