import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import TypingEffect from './TypingEffect';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
    const scrollToSponsors = () => {
        const element = document.querySelector('#sponsors');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 bg-navy z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,34,64,0.7),rgba(10,25,47,1))]"></div>
                <ParticlesBackground />
                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#CCD6F6 1px, transparent 1px), linear-gradient(90deg, #CCD6F6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="z-10 text-center max-w-5xl px-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green font-mono text-sm mb-6">
                    <Terminal size={14} />
                    <TypingEffect text="Target Acquired: Washington D.C." />
                </div>

                <h2 className="text-slate text-lg md:text-xl font-mono mb-4 tracking-wider">
                    NATIONAL FINALISTS: 2025 & 2026
                </h2>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-light mb-8 leading-tight">
                    Team 2 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-blue-500">
                        CyberPatriot Team
                    </span>
                </h1>

                <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Representing San Antonio's future in cybersecurity.
                    We are one of the top 12 teams in the nation, defending our title.
                </p>

                <button
                    onClick={scrollToSponsors}
                    className="group relative px-8 py-4 bg-transparent text-cyber-green font-mono font-bold text-lg border-2 border-cyber-green rounded hover:bg-cyber-green/10 transition-all duration-300"
                >
                    <span className="flex items-center gap-3">
                        Sponsor Our Trip to D.C.
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded shadow-[0_0_20px_rgba(100,255,218,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 animate-bounce">
                <span className="text-slate text-xs font-mono writing-vertical">SCROLL_DOWN</span>
            </div>
        </section>
    );
};

export default Hero;
