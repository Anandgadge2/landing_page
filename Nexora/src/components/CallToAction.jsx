import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

export default function CallToAction({ onOpenContact }) {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Dramatic Cosmic Vortex Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-r from-purple-600/25 via-violet-600/30 to-cyan-500/25 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute w-[450px] h-[450px] border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] border border-cyan-500/10 rounded-full animate-spin-reverse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 mb-8 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-spin" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-purple-200 uppercase font-semibold">
            INITIATE COLLABORATION
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.08]"
        >
          Ready to Build{' '}
          <span className="text-gradient-purple relative inline-block">
            What’s Next?
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent" />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-normal"
        >
          Whether you are engineering autonomous spatial systems, decentralized financial protocols, or defining the next luxury digital paradigm, our collective is primed to engineer your ambition.
        </motion.p>

        {/* Large Glowing Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={onOpenContact}
            className="shimmer-btn group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full text-base sm:text-lg font-bold tracking-wide text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 border border-purple-400/60 shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:shadow-[0_0_80px_rgba(139,92,246,0.9)] hover:border-purple-200 transition-all duration-300 active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-purple-200" />
            <span>Let’s Create Something Extraordinary</span>
            <ArrowRight className="w-5 h-5 text-purple-200 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        {/* Reassurance pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>24-Hour Confidential Response</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Enterprise Mutual NDA Included</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-fuchsia-400" />
            <span>Offices: San Francisco · Zurich · Tokyo</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
