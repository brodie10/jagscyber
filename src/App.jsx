import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonationTracker from './pages/DonationTracker';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-navy min-h-screen text-slate selection:bg-cyber-green selection:text-navy-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<DonationTracker />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
