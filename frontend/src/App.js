import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Login from './components/login.js';
import Register from './components/register.js';
import UploadImg from './components/uploadImg.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={ <UploadImg />} />
      </Routes>
    </div>
  )
}

export default App