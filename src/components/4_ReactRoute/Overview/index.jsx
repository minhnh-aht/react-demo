import React from 'react';
import { Link, NavLink, Route, Routes, useHref } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ProductsList from './Pages/ProductsList';

const Overview = () => {
  const baseURL = useHref("");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Overview</h1>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <ul>
        <li>
          <strong>Normal link</strong>
        </li>
        <li>
          <a href={baseURL}>Overview</a>
        </li>
        <li>
          <a href={baseURL + '/home'}>HomePage</a>
        </li>
        <li>
          <a href={baseURL + '/products'}>Products</a>
        </li>
        <li>
          <a href={baseURL + '/about'}>AboutPage</a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>Link</strong>
        </li>
        <li>
          <Link to="">Overview</Link>
        </li>
        <li>
          <Link to="home">HomePage</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="about">AboutPage</Link>
        </li>
      </ul>

      <ul>
        <li>
          <strong>NavLink</strong>
        </li>
        <li>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="">Overview</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="home">HomePage</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="products">Products</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="about">AboutPage</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Overview;
