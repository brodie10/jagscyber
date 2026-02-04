import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark border-t border-slate/10 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <div className="mb-8">
                    <span className="font-display font-bold text-xl text-slate-light">
                        JHS <span className="text-cyber-green">CYBER</span>PATRIOT
                    </span>
                </div>

                <div className="max-w-3xl mx-auto space-y-6 text-slate text-sm leading-relaxed opacity-80">
                    {/* Required Disclaimer */}
                    <p className="border-l-2 border-slate/20 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        "This website is maintained by the students and parents of the Team 2 CyberPatriot Team. It is a parent-organized initiative and is not an official website of North East Independent School District (NEISD). All funds are managed privately by the team treasurer to support student travel expenses."
                    </p>
                </div>

                <div className="mt-12 text-xs font-mono text-slate-dark">
                    &copy; {currentYear} Team 2 CyberPatriot Team. All System Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
