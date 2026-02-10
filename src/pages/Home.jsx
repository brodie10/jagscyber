
import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Roadmap from '../components/Roadmap';
import Sponsors from '../components/Sponsors';
import Donate from '../components/Donate';

const Home = () => {
    return (
        <main>
            <Hero />
            <WhoWeAre />
            <Roadmap />
            <Sponsors />
            <Donate />
        </main>
    );
};

export default Home;
