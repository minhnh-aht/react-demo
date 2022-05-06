import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StateAndData from './components/1_StateAndData';
import LifeCycle from './components/2_LifeCycle';
import Hooks from './components/3_Hooks';
import ReactRoute from './components/4_ReactRoute';
import MUI from './components/5_MUI';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateAndData /> */}
    {/* <LifeCycle /> */}
    {/* <Hooks /> */}
    {/* <BrowserRouter>
      <ReactRoute></ReactRoute>
    </BrowserRouter> */}
    <MUI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
dddds