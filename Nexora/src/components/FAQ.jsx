import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'Architecture',
    question: 'What core technologies and frameworks does NEXORA specialize in?',
    answer:
      'We engineer at the bleeding edge: modern web architectures with React 19, Next.js, and TypeScript; high-performance 3D spatial simulation with Three.js, WebGPU, and GLSL shaders; and AI neural pipelines with Python, PyTorch, vLLM, and Rust distributed microservices. All systems are architected for sub-millisecond response latency and cross-platform fidelity.',
  },
  {
    id: 2,
    category: 'Engagement & SLAs',
    question: 'How long does a typical frontier architecture engagement take from inception to deployment?',
    answer:
      'Our high-velocity sprints deliver tangible working milestones within 14 business days. A typical MVP or prototype phase completes within 3 to 5 weeks, while comprehensive enterprise production systems (with full multi-region edge mesh, formal audits, and security compliance) typically launch in 8 to 12 weeks. Dedicated engineering pods operate continuously.',
  },
  {
    id: 3,
    category: 'Security & IP',
    question: 'Who owns the intellectual property and source code produced during our partnership?',
    answer:
      'You own 100% of all intellectual property, source code, neural network model weights, 3D assets, and patents created during our engagement. Code is continuously pushed directly to your private enterprise repositories with comprehensive documentation and zero vendor lock-in.',
  },
  {
    id: 4,
    category: 'Architecture',
    question: 'Can NEXORA integrate with our existing multi-cloud, on-premise, or legacy systems?',
    answer:
      'Yes. Our team specializes in non-disruptive modernization. We design resilient microservice adapters and distributed state fabrics that interface seamlessly with existing AWS, GCP, Azure, Kubernetes, bare-metal GPU clusters, or on-premise mainframe systems without incurring operational downtime.',
  },
  {
    id: 5,
    category: 'Engagement & SLAs',
    question: 'What level of ongoing support, SLAs, and post-launch maintenance guarantees do you provide?',
    answer:
      'We back our production systems with formal Service Level Agreements ranging from 99.9% up to 99.999% mission-critical uptime. Tier-one enterprise packages include 24/7/365 active telemetry monitoring, 15-minute emergency response windows, and dedicated quarterly performance optimization sprints.',
  },
  {
    id: 6,
    category: 'Security & IP',
    question: 'How does NEXORA enforce strict confidentiality, data sovereignty, and security protocols?',
    answer:
      'Every client partnership begins with our comprehensive bilateral Mutual NDA. All engineering pods operate in SOC-2 Type II and ISO-9001 certified environments with end-to-end encrypted hardware keys, air-gapped development options, and post-quantum cryptographic standards (CRYSTALS-Kyber).',
  },
];

export default function FAQ({ onOpenContact }) {
  const [openId, setOpenId] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Engagement & SLAs', 'Security & IP'];

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Background glow flare */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-cyan-200 uppercase font-semibold">
              KNOWLEDGE BASE & FAQS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Frequently Asked <span className="text-gradient-cyan">Inquiries</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Everything you need to know about our engineering standards, deployment timelines, IP protection, and partnership model.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group rounded-2xl transition-all duration-300 border overflow-hidden glass-card ${
                  isOpen
                    ? 'border-cyan-500/40 bg-[#0a081a]/90 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(6,182,212,0.15)]'
                    : 'border-white/[0.06] hover:border-cyan-500/35 hover:bg-[#0a0818]/70 hover:shadow-[0_4px_25px_rgba(6,182,212,0.1)] bg-[#070512]/60'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      0{faq.id}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-200 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
                      isOpen
                        ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-300 rotate-180'
                        : 'border-white/[0.1] bg-white/[0.03] text-gray-400 group-hover:border-cyan-400/40 group-hover:text-cyan-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04]">
                        <p>{faq.answer}</p>
                        <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-cyan-400/80 uppercase">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Standard Clause · Guaranteed under NEXORA Master Agreement</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Unanswered Query Direct CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-violet-950/30 to-cyan-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Have a bespoke technical specification?
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Speak directly with our principal systems engineers under mutual NDA.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="shimmer-btn px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-purple-400/40 transition-all shrink-0 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Initiate Direct Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
