import React from 'react';
import { useParams } from 'react-router-dom';

const UseParams = ({id}) => {
    const myParams = useParams();
    console.log("myParams: ", myParams);

    return (
      <div>
        <h1>useParams</h1>
        {id && <h1>Id: {id}</h1>}
      </div>
    );
};

export default UseParams;