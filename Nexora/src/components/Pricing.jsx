import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Cpu,
} from 'lucide-react';

export default function Pricing({ onOpenContact }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      id: 'venture',
      name: 'Venture Launchpad',
      tagline: 'For seed & Series A tech innovators building rapid category leadership.',
      badge: null,
      monthlyPrice: 5900,
      annualPrice: 4900,
      period: '/ month',
      featured: false,
      icon: Zap,
      accentColor: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-white/[0.08]',
      ctaText: 'Deploy Venture Pod',
      features: [
        'Full-stack Next-Gen React 19 & WebGL Spatial UI',
        'Bespoke Neural AI Pipelines (up to 5 autonomous agents)',
        'Sub-5ms Global API Gateway & Edge Routing',
        'Bi-weekly Sprint Deliverables & Live Staging Demos',
        'Full Source Code Ownership & Enterprise Mutual NDA',
        'Standard 99.9% Uptime Production SLA',
        'Discord / Slack Direct Engineering Channel',
      ],
    },
    {
      id: 'scale',
      name: 'Scale Flagship',
      tagline: 'Our premier architecture pod for scaling high-throughput global platforms.',
      badge: 'MOST ACCLAIMED',
      monthlyPrice: 14200,
      annualPrice: 11900,
      period: '/ month',
      featured: true,
      icon: Sparkles,
      accentColor: 'from-purple-600/30 via-violet-600/25 to-cyan-500/25',
      borderColor: 'border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.35)]',
      ctaText: 'Initialize Scale Pod',
      features: [
        'Everything in Venture Launchpad',
        'Cinematic 120 FPS WebGPU & 3D Spatial Physics Engine',
        'Fine-Tuned Proprietary LLM & Real-Time RAG Systems',
        'Multi-Region Geo-Replication across 840+ Edge Nodes',
        'Post-Quantum Cryptographic Hardening (Kyber / Dilithium)',
        'Guaranteed 99.99% Tier-3 SLA with 1-Hour Response',
        'Dedicated Principal Systems Architect & Creative Director',
        'Automated SOC-2 & ISO-9001 Compliance Telemetry',
      ],
    },
    {
      id: 'sovereign',
      name: 'Sovereign Enterprise',
      tagline: 'Air-gapped, zero-trust infrastructure for Fortune 500 & FinTech institutions.',
      badge: 'GOV & FINTECH',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      period: 'Bespoke Scope',
      featured: false,
      icon: Shield,
      accentColor: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-white/[0.08]',
      ctaText: 'Consult Sovereign Architect',
      features: [
        'Everything in Scale Flagship',
        'Air-Gapped On-Premise & Sovereign Multi-Cloud Deployment',
        'Zero-Knowledge Proofs & High-Frequency Consensus Fabric',
        'Custom FPGA / GPU Kernel Optimization & Microsecond Telemetry',
        'Mission-Critical 99.999% SLA with 15-Minute Response Protocol',
        '24/7/365 Dedicated Engineering Command Center',
        'Annual Red Team Penetration Testing & Formal Verification',
        'Executive Board Technology Briefings & Patent Advisory',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Background radiant ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-4 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-purple-200 uppercase font-semibold">
              TRANSPARENT ENGAGEMENT TIERS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Predictable Investment in <span className="text-gradient-purple">Breakthrough Tech</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mb-8">
            Deploy elite multidisciplinary pods dedicated to your technical vision. Fixed monthly rates, zero hidden fees, and complete intellectual property ownership.
          </p>

          {/* Billing Interval Switch */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-inner">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                !annualBilling
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                annualBilling
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Annual Retainer</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const price =
              typeof plan.monthlyPrice === 'number'
                ? annualBilling
                  ? `$${plan.annualPrice.toLocaleString()}`
                  : `$${plan.monthlyPrice.toLocaleString()}`
                : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between glass-card border transition-all duration-500 group ${
                  plan.featured
                    ? 'border-purple-500/50 bg-[#0d091e]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.25)] lg:-translate-y-2 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(168,85,247,0.35)]'
                    : 'border-white/[0.08] hover:border-purple-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.12)]'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-mono text-[10px] tracking-widest uppercase font-bold shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:border-purple-400/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                      TIER 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-8 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    {typeof plan.monthlyPrice === 'number' && annualBilling && (
                      <div className="text-[11px] font-mono text-cyan-400 mt-1">
                        Billed annually ($12,000+ total savings)
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
                      INCLUDED CAPABILITIES:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={onOpenContact}
                  className={`w-full py-4 rounded-2xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(139,92,246,0.9)]'
                      : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-purple-400/40'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Reassurance Guarantee */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-purple-400 shrink-0" />
            <span>All contracts include comprehensive IP assignment, mutual NDAs, and 30-day onboarding satisfaction warranties.</span>
          </div>
          <button
            onClick={onOpenContact}
            className="text-purple-300 hover:text-white underline underline-offset-4 shrink-0 transition-colors cursor-pointer"
          >
            Request Custom Scope RFP →
          </button>
        </div>

      </div>
    </section>
  );
}
