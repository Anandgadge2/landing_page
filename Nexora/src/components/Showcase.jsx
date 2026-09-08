import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, X, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 'aether-os',
    title: 'AetherOS Spatial Neural Interface',
    category: 'Spatial & AI',
    tag: 'SPATIAL COMPUTING',
    image: '/images/aether_os.jpg',
    description:
      'A next-generation spatial computing operating system powered by real-time neural heuristics and biometric telemetry, delivering frictionless intent prediction.',
    client: 'Aether Cognitive Corp',
    year: '2026',
    metrics: [
      { label: 'Latency Reduction', value: '74%' },
      { label: 'Spatial Accuracy', value: '99.98%' },
      { label: 'Global Edge Nodes', value: '1,200+' },
    ],
    tech: ['Neural Heuristics', 'Rust / WebGL', 'Spatial Audio', 'Biometric Telemetry'],
    challenge:
      'Designing a zero-latency spatial interface capable of rendering high-dimensional neural graphs in immersive 3D space with continuous eye and intent tracking.',
    solution:
      'Engineered a custom WebGL rasterizer combined with an on-device quantized neural inference engine, achieving sub-millisecond response rates.',
  },
  {
    id: 'luminary-pay',
    title: 'Luminary Quantum Financial Protocol',
    category: 'FinTech',
    tag: 'DECENTRALIZED FINANCE',
    image: '/images/luminary_pay.jpg',
    description:
      'An ultra-secure, institutional-grade decentralized asset management platform featuring post-quantum cryptographic vaults and multi-asset algorithmic arbitrage.',
    client: 'Luminary Global Treasury',
    year: '2025',
    metrics: [
      { label: 'Settlement Speed', value: '420ms' },
      { label: 'AUM Secured', value: '$8.4B+' },
      { label: 'Audit Security Score', value: '100%' },
    ],
    tech: ['Post-Quantum Cryptography', 'Solidity / Rust', 'Reactive Dashboard', 'Zero-Knowledge Proofs'],
    challenge:
      'Enabling high-frequency multi-trillion market capitalization routing while strictly enforcing institutional zero-knowledge compliance and real-time biometric authorization.',
    solution:
      'Architected an event-driven distributed state machine with quantum-resistant key exchange and a luxury frosted dark glass trading console.',
  },
  {
    id: 'vortex-cockpit',
    title: 'Vortex Hypercar Digital Telemetry Cockpit',
    category: 'Automotive & 3D',
    tag: 'IMMERSIVE 3D / IOT',
    image: '/images/vortex_cockpit.jpg',
    description:
      'An award-winning digital cockpit experience with real-time 3D aerodynamic airflow simulation, biometric driver monitoring, and high-speed HUD instrumentation.',
    client: 'Vortex Dynamics Automobili',
    year: '2026',
    metrics: [
      { label: 'Frame Rate', value: '120 FPS Locked' },
      { label: 'CAN Bus Sync', value: '0.2ms' },
      { label: 'Aero Coefficient Gain', value: '+18%' },
    ],
    tech: ['Three.js / WebGPU', 'Real-time Aerodynamics', 'CAN-Bus Telemetry', 'Haptic Sync'],
    challenge:
      'Rendering cinematic 3D fluid aerodynamic simulations in real-time alongside safety-critical automotive instrumentation at 120 FPS with zero frame drops.',
    solution:
      'Built a WebGPU-based custom graphics pipeline integrated directly with vehicle CAN-bus sensors for instantaneous tactile feedback and HUD projection.',
  },
];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All Work', 'Spatial & AI', 'FinTech', 'Automotive & 3D'];

  const filteredProjects =
    activeCategory === 'All Work'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      {/* Anchor alias for use-cases */}
      <span id="use-cases" className="absolute -top-24" aria-hidden="true" />
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-cyan-200 uppercase font-semibold">
                CURATED WORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-3">
              Crafted with <span className="text-gradient-cyan">Precision & Vision</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base">
              Explore our flagship creations that redefine digital interaction, spatial immersion, and enterprise performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden glass-card border border-white/[0.08] hover:border-purple-500/50 hover:-translate-y-1.5 transition-all duration-500 flex flex-col hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.18)]"
            >
              {/* Image Container with Zoom & Glass Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-black/30" />
                
                {/* Top Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase">
                    {project.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-400">
                      {project.client}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-200 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips & CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-gray-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-purple-300 group-hover:text-white flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#090714] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header with Close */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-black/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-all"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-mono tracking-widest text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/40 uppercase">
                    {selectedProject.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-display font-extrabold text-xl sm:text-2xl text-gradient-purple">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Narrative Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-mono text-xs text-purple-400 uppercase tracking-wider mb-2 font-semibold">
                      The Architecture Challenge
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                      The NEXORA Solution
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase mb-3">
                    Technologies & Protocols
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-200 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    Client: <strong className="text-gray-300">{selectedProject.client}</strong>
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
                  >
                    Close Overview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
