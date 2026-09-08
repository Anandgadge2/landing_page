import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FeaturesBento from './components/FeaturesBento';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#040307] text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Dynamic Cosmic Background Canvas */}
      <BackgroundCanvas />

      {/* Main Glassmorphic Layout */}
      <div className="relative z-10 flex flex-col">
        {/* 1. Sticky Glass Navbar */}
        <Navbar onOpenContact={() => setContactModalOpen(true)} />

        <main>
          {/* 2. Hero Section */}
          <Hero onOpenContact={() => setContactModalOpen(true)} />

          {/* 3. Trusted By Client Marquee */}
          <TrustedBy />

          {/* 4. Features Bento Grid (6 Core Features) */}
          <FeaturesBento />

          {/* 6. How It Works (4-Phase Architecture Lifecycle) */}
          <HowItWorks onOpenContact={() => setContactModalOpen(true)} />

          {/* 5. About & 7. Animated Statistics */}
          <About onOpenContact={() => setContactModalOpen(true)} />

          {/* 8. Solutions / Curated Industry Use Cases */}
          <Showcase />

          {/* 9. Client Testimonials (4 Executive Reviews) */}
          <Testimonials />

          {/* 10. Engagement Pricing (3 Tier Plans with Annual/Monthly Toggle) */}
          <Pricing onOpenContact={() => setContactModalOpen(true)} />

          {/* 11. FAQ Knowledge Base (6 Interactive Accordion Inquiries) */}
          <FAQ onOpenContact={() => setContactModalOpen(true)} />

          {/* 12. Final Call To Action */}
          <CallToAction onOpenContact={() => setContactModalOpen(true)} />
        </main>

        {/* 13. Minimal Luxury Footer */}
        <Footer onOpenContact={() => setContactModalOpen(true)} />
      </div>

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
