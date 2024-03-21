import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './registration'
import Login from './login';
import Home from './home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

