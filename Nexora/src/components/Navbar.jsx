import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Radio, Zap, Layers, Compass, MessageSquare, Cpu, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalScroll) * 100)));
      }

      // Check if user has scrolled near the bottom of the page
      const isAtBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Active section detection using viewport bounding rects
      const sections = [
        'home',
        'features',
        'how-it-works',
        'about',
        'work',
        'testimonials',
        'pricing',
        'faq',
        'contact',
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and body scroll lock when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Sparkles },
    { name: 'Features', href: '#features', id: 'features', icon: Cpu, badge: 'AI' },
    { name: 'Process', href: '#how-it-works', id: 'how-it-works', icon: Compass },
    { name: 'About', href: '#about', id: 'about', icon: ShieldCheck },
    { name: 'Work', href: '#work', id: 'work', icon: Layers },
    { name: 'Pricing', href: '#pricing', id: 'pricing', icon: Zap },
    { name: 'FAQ', href: '#faq', id: 'faq', icon: MessageSquare },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Sparkles },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset for the fixed floating navbar (capsule height + padding buffer)
      const navbarOffset = 85;
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 pt-3 md:pt-4 px-3 sm:px-6">
      <div className="w-full max-w-6xl mx-auto pointer-events-auto relative">
        {/* Floating Capsule Container */}
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-2xl md:rounded-full transition-all duration-500 backdrop-blur-2xl ${
            scrolled
              ? 'bg-[#070512]/85 border border-purple-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.15)] py-2.5 px-4 sm:px-6'
              : 'bg-[#090616]/65 border border-white/[0.09] shadow-[0_12px_36px_rgba(0,0,0,0.45),0_0_20px_rgba(139,92,246,0.08)] py-3 px-5 sm:px-6'
          }`}
        >
          {/* Top-rim ambient holographic light beam */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

          {/* Inner subtle ambient glow flare */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-12 bg-purple-600/15 blur-2xl pointer-events-none rounded-full" />

          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Status Beacon */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none select-none"
            >
              {/* Holographic 3D Icon Container */}
              <div className="relative w-9 h-9 rounded-xl p-[1px] bg-gradient-to-br from-purple-500/60 via-violet-600/30 to-cyan-400/50 group-hover:from-purple-400 group-hover:to-cyan-300 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                <div className="w-full h-full rounded-[11px] bg-[#0d0a1c] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-cyan-400/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg
                    className="w-4 h-4 text-purple-300 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" className="fill-purple-500/20" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-display font-black tracking-[0.22em] text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-300">
                  NEXORA
                </span>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.25em] text-purple-300/80 uppercase">
                    AI LABS • v3.0
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links with Magnetic Sliding Hover Capsule */}
            <nav
              onMouseLeave={() => setHoveredLink(null)}
              className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl px-2 py-1 rounded-full relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
            >
              {navLinks.map((link, index) => {
                const activeNavId = activeSection === 'testimonials' ? 'work' : activeSection;
                const isActive = activeNavId === link.id;
                const isHovered = hoveredLink === index;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    onMouseEnter={() => setHoveredLink(index)}
                    className={`relative text-xs font-medium px-2.5 lg:px-3.5 py-1.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 select-none ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Sliding hover pill indicator */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 via-violet-600/25 to-cyan-500/25 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] pointer-events-none"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}

                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.9)] pointer-events-none"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10">{link.name}</span>

                    {/* Micro-badge */}
                    {link.badge && (
                      <span className="relative z-10 text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 scale-90">
                        {link.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Quick Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Live Edge Status Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md shadow-inner text-[11px] font-mono text-gray-400">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span className="tracking-wider text-[10px]">GLOBAL EDGE</span>
              </div>

              {/* Futuristic Luminous CTA Button */}
              <button
                onClick={onOpenContact}
                className="relative p-[1px] rounded-full overflow-hidden group cursor-pointer active:scale-95 transition-all duration-300"
              >
                {/* Animated gradient glowing aura border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-500 animate-pulse-slow" />

                {/* Inner button surface */}
                <div className="relative px-4 sm:px-5 py-2 rounded-full bg-[#0c0919] group-hover:bg-[#140e2b] flex items-center gap-2 transition-colors duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-300 group-hover:text-cyan-300 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-xs font-semibold tracking-wide text-white">
                    Get Started
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onOpenContact}
                className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:text-white active:scale-95 transition-transform"
                aria-label="Contact"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-purple-600/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-colors active:scale-95 cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-purple-300" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Micro Scroll Progress Line along bottom rim */}
          <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-white/[0.04] overflow-hidden rounded-full pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.9)] transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </motion.div>

        {/* Mobile Animated Glass Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Click-outside backdrop to dismiss mobile drawer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-0 bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto cursor-pointer"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 md:hidden mt-2 p-5 rounded-2xl bg-[#090616]/95 backdrop-blur-3xl border border-purple-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(139,92,246,0.2)]"
              >
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.id;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-purple-600/20 border border-purple-500/30 text-white font-semibold'
                            : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg ${isActive ? 'bg-purple-500/30 text-purple-200' : 'bg-white/[0.04] text-gray-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{link.name}</span>
                        </div>
                        {link.badge && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    );
                  })}

                  {/* Mobile CTA Button */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="mt-3 w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide text-white bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-purple-200" />
                    <span>Launch Nexora Console</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-200" />
                  </button>

                  {/* Mobile System Status Footer */}
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-gray-400 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SYSTEM ONLINE
                    </span>
                    <span>LATENCY 12MS</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
