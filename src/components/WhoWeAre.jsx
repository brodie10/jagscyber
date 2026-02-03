import React from 'react';
import { Award, MapPin, Users } from 'lucide-react';
import team2Photo from '../assets/team2.jpg';

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="py-24 bg-navy relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1 animate-fade-in-left">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-light mb-6">
                        Who We Are
                    </h2>
                    <div className="w-20 h-1 bg-cyber-green mb-8 rounded-full"></div>

                    <p className="text-slate text-lg leading-relaxed mb-6">
                        We are <span className="text-cyber-green font-bold">Team 2</span> from Johnson High School (San Antonio, TX).
                        For the second year in a row, we have qualified as one of the
                        <span className="text-slate-light font-semibold"> top 12 teams in the nation</span> out of thousands of competitors.
                    </p>

                    <div className="bg-navy-dark border-l-4 border-cyber-green p-6 mb-8 rounded-r-lg">
                        <p className="text-slate-light italic font-mono">
                            "We are raising funds to cover our travel expenses, meals, and competition equipment for the National Finals."
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate/10 pt-8">
                        <div className="text-center md:text-left">
                            <div className="text-3xl font-display font-bold text-slate-light mb-1">Top 12</div>
                            <div className="text-xs font-mono text-cyber-green">NATIONALLY</div>
                        </div>
                        <div className="text-center md:text-left border-l border-slate/10 pl-4">
                            <div className="text-3xl font-display font-bold text-slate-light mb-1">2x</div>
                            <div className="text-xs font-mono text-cyber-green">FINALISTS</div>
                        </div>
                        <div className="text-center md:text-left border-l border-slate/10 pl-4">
                            <div className="text-3xl font-display font-bold text-slate-light mb-1">TX</div>
                            <div className="text-xs font-mono text-cyber-green">REGION</div>
                        </div>
                    </div>
                </div>

                {/* Image / Collage */}
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-cyber-green/20 translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>
                    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate/10 group">
                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>

                        <div className="aspect-video bg-navy-light flex items-center justify-center relative overflow-hidden">
                            <img
                                src={team2Photo}
                                alt="Johnson High School CyberPatriot Team"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-4 left-4 z-20 bg-navy/80 backdrop-blur px-4 py-2 rounded border border-cyber-green/30">
                                <span className="text-cyber-green font-mono text-xs">
                                    TEAM_02_JHS // CLASSIFIED
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeAre;
