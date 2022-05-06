import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UseLocation from './UseLocation';
import UseNavigate from './UseNavigate';
import UseParams from './UseParams';

const RouteHooks = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<h1>RouteHooks</h1>} />
          <Route path="/uselocation" element={<UseLocation />} />
          <Route path="/usenavigate" element={<UseNavigate />} />
          <Route path="useparams">
            <Route path="" element={<UseParams />} />
            <Route path=":id" element={<UseParams id='123' />} />
          </Route>
        </Routes>

        <nav>
          <hr />
          <ul>
            <li>
              <Link to="">RouteHooks</Link>
            </li>
            <li>
              <Link to="uselocation">UseLocation</Link>
            </li>
            <li>
              <Link to="usenavigate">UseNavigate</Link>
            </li>
            <li>
              <Link to="useparams">UseParams</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default RouteHooks;