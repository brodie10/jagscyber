import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Sponsors from './components/Sponsors';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy min-h-screen text-slate selection:bg-cyber-green selection:text-navy-dark">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Sponsors />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
