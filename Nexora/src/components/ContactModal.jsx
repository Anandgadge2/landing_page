import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI & Neural Systems',
    budget: '$50k - $100k',
    message: '',
  });

  const services = [
    'AI & Neural Systems',
    'Spatial Computing / 3D',
    'High-Throughput FinTech',
    'Haute Digital Experience',
  ];

  const budgets = ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#c084fc', '#ffffff'],
      });
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#090714] border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(139,92,246,0.3)] z-10 my-8 overflow-hidden"
        >
          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.1] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  <span className="text-[10px] font-mono tracking-widest text-purple-200 uppercase">
                    Direct Inquiry
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  Let’s Build Something <span className="text-gradient-purple">Extraordinary</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Tell us about your technical requirements and ambition. We respond within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2.5">
                    Target Capability
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setFormData({ ...formData, service: s })}
                        className={`py-2.5 px-3.5 rounded-xl text-xs font-medium text-left border transition-all ${
                          formData.service === s
                            ? 'bg-purple-950/80 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:border-white/[0.15] hover:text-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jordan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@visionary.tech"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* Company & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Dynamics Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0d0a1c] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-[#0d0a1c] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                    Project Vision / Technical Scope
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your desired architecture, deliverables, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] border border-purple-400/40 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  {loading ? (
                    <span>Synchronizing Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success confirmation screen */
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <div className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-1">
                TRANSMISSION VERIFIED · REF #NEX-9821
              </div>
              <h3 className="font-display font-extrabold text-3xl text-white mb-3">
                Ambition Received.
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our executive engineering team has been notified. We will review your requirements under mutual NDA and initiate contact within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] transition-all"
              >
                Return to NEXORA
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
