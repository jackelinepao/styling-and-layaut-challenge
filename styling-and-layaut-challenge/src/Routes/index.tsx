import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';

export default function createRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
  );
}
