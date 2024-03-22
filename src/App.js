import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './registration'
import Login from './login';
import Home from './home';
import Chatbot from './Chatbot';

function App() {
  return (
    <div>
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
      <div>
        <h1>AI Chatbot</h1>
        <Chatbot />
      </div>
    </div>
  )
}

export default App

