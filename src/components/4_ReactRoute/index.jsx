import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import RouteHooks from './RouteHooks';

const ReactRoute = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>React Routing</h1>} />
        <Route path="/overview/*" element={<Overview />} />
        <Route path="/routehooks/*" element={<RouteHooks />} />
      </Routes>

      <nav>
        <hr />
        <ul>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="routehooks">RouteHooks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReactRoute;
