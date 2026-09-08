import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'NEXORA’s spatial architecture transformed our neural telemetry from an abstract research paper into an award-winning interface. Their engineering caliber and aesthetic instinct are completely unmatched in the industry.',
    author: 'Elena Rostova',
    position: 'VP of Product Architecture',
    company: 'Aether AI Systems',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    metrics: '99.98% Model Precision Achieved',
  },
  {
    id: 2,
    quote:
      'The post-quantum security framework and flawless dark luxury execution exceeded every metric of institutional FinTech. Our tier-one liquidity partners were blown away during the global protocol launch.',
    author: 'Marcus Vance',
    position: 'Chief Technology Officer',
    company: 'Luminary Global Treasury',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    metrics: '$8.4B+ Daily Volume Handled',
  },
  {
    id: 3,
    quote:
      'Their team delivered a 120 FPS real-time aerodynamic telemetry cockpit that shocked our board of directors. NEXORA doesn’t just design software; they create future-defining digital instruments.',
    author: 'Dr. Kenji Sato',
    position: 'Head of Autonomous Systems',
    company: 'Vortex Dynamics Automobili',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    metrics: '0.2ms Sensor Latency',
  },
  {
    id: 4,
    quote:
      'In a landscape crowded with generic templates and superficial hype, NEXORA represents the gold standard of bespoke digital craftsmanship. They built our global platform ahead of schedule.',
    author: 'Amara Thorne',
    position: 'Managing Partner',
    company: 'Hyperion DeepTech Capital',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    metrics: '10x User Engagement Spike',
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIdx];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-purple-200 uppercase font-semibold">
              EXECUTIVE ENDORSEMENTS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            Revered by <span className="text-gradient-purple">Industry Visionaries</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
            How leaders at the helm of breakthrough technologies experience partnering with NEXORA.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.1] shadow-2xl relative overflow-hidden"
              >
                {/* Background watermarked Quote Icon */}
                <Quote className="absolute right-6 bottom-6 w-32 h-32 text-white/[0.02] pointer-events-none" />

                {/* Stars & Metric Pill */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono text-gray-400">5.0 Star Rating</span>
                  </div>

                  <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    {active.metrics}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-display font-medium text-lg sm:text-2xl text-gray-100 leading-relaxed mb-8 italic">
                  "{active.quote}"
                </p>

                {/* Author Profile */}
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <img
                      src={active.avatar}
                      alt={active.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    />
                    <div>
                      <div className="font-display font-bold text-white text-base">
                        {active.author}
                      </div>
                      <div className="text-xs text-gray-400">
                        {active.position} ·{' '}
                        <span className="text-purple-300 font-medium">
                          {active.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev/Next & Dots */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIdx === idx
                      ? 'w-8 bg-purple-500 shadow-[0_0_12px_#a855f7]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-600/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-90 transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-600/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-90 transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
