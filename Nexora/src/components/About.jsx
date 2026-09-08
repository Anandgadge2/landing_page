import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Award, ChevronRight, Check } from 'lucide-react';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About({ onOpenContact }) {
  const stats = [
    { label: 'Projects Delivered', value: 150, suffix: '+', sub: 'Across 24 countries' },
    { label: 'Global Clients', value: 50, suffix: '+', sub: 'Fortune 500 & Startups' },
    { label: 'Years Experience', value: 8, suffix: '+', sub: 'Pioneering frontier tech' },
    { label: 'Client Satisfaction', value: 99, suffix: '%', sub: 'Long-term retention' },
  ];

  const pillars = [
    {
      no: '01',
      title: 'Radical Engineering',
      desc: 'No compromises. We write ultra-optimized, high-throughput code built to withstand immense global scale.',
    },
    {
      no: '02',
      title: 'Haute Digital Aesthetics',
      desc: 'Precision typography, fluid physics, and dark luxury visual systems that evoke prestige.',
    },
    {
      no: '03',
      title: 'Human-Centric Future',
      desc: 'Bridging bleeding-edge artificial intelligence with natural human cognition and intuition.',
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-purple-200 uppercase font-semibold">
                WHO WE ARE
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1]">
              Technology Meets{' '}
              <span className="text-gradient-purple relative">
                Imagination.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              At NEXORA, we refuse to settle for the ordinary. Founded by an elite collective of computer scientists, creative technologists, and digital artists, we create meaningful digital experiences through technology, creativity, and radical innovation.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether architecting neural computing platforms, bespoke spatial computing environments, or multi-billion-dollar FinTech engines, our mission is solitary: to build what others deem impossible, and execute it with peerless aesthetic distinction.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/[0.06] hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>Discover Our Methodology</span>
                <ChevronRight className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Holographic Philosophy Matrix Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Glowing Backdrop Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative glass-card rounded-3xl p-8 border border-white/[0.1] shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-base">The NEXORA Standard</div>
                    <div className="text-[10px] font-mono text-purple-300 uppercase tracking-widest">Frontier Execution</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                  EST. 2018
                </span>
              </div>

              {/* Pillars list */}
              <div className="space-y-6">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.no}
                    className="group p-4 rounded-2xl bg-white/[0.02] hover:bg-purple-950/30 border border-white/[0.04] hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-mono text-xs font-bold text-purple-400">
                        {pillar.no}
                      </span>
                      <h4 className="font-display font-bold text-white text-sm group-hover:text-purple-200 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 pl-7 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certification note */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Check className="w-3.5 h-3.5 text-green-400" /> ISO-9001 & SOC-2 Type II Certified
                </span>
                <span className="font-mono text-[11px] text-gray-500">Tier 4 Global SLAs</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Section */}
        <div id="statistics" className="pt-10 border-t border-white/[0.08] relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] transition-all duration-300 text-center group"
              >
                <div className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mb-2 group-hover:text-gradient-purple transition-all duration-300">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-medium text-sm sm:text-base text-gray-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-gray-500">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
