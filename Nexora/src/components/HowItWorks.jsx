import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Layers,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Activity,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Neural Discovery & Architecture',
    subtitle: 'Deep System Ingestion & Protocol Mapping',
    desc: 'We analyze institutional data fabrics, model user intent telemetry, and synthesize a mathematical architecture blueprint engineered for extreme scalability.',
    icon: Terminal,
    tag: 'PHASE 1 · SYNTHESIS',
    metrics: [
      { label: 'Ingestion Latency', val: '< 24h' },
      { label: 'Architecture Audits', val: '100% Passed' },
    ],
    details: [
      'Multi-modal system topology mapping',
      'Quantum-safe data model formulation',
      'Autonomous agentic pipeline design',
    ],
    codeSnippet: 'const blueprint = await Nexora.synthesizeArchitecture({\n  compliance: "SOC2_TYPE_II",\n  targetLatency: "0.8ms",\n  nodes: 840\n});',
  },
  {
    step: '02',
    title: 'Spatial Prototyping & Physics',
    subtitle: 'High-Fidelity Sensory Simulation',
    desc: 'Our creative technologists craft interactive WebGL and 3D spatial simulations, validating tactile physics, fluid typography, and micro-interactions at 120 FPS.',
    icon: Layers,
    tag: 'PHASE 2 · EXPERIENCE',
    metrics: [
      { label: 'Framerate Target', val: '120 FPS' },
      { label: 'User Intent Score', val: '99.4%' },
    ],
    details: [
      'Cinematic WebGL/WebGPU shaders',
      'Haptic feedback & spatial audio integration',
      'Adaptive luxury dark-mode typography',
    ],
    codeSnippet: 'const scene = new SpatialCanvas({\n  renderMode: "NEURAL_RAYTRACED",\n  framerate: 120,\n  bloom: 0.85\n});',
  },
  {
    step: '03',
    title: 'Protocol Hardening & Auditing',
    subtitle: 'Zero-Day Resistance & Formal Verification',
    desc: 'Every smart protocol, API surface, and data stream undergoes rigorous penetration testing, mathematical proof validation, and post-quantum cryptographic hardening.',
    icon: ShieldCheck,
    tag: 'PHASE 3 · FORTIFICATION',
    metrics: [
      { label: 'Security Rating', val: 'A+++' },
      { label: 'Zero-Day Vulnerabilities', val: '0' },
    ],
    details: [
      'Post-quantum lattice cryptography',
      'Automated fuzz testing across 50,000 vectors',
      'Zero-knowledge proof verification',
    ],
    codeSnippet: 'SecurityAuditor.executeFormalProofs({\n  cryptography: "CRYSTALS-Kyber",\n  penetrationDepth: "EXTREME",\n  zeroDayThreshold: 0\n});',
  },
  {
    step: '04',
    title: 'Autonomous Edge Orchestration',
    subtitle: 'Global Sub-Millisecond Deployment',
    desc: 'Seamless deployment across our geo-distributed edge fabric. Continuous real-time telemetry, automated failover, and neural heuristics ensure 99.999% uptime.',
    icon: Rocket,
    tag: 'PHASE 4 · DEPLOYMENT',
    metrics: [
      { label: 'Global Edge Sync', val: '12ms' },
      { label: 'Uptime SLA', val: '99.999%' },
    ],
    details: [
      'Multi-region active-active cluster mesh',
      'Predictive neural autoscaling',
      '24/7 dedicated mission control telemetry',
    ],
    codeSnippet: 'EdgeFabric.broadcastProduction({\n  regions: ["us-east", "eu-central", "ap-east"],\n  redundancy: "99.999%",\n  realtimeTelemetry: true\n});',
  },
];

export default function HowItWorks({ onOpenContact }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = steps[activeStepIdx];
  const StepIcon = activeStep.icon;

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-900/15 via-violet-600/10 to-cyan-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-purple-200 uppercase font-semibold">
              EXECUTION LIFECYCLE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            How We Engineer the <span className="text-gradient-purple">Extraordinary</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            From preliminary mathematical synthesis to mission-critical global edge orchestration, our disciplined four-stage process guarantees flawless execution.
          </p>
        </div>

        {/* 4-Step Nav Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {steps.map((item, idx) => {
            const isSelected = activeStepIdx === idx;
            const IconComponent = item.icon;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative border cursor-pointer ${
                  isSelected
                    ? 'bg-purple-950/70 border-purple-400/80 shadow-[0_0_25px_rgba(168,85,247,0.35)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]'
                }`}
              >
                {/* Active Indicator Bar on Top */}
                {isSelected && (
                  <motion.div
                    layoutId="step-active-rim"
                    className="absolute -top-[1px] inset-x-4 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-purple-300' : 'text-gray-500'}`}>
                    PHASE {item.step}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-purple-500/30 text-purple-200' : 'bg-white/[0.04] text-gray-500'
                  }`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className={`font-display font-bold text-xs sm:text-sm tracking-wide ${
                  isSelected ? 'text-white' : 'text-gray-300'
                }`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/25 relative overflow-hidden shadow-2xl"
          >
            {/* Top ambient highlight */}
            <div className="absolute top-0 right-1/4 w-96 h-32 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative & Key Deliverables */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                        {activeStep.tag}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {activeStep.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-8">
                    {activeStep.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                  {activeStep.metrics.map((m) => (
                    <div key={m.label} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="font-display font-extrabold text-xl text-gradient-purple">
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Terminal Preview */}
              <div className="lg:col-span-5 bg-[#090714] border border-purple-500/30 rounded-2xl p-5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] text-gray-400 ml-2">nexora_engine.ts</span>
                  </div>
                  <span className="text-[10px] text-purple-300 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    PIPELINE ACTIVE
                  </span>
                </div>

                <pre className="text-xs font-mono text-cyan-300/90 bg-black/40 p-4 rounded-xl border border-white/[0.05] overflow-x-auto leading-relaxed mb-4">
                  <code>{activeStep.codeSnippet}</code>
                </pre>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Activity className="w-3.5 h-3.5 text-green-400 animate-pulse" />
                    <span>Real-time state validation</span>
                  </div>
                  <span className="text-green-400 font-bold">STABLE</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="mt-4 w-full py-3 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Initiate Phase {activeStep.step} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
