import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Eye, Search, FileText, Camera, Film, CheckCircle, Flame, ArrowRight, Zap } from 'lucide-react';

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Monitor the scroll progress of the Process timeline section container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      id: "discover",
      title: "Discover",
      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Define Goals & Metrics",
      desc: "We analyze your existing media channels, brand positioning, and performance metrics (e.g. followers, average engagement rate, primary objectives)."
    },
    {
      id: "research",
      title: "Research",
      icon: <Search className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Audience & Competitor Audit",
      desc: "Locating top consumer centers, age groups, and active viewing periods (like 6 PM - 10 PM) to structure content relevance."
    },
    {
      id: "script",
      title: "Script",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Retention & Hook Matrix",
      desc: "Drafting micro-educational and viral text scripts with powerful 1.5s visual hook options designed for high save rates."
    },
    {
      id: "shoot",
      title: "Shoot",
      icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Cinematic Capture",
      desc: "Directing high-fidelity mobile and studio recordings. We focus on premium setups, clean lighting, and clear creator delivery."
    },
    {
      id: "edit",
      title: "Edit",
      icon: <Film className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Retention Design",
      desc: "Adding custom dynamic fonts, sound effects, B-roll overlays, speed ramps, and animations to minimize drop-off."
    },
    {
      id: "optimize",
      title: "Optimize",
      icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "A/B Cover & Meta-Tagging",
      desc: "Structuring thumbnails, SEO tags, search-friendly titles, and description hooks to trigger algorithmic push."
    },
    {
      id: "scale",
      title: "Scale",
      icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5" />,
      tagline: "Cross-Platform Virality",
      desc: "Syndicating contents across Instagram, Shorts, Facebook, and LinkedIn. Setting up organic viral loops for compounding growth."
    }
  ];

  // Map scroll progress (0 to 1) to active step index
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const stepCount = steps.length;
      const stepIndex = Math.min(
        Math.floor(latest * stepCount),
        stepCount - 1
      );
      if (stepIndex !== activeStep) {
        setActiveStep(stepIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeStep, steps.length]);

  // Scroll viewport smoothly to align with step index trigger points
  const handleNodeClick = (idx: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionStart = rect.top + scrollTop;
    const sectionHeight = rect.height;
    
    // Position target is (idx / steps.length) of the scrolling distance
    const scrollRange = sectionHeight - window.innerHeight;
    const targetScroll = sectionStart + (idx / steps.length) * scrollRange + 5; // offset slightly to lock
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={sectionRef} className="relative h-[350vh] bg-background" id="process">
      {/* Sticky container that keeps elements centered on scroll */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-4 sm:py-8">
        
        {/* Background neon grid blob */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-text tracking-tight">
              How We Build Virality
            </h2>
            <p className="text-muted font-light leading-relaxed text-[11px] md:text-sm max-w-lg mx-auto">
              Scroll down to watch our process advance phase-by-phase, or click any stage to navigate.
            </p>
          </div>

          {/* Interactive Steps Navigation Track */}
          <div className="relative mb-6 md:mb-14 max-w-3xl mx-auto px-1 sm:px-0">
            {/* Horizontal Line behind nodes (top offset aligned with node circle centers) */}
            <div className="absolute top-[18px] sm:top-[24px] md:top-[28px] left-0 right-0 h-0.5 bg-zinc-800 z-0" />
            
            {/* Active Connector Progress based on current scroll */}
            <motion.div
              className="absolute top-[18px] sm:top-[24px] md:top-[28px] left-0 h-0.5 bg-gradient-to-r from-primary to-secondary z-0 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between items-center gap-1 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = idx < activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleNodeClick(idx)}
                    className="flex flex-col items-center gap-1.5 min-w-[42px] sm:min-w-[70px] md:min-w-[85px] flex-shrink-0 group focus:outline-none"
                  >
                    <div
                      className={`w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-tr from-primary to-secondary text-text border-transparent shadow-lg shadow-primary/20 scale-110'
                          : isPassed
                          ? 'bg-zinc-900 text-primary border-primary/20'
                          : 'bg-surface text-muted border-border hover:border-zinc-700 hover:text-text'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span
                      className={`text-[10px] md:text-xs font-bold font-heading transition-colors hidden sm:block ${
                        isActive ? 'text-primary' : 'text-zinc-500 group-hover:text-text'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail Card Panel with Slide reveals */}
          <div className="max-w-3xl mx-auto px-1 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-3xl p-5 md:p-10 border border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl min-h-[200px]"
              >
                {/* Left Details */}
                <div className="md:col-span-8 space-y-2">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 animate-pulse" />
                    Step 0{activeStep + 1} &bull; {steps[activeStep].tagline}
                  </span>
                  <h3 className="text-xl md:text-3xl font-extrabold font-heading text-text tracking-tight">
                    {steps[activeStep].title} Stage
                  </h3>
                  <p className="text-xs text-muted font-light leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>

                {/* Right Action Callout */}
                <div className="md:col-span-4 flex justify-end">
                  <div className="w-full p-4 rounded-2xl bg-zinc-950/90 border border-white/5 flex flex-col justify-between h-28 md:h-36">
                    <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                      Next phase
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-text">
                        {steps[activeStep + 1] ? steps[activeStep + 1].title : "Launch Day 🚀"}
                      </h4>
                      <p className="text-[9px] text-muted truncate">
                        {steps[activeStep + 1] ? steps[activeStep + 1].tagline : "Your brand goes viral"}
                      </p>
                    </div>
                    {steps[activeStep + 1] ? (
                      <button
                        onClick={() => handleNodeClick(activeStep + 1)}
                        className="flex items-center gap-1 text-[10px] text-primary font-bold hover:text-secondary transition-colors text-left"
                      >
                        Advance Step
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <span className="text-[10px] text-success font-bold">Compound Growth Engine</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
