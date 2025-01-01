import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import HomePage from './pages/HomePage';
import DiagnosticPage from './pages/DiagnosticPage';
import TypeSelectionPage from './pages/TypeSelectionPage';
import ContactPage from './pages/ContactPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/type-selection/:applianceId" element={<TypeSelectionPage />} />
        <Route path="/diagnostic/:applianceId" element={<DiagnosticPage />} />
        <Route path="/diagnostic/:applianceId/:type" element={<DiagnosticPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App