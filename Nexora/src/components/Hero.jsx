import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Activity, Cpu } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const canvasRef = useRef(null);

  // Futuristic 3D Holographic Cyber Orb Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    let width = (canvas.width = 540);
    let height = (canvas.height = 540);

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetAngleY = (x / rect.width) * 0.8;
      targetAngleX = -(y / rect.height) * 0.8;
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Node points for 3D concentric holographic rings
    const ringCount = 5;
    const pointsPerRing = 32;
    const rings = [];

    for (let r = 0; r < ringCount; r++) {
      const radius = 90 + r * 30;
      const tilt = (r * Math.PI) / 5;
      const pts = [];
      for (let i = 0; i < pointsPerRing; i++) {
        const theta = (i / pointsPerRing) * Math.PI * 2;
        pts.push({
          baseX: Math.cos(theta) * radius,
          baseY: Math.sin(theta) * radius * Math.cos(tilt),
          baseZ: Math.sin(theta) * radius * Math.sin(tilt),
          color: r % 2 === 0 ? 'rgba(168, 85, 247, ' : 'rgba(6, 182, 212, ',
        });
      }
      rings.push(pts);
    }

    let t = 0;

    const render = () => {
      t += 0.015;
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Central Pulsing Core
      const coreGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 140);
      coreGrad.addColorStop(0, 'rgba(192, 132, 252, 0.9)');
      coreGrad.addColorStop(0.3, 'rgba(139, 92, 246, 0.45)');
      coreGrad.addColorStop(0.7, 'rgba(6, 182, 212, 0.15)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fill();

      // Inner pulsating neon sphere
      const pulseSize = 42 + Math.sin(t * 3) * 4;
      ctx.save();
      ctx.shadowColor = '#c084fc';
      ctx.shadowBlur = 30;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render 3D Rotating Rings
      rings.forEach((ring, ringIdx) => {
        const rotY = angleY + t * (ringIdx % 2 === 0 ? 0.6 : -0.7);
        const rotX = angleX + Math.sin(t * 0.5 + ringIdx) * 0.2;

        const projected = ring.map((pt) => {
          // 3D rotation around Y
          let x1 = pt.baseX * Math.cos(rotY) - pt.baseZ * Math.sin(rotY);
          let z1 = pt.baseX * Math.sin(rotY) + pt.baseZ * Math.cos(rotY);

          // 3D rotation around X
          let y2 = pt.baseY * Math.cos(rotX) - z1 * Math.sin(rotX);
          let z2 = pt.baseY * Math.sin(rotX) + z1 * Math.cos(rotX);

          // Perspective projection
          const fov = 350;
          const scale = fov / (fov + z2);
          return {
            x: cx + x1 * scale,
            y: cy + y2 * scale,
            z: z2,
            scale,
            color: pt.color,
          };
        });

        // Draw connecting ring line
        ctx.beginPath();
        projected.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.strokeStyle = ringIdx % 2 === 0 ? 'rgba(168, 85, 247, 0.25)' : 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw points with depth-based brightness
        projected.forEach((p) => {
          const alpha = Math.max(0.15, Math.min(1, (p.z + 180) / 360));
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, 2.5 * p.scale), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.fill();
        });
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-purple-200 uppercase">
                THE FUTURE STARTS HERE
              </span>
            </div>

            {/* Massive Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-[-0.03em] leading-[1.06] text-white mb-6">
              We Build Digital Experiences That{' '}
              <span className="text-gradient-purple relative inline-block">
                Define Tomorrow.
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent opacity-80" />
              </span>
            </h1>

            {/* Premium Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 font-normal">
              NEXORA architects radical digital products, intelligent spatial interfaces, and high-performance computing ecosystems for visionary enterprises reshaping the global landscape.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="shimmer-btn group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 border border-purple-400/50 shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_55px_rgba(139,92,246,0.7)] hover:border-purple-300 transition-all duration-300 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.getElementById('work');
                  if (elem) {
                    const navbarOffset = 85;
                    const targetY = elem.getBoundingClientRect().top + window.scrollY - navbarOffset;
                    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-300" />
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="font-display font-bold text-2xl text-white">99.98%</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Reliability</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-gradient-purple">0.8ms</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">AI Latency</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-white">Global</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Multi-Region</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Futuristic 3D Holographic Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Radiant Ambient Orb Glow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-cyan-500/25 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" />
            
            {/* Interactive Holographic Canvas */}
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />

              {/* Floating Live Telemetry HUD Card 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -left-4 sm:top-4 sm:-left-6 glass-card p-3 rounded-2xl border border-white/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-xl pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-purple-300/80 uppercase">NEURAL ENGINE</div>
                  <div className="text-xs font-semibold text-white tracking-wide">Autonomous Synapse v4</div>
                </div>
              </motion.div>

              {/* Floating Live Telemetry HUD Card 2 (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 glass-card p-3 rounded-2xl border border-cyan-500/30 shadow-[0_8px_30px_rgba(6,182,212,0.15)] flex items-center gap-3 backdrop-blur-xl pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-300/80 uppercase">TELEMETRY</div>
                  <div className="text-xs font-semibold text-white tracking-wide">Zero Latency Fabric</div>
                </div>
              </motion.div>

              {/* Floating Security Badge */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="hidden sm:flex absolute top-1/2 -right-10 glass-card px-3 py-1.5 rounded-full border border-purple-500/30 items-center gap-2 backdrop-blur-xl pointer-events-none"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[10px] font-mono tracking-wider text-gray-300">QUANTUM ENCRYPTED</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase">
            Scroll To Discover
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
