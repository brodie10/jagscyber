
import React from 'react';
import donationsData from '../data/donations.json';
import { Share2, DollarSign, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const DonationTracker = () => {
    // Parse amounts to numbers for calculations
    const collectedStr = donationsData.collected.replace(/[$,]/g, '');
    const collected = parseFloat(collectedStr) || 0;

    // Goal is 10k as per user request, or use data from JSON if preferred.
    // User said "total money rasied /10k". 
    const goal = 10000;
    const progress = Math.min((collected / goal) * 100, 100);

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-light mb-6">
                    Nationals <span className="text-cyber-green">Fundraiser</span>
                </h1>
                <p className="text-slate text-lg max-w-2xl mx-auto mb-8">
                    Help San Antonio's top CyberPatriot team get to the National Finals.
                    Your support covers travel, equipment, and competition costs.
                </p>

                <a
                    href="https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-green text-navy-dark font-bold rounded hover:bg-cyber-green/90 transition-all transform hover:scale-105"
                >
                    Donate on GoFundMe <ExternalLink size={20} />
                </a>
            </motion.div>

            {/* Progress Section */}
            <div className="bg-navy-light/50 p-8 rounded-2xl border border-cyber-green/20 mb-16 shadow-lg shadow-cyber-green/5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-4">
                    <div>
                        <span className="text-5xl font-display font-bold text-white">${collected.toLocaleString()}</span>
                        <span className="text-slate ml-2 text-xl">raised of ${goal.toLocaleString()} goal</span>
                    </div>
                    <div className="text-cyber-green font-mono text-xl mt-2 md:mt-0">
                        {progress.toFixed(1)}%
                    </div>
                </div>

                <div className="h-6 bg-navy-dark rounded-full overflow-hidden border border-slate-dark/50">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "outCirc" }}
                        className="h-full bg-gradient-to-r from-cyber-green/80 to-cyber-green shadow-[0_0_15px_rgba(100,255,218,0.5)]"
                    />
                </div>
                <div className="mt-4 flex gap-6 text-sm font-mono text-slate-dark">
                    <span className="flex items-center gap-2"><Users size={16} /> {donationsData.donors.length} Recent Donors</span>
                    {/* <span className="flex items-center gap-2">Last updated: {new Date(donationsData.lastUpdated).toLocaleDateString()}</span> */}
                </div>
            </div>

            {/* Donors List */}
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-display font-bold text-slate-light mb-6 flex items-center gap-2">
                        <Users className="text-cyber-green" /> Recent Supporters
                    </h2>
                    <div className="space-y-4">
                        {donationsData.donors.length > 0 ? (
                            donationsData.donors.map((donor, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex justify-between items-center p-4 bg-navy-light/30 border border-slate-dark/30 rounded hover:border-cyber-green/30 transition-colors"
                                >
                                    <span className="font-bold text-slate-light">{donor.name}</span>
                                    <span className="font-mono text-cyber-green">{donor.amount}</span>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-slate italic p-4 border border-dashed border-slate-dark rounded">
                                Recent donor data not available. Be the first to appear here!
                            </div>
                        )}

                        {donationsData.donors.length > 0 && (
                            <div className="text-center mt-4">
                                <p className="text-slate-dark text-sm">...and many more anonymous donors!</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-navy-light to-navy border border-slate-dark/50 rounded-2xl p-8 flex flex-col justify-center text-center">
                    <DollarSign className="w-16 h-16 text-cyber-green mx-auto mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold text-white mb-4">Support Our Journey</h3>
                    <p className="text-slate mb-8 leading-relaxed">
                        Reaching Nationals requires significant funding for travel, lodging, and equipment.
                        Every donation, big or small, directly helps us represent San Antonio on the national stage.
                    </p>
                    <a
                        href="https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-slate-light text-navy-dark font-bold rounded hover:bg-white transition-colors"
                    >
                        Donate Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationTracker;
