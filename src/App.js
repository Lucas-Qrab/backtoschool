import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'; // Assumes NavBar is in a separate file or defined above
import HeroSection from './HeroSection'; // Assumes HeroSection is either defined above or imported
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        {/* Définir les routes pour les composants */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
