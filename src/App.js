import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Router>
        <div>
          {/* Définir les routes pour les composants */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
    margin: 0;
`;