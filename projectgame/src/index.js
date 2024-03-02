import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetail from './ProductDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './Login';
// import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element = {<App />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
