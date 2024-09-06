// components/Home.js
import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return(
    <Container>
        <NavBar/>
        <HeroSection/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
    margin: 0;
    background-color: #000000;
`;
