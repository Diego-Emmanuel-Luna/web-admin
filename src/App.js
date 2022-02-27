import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Administrators from './Pages/Administrators'

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Administrators/>} />
          <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </Router>
  );
}

