import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoServices from './components/BentoServices';
import WhyShanva from './components/WhyShanva';
import ProcessTimeline from './components/ProcessTimeline';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import { INTEGRATION_CONFIG } from './config';

export default function App() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    if (INTEGRATION_CONFIG.preferCalendly) {
      window.open(INTEGRATION_CONFIG.calendlyUrl, '_blank', 'noopener,noreferrer');
    } else {
      ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    portfolioElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-background text-text overflow-x-clip">
      {/* Premium custom cursor */}
      <CursorFollower />

      {/* Global Background Overlays */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-30" />

      {/* Navigation */}
      <Navbar onContactClick={scrollToCTA} />

      {/* Hero Section */}
      <Hero onContactClick={scrollToCTA} onWorkClick={scrollToPortfolio} />

      {/* Trusted-By Infinite Marquee */}
      <Marquee />

      {/* Bento Grid Services */}
      <div id="services">
        <BentoServices />
      </div>

      {/* Why Shanva Split Section */}
      <div id="why-shanva">
        <WhyShanva />
      </div>

      {/* Horizontal Workflow Timeline */}
      <ProcessTimeline />

      {/* Live SaaS Analytics Dashboard */}
      <div id="dashboard">
        <AnalyticsDashboard />
      </div>

      {/* Portfolio Gallery */}
      {/* <div id="portfolio" ref={portfolioRef}>
        <Portfolio />
      </div> */}

      {/* Results Counters */}
      <div id="results">
        <Results />
      </div>

      {/* Client Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Industries Chips */}
      <div id="industries">
        <Industries />
      </div>

      {/* FAQ Accordion */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Final Call to Action */}
      <CTASection formRef={ctaRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
