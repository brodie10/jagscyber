import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Trophy, Target } from 'lucide-react';

const milestones = [
    {
        title: "Mission Start: Round 1",
        date: "October 2025",
        description: "Official kickoff. Ranked #70 Nationally in the Open Division, establishing early dominance in the season.",
        icon: Terminal,
        status: "completed",
        stats: "Score: 222/230"
    },
    {
        title: "Round 2: Escalation",
        date: "November 2025",
        description: "Advanced challenges. Ranked #19 Nationally in the Platinum Open Division.",
        icon: Shield,
        status: "completed",
        stats: "Score: 323.4/330"
    },
    {
        title: "State Championship",
        date: "January 2026",
        description: "Ranked #13 Nationally in the Platinum Open Division. Outperformed 4,000+ teams to secure a crucial qualification spot.",
        icon: Trophy,
        status: "completed",
        stats: "Score: 368.1/400"
    },
    {
        title: "Semifinals Competition Round",
        date: "February 2026",
        description: "Ranked #10 Nationally in the Platinum Open Division. Qualified for the National Finals as one of the top 12 teams.",
        icon: Target,
        status: "completed",
        stats: "Score: 471.19"
    }
];

const Roadmap = () => {
    return (
        <section id="roadmap" className="py-24 bg-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-slate-light mb-4"
                    >
                        Road to <span className="text-cyber-green">Nationals</span>
                    </motion.h2>
                    <p className="text-slate opacity-80 max-w-2xl mx-auto">
                        Tracking our operation status for the 2025-2026 CyberPatriot season.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate/10 -translate-x-1/2"></div>
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyber-green/30 -translate-x-1/2 shadow-[0_0_15px_rgba(100,255,218,0.5)]"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const isCurrent = item.status === 'current';

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                                        <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center border-4 
                                            ${isCurrent ? 'bg-cyber-green border-cyber-green/30 animate-pulse shadow-[0_0_20px_rgba(100,255,218,0.8)]' : 'bg-navy border-cyber-green shadow-[0_0_10px_rgba(100,255,218,0.3)]'}
                                        `}>
                                            <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-navy' : 'bg-cyber-green'}`}></div>
                                        </div>
                                    </div>

                                    {/* Content Spacer */}
                                    <div className="flex-1 hidden md:block"></div>

                                    {/* Card */}
                                    <div className="flex-1 w-full pl-12 md:pl-0">
                                        <div className={`
                                            p-6 rounded-xl border border-slate/10 bg-navy-light/40 backdrop-blur-sm
                                            hover:border-cyber-green/30 transition-all duration-300 group
                                            ${isCurrent ? 'border-cyber-green/50 shadow-[0_0_30px_rgba(100,255,218,0.05)]' : ''}
                                        `}>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded bg-navy-dark/50 text-cyber-green">
                                                        <item.icon size={20} />
                                                    </div>
                                                    <span className="text-xs font-mono text-cyber-green/80 uppercase tracking-widest">{item.date}</span>
                                                </div>
                                                {isCurrent && (
                                                    <span className="flex h-2 w-2 relative">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-light mb-2">{item.title}</h3>
                                            <p className="text-slate text-sm leading-relaxed mb-4">{item.description}</p>

                                            <div className="inline-block px-3 py-1 bg-navy-dark border border-slate/20 rounded text-xs font-mono text-slate-light">
                                                {item.stats}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
