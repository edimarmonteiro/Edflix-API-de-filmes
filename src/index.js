import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Detail from './pages/especial/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/detail/:id' element={ <Detail/> }/>
    </Routes>
  </BrowserRouter>
);

