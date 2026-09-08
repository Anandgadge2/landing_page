import React from 'react';
import { Shield, Zap, Box, Compass, Terminal, Radio, Layers, Orbit } from 'lucide-react';

const clients = [
  { name: 'AETHER AI', category: 'Neural Intelligence', icon: Orbit },
  { name: 'KINETIX LABS', category: 'Spatial Robotics', icon: Zap },
  { name: 'LUMEN DYNAMICS', category: 'Quantum Optics', icon: Shield },
  { name: 'VORTEX QUANTUM', category: 'Computing Architecture', icon: Box },
  { name: 'SYNERGY X', category: 'Autonomous Systems', icon: Terminal },
  { name: 'HYPERION CORP', category: 'Orbital Infrastructure', icon: Compass },
  { name: 'NEURACORE', category: 'Cognitive Networks', icon: Layers },
  { name: 'CHRONOS LABS', category: 'Distributed Protocols', icon: Radio },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-y border-white/[0.06] bg-[#05040a]/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase">
            POWERING GLOBAL LEADERS
          </span>
        </div>
        <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-gray-300 uppercase">
          Trusted by the World’s Most Ambitious Technology Enterprises
        </h2>
      </div>

      {/* Infinite Seamless Marquee Slider */}
      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-16 py-3">
          {[...clients, ...clients].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={`${client.name}-${idx}`}
                className="group flex items-center gap-3 cursor-pointer py-2 px-4 rounded-xl transition-all duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08]"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] group-hover:bg-purple-500/20 border border-white/[0.06] group-hover:border-purple-500/40 flex items-center justify-center text-gray-400 group-hover:text-purple-300 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-wider text-gray-400 group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[9px] font-mono text-gray-600 group-hover:text-purple-300/70 tracking-widest uppercase transition-colors">
                    {client.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
