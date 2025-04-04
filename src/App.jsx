import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './pages/Nav.jsx';
import TradingSim from './pages/TradingSim.jsx'; 

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<><Nav /><Hero /><Projects /><Skills /><Contact /></>} />
          <Route path="/tradingsim" element={<TradingSim />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
