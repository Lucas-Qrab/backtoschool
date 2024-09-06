// components/Home.js
import React from 'react';
import styled from 'styled-components';

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
