import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SolutionPPE from './pages/SolutionPPE';
import SolutionRetail from './pages/SolutionRetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/ppe" element={<SolutionPPE />} />
          <Route path="/solutions/retail" element={<SolutionRetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
