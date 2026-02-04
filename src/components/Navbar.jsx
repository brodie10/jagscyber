import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Who We Are', href: '#who-we-are' },
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'Donate', href: '#donate' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            // Offset for sticky header
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, '#hero')}>
                    <Shield className="w-8 h-8 text-cyber-green group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-all" />
                    <span className="font-display font-bold text-xl md:text-2xl text-slate-light tracking-wide">
                        TEAM2 <span className="text-cyber-green">CYBER</span>PATRIOT
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="font-mono text-sm text-slate hover:text-cyber-green transition-colors"
                        >
                            <span className="text-cyber-green mr-1">0{navLinks.indexOf(link) + 1}.</span> {link.name}
                        </a>
                    ))}
                    <a
                        href="#sponsors"
                        onClick={(e) => scrollToSection(e, '#sponsors')}
                        className="px-6 py-2 border-2 border-cyber-green text-cyber-green rounded hover:bg-cyber-green/10 transition-all font-mono text-sm ml-4"
                    >
                        Sponsor Us
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cyber-green focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy-dark border-t border-slate-dark p-6 flex flex-col items-center gap-6 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="font-mono text-lg text-slate-light hover:text-cyber-green"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#sponsors"
                        onClick={(e) => scrollToSection(e, '#sponsors')}
                        className="px-8 py-3 border border-cyber-green text-cyber-green rounded bg-cyber-green/5 w-full text-center"
                    >
                        Sponsor Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
