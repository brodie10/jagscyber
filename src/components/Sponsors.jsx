import React from 'react';
import { Download, Mail, CheckCircle, ShieldCheck } from 'lucide-react';

const SponsorCard = ({ tier, price, color, features, featured = false }) => {
    const borderColor = {
        gold: 'border-gold',
        silver: 'border-silver',
        bronze: 'border-bronze',
    }[tier.toLowerCase()] || 'border-slate/20';

    const titleColor = {
        gold: 'text-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]',
        silver: 'text-silver drop-shadow-[0_0_5px_rgba(192,192,192,0.5)]',
        bronze: 'text-bronze',
    }[tier.toLowerCase()] || 'text-slate-light';

    return (
        <div className={`relative bg-navy-light rounded-xl p-8 border-2 ${borderColor} ${featured ? 'transform md:-translate-y-4 shadow-2xl shadow-black/50 z-10' : 'opacity-90 hover:opacity-100'} transition-all duration-300 hover:scale-[1.02] flex flex-col`}>
            {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy font-bold font-mono px-4 py-1 rounded-full text-sm flex items-center gap-2">
                    <ShieldCheck size={16} /> MOST POPULAR
                </div>
            )}
            <h3 className={`text-3xl font-display font-bold uppercase mb-2 ${titleColor}`}>{tier}</h3>
            {/* Price is optional in public, but good for context if known. Leaving generic per spec if needed, but adding placeholder */}
            {/* <div className="text-slate-light font-mono text-xl mb-6">{price}</div> */}

            <div className="space-y-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate text-sm">
                        <CheckCircle size={16} className={`shrink-0 mt-1 ${titleColor}`} />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <button className={`w-full py-3 rounded font-bold font-mono transition-colors ${tier.toLowerCase() === 'gold' ? 'bg-gold text-navy hover:bg-gold/80' : 'bg-transparent border border-slate/30 text-slate-light hover:border-cyber-green hover:text-cyber-green'}`}>
                Select Tier
            </button>
        </div>
    );
};

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 bg-navy-dark relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(#64FFDA 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-light mb-4">Partner With Us</h2>
                    <p className="text-slate max-w-2xl mx-auto">
                        Help us reach the National Finals. Your contribution directly supports student travel, meals, and equipment.
                    </p>
                </div>

                {/* Tiers Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto mb-20">
                    <SponsorCard
                        tier="Bronze"
                        price="$500+"
                        features={["Logo on Website", "Social Media Shoutout", "Certificate of Appreciation"]}
                    />
                    <SponsorCard
                        tier="Gold"
                        price="$5000+"
                        featured={true}
                        features={["Large Logo on Team Jersey", "Large Logo on Banner", "VIP Invitation to Events", "All Silver & Bronze Benefits"]}
                    />
                    <SponsorCard
                        tier="Silver"
                        price="$1000+"
                        features={["Medium Logo on Banner", "Logo on Presentation Slides", "All Bronze Benefits"]}
                    />
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="mailto:contact@jagscyber.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-cyber-green text-navy font-bold rounded hover:bg-cyber-green/90 transition-all font-mono">
                        <Mail /> Email Sponsorship Team
                    </a>
                    <a href="/sponsor-packet.pdf" download className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate/30 text-slate-light font-bold rounded hover:border-slate-light hover:bg-slate-light/5 transition-all font-mono">
                        <Download /> Download Sponsor Packet (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
