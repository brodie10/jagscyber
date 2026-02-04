import React from 'react';
import { Download, Mail, CheckCircle, ShieldCheck, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center text-center p-6"
    >
        <div className="bg-navy-light p-4 rounded-full mb-4 border border-slate/10 shadow-[0_0_15px_rgba(100,255,218,0.1)] group-hover:border-cyber-green/30 transition-colors">
            <Icon className="text-cyber-green" size={28} />
        </div>
        <h4 className="text-xl font-display font-bold text-slate-light mb-2">{title}</h4>
        <p className="text-slate text-sm leading-relaxed max-w-xs">{description}</p>
    </motion.div>
);

const SponsorCard = ({ tier, price, color, features, featured = false, delay }) => {
    // Dynamic styles based on tier
    const styles = {
        gold: {
            border: 'border-gold/50',
            text: 'text-gold',
            glow: 'shadow-[0_0_30px_rgba(255,215,0,0.15)]',
            bg: 'bg-gradient-to-b from-navy-light/90 to-navy-light/60',
            button: 'bg-gold text-navy hover:bg-gold/80',
        },
        silver: {
            border: 'border-silver/50',
            text: 'text-silver',
            glow: 'shadow-[0_0_20px_rgba(192,192,192,0.1)]',
            bg: 'bg-navy-light/80',
            button: 'bg-transparent border border-silver text-silver hover:bg-silver/10',
        },
        bronze: {
            border: 'border-bronze/50',
            text: 'text-bronze',
            glow: 'shadow-none',
            bg: 'bg-navy-light/60',
            button: 'bg-transparent border border-bronze text-bronze hover:bg-bronze/10',
        }
    }[tier.toLowerCase()];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={`
                relative rounded-xl p-8 border ${styles.border} ${styles.bg} backdrop-blur-md
                flex flex-col h-full transition-all duration-300
                hover:transform hover:-translate-y-2 hover:${styles.glow}
                ${featured ? 'md:-mt-8 md:mb-8 z-10 shadow-2xl shadow-black/50' : ''}
            `}
        >
            {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy font-bold font-mono px-4 py-1 rounded-full text-sm flex items-center gap-2 shadow-lg shadow-gold/20">
                    <ShieldCheck size={16} /> MOST POPULAR
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className={`text-4xl font-display font-bold uppercase mb-2 ${styles.text} tracking-wider`}>{tier}</h3>
                <div className="flex items-center justify-center gap-1 opacity-80">
                    <span className="text-slate-light font-mono text-xl">{price}</span>
                </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-light/90 text-sm group">
                        <CheckCircle size={16} className={`shrink-0 mt-1 ${styles.text} opacity-70 group-hover:opacity-100 transition-opacity`} />
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                    </div>
                ))}
            </div>

            <button className={`w-full py-3 rounded font-bold font-mono transition-all duration-300 uppercase tracking-wide text-sm ${styles.button}`}>
                Select Tier
            </button>
        </motion.div>
    );
};

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 bg-navy-dark relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-green/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-slate-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-light via-white to-slate-light"
                    >
                        Partner With Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Fuel the next generation of cybersecurity experts. Your sponsorship provides critical resources for competition, travel, and training.
                    </motion.p>
                </div>

                {/* Benefits / Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24 border-y border-slate/10 py-12 bg-navy-light/20 relative">
                    {/* Decorative vertical dividers for desktop */}
                    <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px bg-slate/10"></div>

                    <BenefitCard
                        icon={Heart}
                        title="Support STEM"
                        description="Directly fund equipment and travel for the next generation of cyber defenders."
                        delay={0.2}
                    />
                    <BenefitCard
                        icon={Globe}
                        title="Brand Visibility"
                        description="Showcase your support to our community, parents, and future tech leaders."
                        delay={0.3}
                    />
                </div>

                {/* Tiers Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto mb-20">
                    <SponsorCard
                        tier="Bronze"
                        price="Under $750"
                        features={["Logo on Website", "Social Media Shoutout", "Certificate of Appreciation"]}
                        delay={0.4}
                    />
                    <SponsorCard
                        tier="Silver"
                        price="$750 - $1,500"
                        features={["Medium Logo on Banner", "Logo on Presentation Slides", "All Bronze Benefits"]}
                        delay={0.5}
                    />
                    <SponsorCard
                        tier="Gold"
                        price="$1,500+"
                        features={["Large Logo on Team Jersey", "Large Logo on Banner", "VIP Invitation to Events", "All Silver & Bronze Benefits"]}
                        delay={0.6}
                    />
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <a href="mailto:contact@jagscyber.com" className="group flex items-center justify-center gap-3 px-8 py-4 bg-cyber-green text-navy font-bold rounded hover:bg-cyber-green/90 transition-all font-mono shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]">
                        <Mail className="group-hover:rotate-12 transition-transform" /> Email Sponsorship Team
                    </a>
                    <a href="/sponsor-packet.pdf" download className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate/30 text-slate-light font-bold rounded hover:border-slate-light hover:bg-slate-light/5 transition-all font-mono">
                        <Download className="group-hover:translate-y-1 transition-transform" /> Download Sponsor Packet
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
