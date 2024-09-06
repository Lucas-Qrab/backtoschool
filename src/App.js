import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'; // Assumes NavBar is in a separate file or defined above
import HeroSection from './HeroSection'; // Assumes HeroSection is either defined above or imported

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
