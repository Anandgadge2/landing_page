import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      const navbarOffset = 85;
      const targetY = elem.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#040307] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-gray-400">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Tier: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:border-purple-300 transition-all">
                <svg
                  className="w-5 h-5 text-purple-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="font-display font-black text-2xl tracking-[0.2em] text-white">
                NEXORA
              </span>
            </a>

            <p className="text-gray-300 font-display italic text-base mb-4">
              “Building the Future, Beautifully.”
            </p>

            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              An elite digital engineering & luxury spatial computing collective shaping the next era of high-performance technology.
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-gray-300 tracking-wider">
                All Systems Operational (99.98%)
              </span>
            </div>
          </div>

          {/* Categorized Nav Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-purple-300 transition-colors cursor-pointer">Core Features</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleScrollTo(e, '#how-it-works')} className="hover:text-purple-300 transition-colors cursor-pointer">How It Works</a></li>
                <li><a href="#use-cases" onClick={(e) => handleScrollTo(e, '#use-cases')} className="hover:text-purple-300 transition-colors cursor-pointer">Industry Use Cases</a></li>
                <li><a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} className="hover:text-purple-300 transition-colors cursor-pointer">Engagement Pricing</a></li>
                <li><a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="hover:text-purple-300 transition-colors cursor-pointer">Knowledge Base / FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-purple-300 transition-colors cursor-pointer">About Collective</a></li>
                <li><a href="#statistics" onClick={(e) => handleScrollTo(e, '#statistics')} className="hover:text-purple-300 transition-colors cursor-pointer">Global Statistics</a></li>
                <li><a href="#work" onClick={(e) => handleScrollTo(e, '#work')} className="hover:text-purple-300 transition-colors cursor-pointer">Curated Work</a></li>
                <li><a href="#testimonials" onClick={(e) => handleScrollTo(e, '#testimonials')} className="hover:text-purple-300 transition-colors cursor-pointer">Client Accolades</a></li>
                <li><button onClick={onOpenContact} className="hover:text-purple-300 transition-colors text-left cursor-pointer">Direct Consultation</button></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Dispatches */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-2">
              NEXORA Dispatches
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Bi-weekly engineering briefs on spatial computing, neural synthesis, and digital luxury.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] font-mono text-purple-400 mt-2">
                Subscribed to executive dispatch.
              </span>
            )}
          </div>

        </div>

        {/* Bottom Tier: Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="text-gray-500">
            © {new Date().getFullYear()} NEXORA Technology Inc. All rights reserved. Designed with precision.
          </div>

          {/* Clean Vector Social icons */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/20 text-gray-400 hover:text-white border border-white/[0.06] hover:border-purple-500/30 transition-all"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/20 text-gray-400 hover:text-white border border-white/[0.06] hover:border-purple-500/30 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/20 text-gray-400 hover:text-white border border-white/[0.06] hover:border-purple-500/30 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/20 text-gray-400 hover:text-white border border-white/[0.06] hover:border-purple-500/30 transition-all"
              aria-label="Discord"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-500 font-mono text-[11px]">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
