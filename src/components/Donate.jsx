import React, { useState } from 'react';
import { Copy, Mail, AlertTriangle, Check } from 'lucide-react';

const Donate = () => {
    const [copied, setCopied] = useState(false);
    const email = "contact@jagscyber.com"; // Placeholder email

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="donate" className="py-24 bg-navy relative flex items-center justify-center">
            <div className="max-w-3xl w-full px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-light mb-4">Support The Mission</h2>
                    <div className="w-16 h-1 bg-cyber-green mx-auto rounded-full"></div>
                </div>

                <div className="bg-navy-light rounded-xl p-8 md:p-12 border border-slate/10 shadow-lg relative overflow-hidden group hover:border-cyber-green/30 transition-all duration-300">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-green/5 rounded-bl-full -mr-10 -mt-10"></div>

                    <h3 className="text-2xl font-display text-slate-light mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-cyber-green rounded-full"></span>
                        How to Donate
                    </h3>

                    <div className="space-y-8">
                        {/* Payee Info */}
                        <div className="bg-navy-dark p-6 rounded border border-slate/20">
                            <p className="text-slate text-sm font-mono mb-2 uppercase tracking-wide">Make Checks Payable To:</p>
                            <p className="text-xl md:text-2xl text-slate-light font-bold">Daniel Crinion (Team Treasurer)</p>
                        </div>

                        {/* Mailing Warning */}
                        <div className="flex gap-4 items-start bg-red-500/10 border border-red-500/30 p-6 rounded">
                            <AlertTriangle className="text-red-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="text-red-400 font-bold mb-1">Mailing Address Protected</h4>
                                <p className="text-slate-light mb-4">
                                    For security and privacy reasons, the mailing address is not listed publicly.
                                </p>
                                <a href="mailto:contact@jagscyber.com" className="inline-flex items-center gap-2 text-cyber-green font-mono text-sm hover:underline underline-offset-4">
                                    <Mail size={16} /> Email us for the mailing address
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
