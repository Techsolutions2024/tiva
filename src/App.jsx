import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ProcessFlow from './components/ProcessFlow';
import TechSpecs from './components/TechSpecs';
import UserStories from './components/UserStories';
import TechBlog from './components/TechBlog';
import CTA from './components/CTA';
import Footer from './components/Footer';

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

      <Footer />
    </div>
  );
}

export default App;
