import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle initial hash scroll if navigating from another page
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    }, [location]);

    const navLinks = [
        { name: 'Who We Are', href: '#who-we-are', isHash: true },
        { name: 'Sponsors', href: '#sponsors', isHash: true },
        { name: 'Check Donate', href: '#donate', isHash: true }, // Renamed to clarify
        { name: 'Fundraiser', href: '/donations', isHash: false },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);

        if (!link.isHash) {
            navigate(link.href);
            return;
        }

        if (location.pathname !== '/') {
            navigate('/' + link.href);
            return;
        }

        const element = document.querySelector(link.href);
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group" onClick={(e) => {
                    if (location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    <Shield className="w-8 h-8 text-cyber-green group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-all" />
                    <span className="font-display font-bold text-xl md:text-2xl text-slate-light tracking-wide">
                        TEAM2 <span className="text-cyber-green">CYBER</span>PATRIOT
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`font-mono text-sm transition-colors ${link.isHash ? 'text-slate hover:text-cyber-green' : 'text-cyber-green hover:text-white font-bold'}`}
                        >
                            <span className="text-cyber-green mr-1">0{index + 1}.</span> {link.name}
                        </a>
                    ))}
                    <Link
                        to="/donations"
                        className="px-6 py-2 border-2 border-cyber-green text-cyber-green rounded hover:bg-cyber-green/10 transition-all font-mono text-sm ml-4"
                    >
                        Tracker
                    </Link>
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
                            onClick={(e) => handleNavClick(e, link)}
                            className="font-mono text-lg text-slate-light hover:text-cyber-green"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        to="/donations"
                        onClick={() => setIsOpen(false)}
                        className="px-8 py-3 border border-cyber-green text-cyber-green rounded bg-cyber-green/5 w-full text-center"
                    >
                        Tracker
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
