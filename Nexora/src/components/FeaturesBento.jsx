import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Cpu,
  Globe,
  Database,
  Sparkles,
  Layers,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Lock,
  Activity
} from 'lucide-react';

function BentoCard({ children, className = '', glowColor = 'rgba(168, 85, 247, 0.18)' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative rounded-3xl overflow-hidden glass-card p-7 transition-all duration-500 group border border-white/[0.08] hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(168,85,247,0.12)] ${className}`}
    >
      {/* Radial Hover Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </motion.div>
  );
}

export default function FeaturesBento() {
  const [aiPromptInput] = useState('Synthesize 3D spatial interface with quantum neural backend');
  const [aiResponse] = useState('Compiled in 12ms. Deployed to 840 global edge clusters.');

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Alias anchor for solutions */}
      <span id="solutions" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-purple-200 uppercase font-semibold">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Engineered for the <span className="text-gradient-purple">Next Dimension</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            We merge breakthrough computer science with haute-couture digital design to craft solutions that stand decades ahead.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1: AI-Powered Innovation (Col Span 2) */}
          <BentoCard className="md:col-span-2 lg:col-span-2 min-h-[340px]" glowColor="rgba(168, 85, 247, 0.22)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-950/70 px-3 py-1 rounded-full border border-purple-500/30">
                FLAGSHIP AI
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6">
                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-purple-200 transition-colors">
                  AI-Powered Innovation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Bespoke LLM fine-tuning, autonomous agentic workflows, and predictive neural heuristics that transform raw institutional data into intelligent competitive advantages.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-gray-300">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]">Deep Learning</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]">Agentic Pipelines</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]">Real-time RAG</span>
                </div>
              </div>

              {/* Interactive Neural Console Preview */}
              <div className="lg:col-span-6 bg-[#090714] border border-purple-500/20 rounded-2xl p-4 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] font-mono text-gray-400 ml-2">nexora_neural_v3.bin</span>
                  </div>
                  <span className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" /> LIVE
                  </span>
                </div>
                <div className="font-mono text-xs text-gray-300 mb-2">
                  <span className="text-purple-400">$ prompt &gt;</span> {aiPromptInput}
                </div>
                <div className="font-mono text-xs text-cyan-300/90 bg-cyan-950/20 p-2.5 rounded-lg border border-cyan-500/20 flex items-start gap-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{aiResponse}</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CARD 2: Digital Transformation */}
          <BentoCard className="min-h-[340px]" glowColor="rgba(56, 189, 248, 0.2)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
              Digital Transformation
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Modernizing legacy monolithic systems into cloud-native microservices with zero downtime and automated governance.
            </p>

            {/* Architecture Flow Stepper */}
            <div className="mt-auto space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <span className="text-gray-400">Legacy Architecture</span>
                <span className="text-purple-400 font-bold">Deprecated</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                <span>Microservice Mesh</span>
                <span className="text-cyan-300 font-bold">Synchronized</span>
              </div>
            </div>
          </BentoCard>

          {/* CARD 3: Premium Web Experiences */}
          <BentoCard className="min-h-[340px]" glowColor="rgba(217, 70, 239, 0.2)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] transition-all">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-fuchsia-300 uppercase bg-fuchsia-950/60 px-2.5 py-1 rounded-full border border-fuchsia-500/30">
                AWWWARDS LEVEL
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-fuchsia-200 transition-colors">
              Premium Web Experiences
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fluid 60 FPS WebGL interactions, dynamic micro-physics, and hyper-sensory storytelling that captivate high-net-worth audiences.
            </p>

            <div className="mt-auto p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-fuchsia-400" />
                <span className="text-xs font-mono text-gray-300">Fluid Framerate</span>
              </div>
              <span className="text-xs font-mono font-bold text-green-400">120 FPS Max</span>
            </div>
          </BentoCard>

          {/* CARD 4: Scalable Technology (Col Span 2) */}
          <BentoCard className="md:col-span-2 lg:col-span-2 min-h-[320px]" glowColor="rgba(6, 182, 212, 0.2)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-500/30">
                GLOBAL SCALE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  Scalable Technology
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Multi-region geo-replicated data fabrics engineered with Rust and distributed consensus protocols, capable of processing millions of concurrent events.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-gray-400 text-[10px]">THROUGHPUT</div>
                    <div className="font-bold text-white text-base">4.2M req/sec</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-gray-400 text-[10px]">GLOBAL UPTIME</div>
                    <div className="font-bold text-green-400 text-base">99.999%</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col justify-center space-y-3">
                <div className="p-3.5 rounded-xl bg-[#090714] border border-cyan-500/20">
                  <div className="flex justify-between text-xs font-mono text-gray-300 mb-1.5">
                    <span>Edge Nodes Sync</span>
                    <span className="text-cyan-400">100% Active</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-full" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Automated disaster recovery enabled</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CARD 5: Creative Strategy */}
          <BentoCard className="min-h-[320px]" glowColor="rgba(168, 85, 247, 0.2)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-purple-200 transition-colors">
              Creative Strategy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Brand elevation, market positioning, and distinctive art direction designed to command prestige and capture category leadership.
            </p>

            <div className="mt-auto flex flex-wrap gap-2 text-[11px] font-mono text-gray-300">
              <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300">Identity Design</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300">Product DNA</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300">Motion Systems</span>
            </div>
          </BentoCard>

          {/* CARD 6: Future-Ready Solutions */}
          <BentoCard className="min-h-[320px]" glowColor="rgba(99, 102, 241, 0.2)">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-indigo-300 uppercase bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-500/30">
                POST-QUANTUM
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-indigo-200 transition-colors">
              Future-Ready Solutions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architecting with post-quantum cryptography, forward-compatible APIs, and sovereign data governance ready for the next tech epoch.
            </p>

            <div className="mt-auto p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex items-center gap-3">
              <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
              <div className="text-xs font-mono text-gray-300">
                Zero Day Vulnerability Immunity Protocol
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
