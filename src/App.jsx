import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ProcessFlow from './components/ProcessFlow';
import TechSpecs from './components/TechSpecs';
import UserStories from './components/UserStories';
import TechBlog from './components/TechBlog';
import CTA from './components/CTA';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Solutions />
      <ProcessFlow />
      <TechSpecs />
      <UserStories />
      <TechBlog />
      <CTA />

      <footer style={{ backgroundColor: '#050505', color: '#555', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid #111' }}>
        <div className="container">
          <p>© 2024 AIoT Edge Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
