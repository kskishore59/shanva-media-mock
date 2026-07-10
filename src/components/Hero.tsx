import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax mouse effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springX1 = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY1 = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const springX2 = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const springY2 = useSpring(mouseY, { stiffness: 40, damping: 15 });

  const springX3 = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY3 = useSpring(mouseY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30; // Devide to limit range
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-dot-grid bg-noise"
      id="hero"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full mesh-glow-1 opacity-60 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full mesh-glow-2 opacity-50 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Cinematic Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-primary/20 text-xs font-semibold text-primary tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>AI + Creator Powered Content Studio</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-heading leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block text-white"
            >
              We Don't Just Manage
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-white"
            >
              Social Media.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2 pt-3 animate-gradient-shift"
              style={{ backgroundSize: '200% auto' }}
            >
              We Build Brands People Can't Stop Watching.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-xl font-light leading-relaxed"
          >
            Creator-led storytelling. Viral short-form video. Regional marketing.
            Powered by trend intelligence to build hyper-engaged audiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={onContactClick}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-text font-bold shadow-xl shadow-primary/20 hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Start Growing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onWorkClick}
              className="px-8 py-4 rounded-2xl bg-surface border border-border hover:bg-zinc-900 text-text font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              See Our Work
              <Play className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Redesigned Creator Growth OS Mockup */}
        <div className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center">
          {/* Main Integrated OS Dashboard Card */}
          <motion.div
            style={isMobile ? undefined : { x: springX1, y: springY1 }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`w-full max-w-[460px] h-[400px] rounded-3xl bg-[#0b0c13]/60 backdrop-blur-xl border border-white/10 shadow-2xl relative p-4 flex flex-col justify-between overflow-hidden group z-20 ${isMobile ? 'animate-float-slow' : ''}`}
          >
            {/* Window Top Bar controls */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-[9px] text-zinc-500 font-bold ml-2 font-mono">shanva_growth_os.app</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[8px] font-bold text-primary animate-pulse">
                Growth Engine Active
              </span>
            </div>

            {/* Main Inside Panels Split */}
            <div className="grid grid-cols-12 gap-3 h-full pt-3 pb-2 overflow-hidden">
              {/* Left Side: Editor Tracks Timeline (Span 7) */}
              <div className="col-span-7 flex flex-col justify-between h-full space-y-3">
                {/* Script and Wave Panel */}
                <div className="p-3 bg-[#07080d]/80 rounded-2xl border border-white/5 flex flex-col justify-between flex-grow">
                  <div className="space-y-1">
                    <span className="text-[7px] uppercase tracking-wider text-zinc-500 font-bold">Trend Hook Generator</span>
                    <p className="text-[9px] font-semibold text-text leading-relaxed">
                      "We don't just manage social media... we build viral brands."
                    </p>
                  </div>
                  {/* Waveform graphic */}
                  <div className="h-8 flex items-center justify-between gap-0.5 mt-2">
                    {[30, 60, 45, 90, 40, 75, 20, 85, 50, 70, 35, 95, 60, 40, 80, 20, 55, 30].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                        transition={{ duration: 1.2 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[3px] bg-gradient-to-t from-primary to-secondary rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Subtitle Editing Track Timeline */}
                <div className="p-2.5 bg-[#07080d]/80 rounded-2xl border border-white/5 space-y-1.5">
                  <span className="text-[7px] uppercase tracking-wider text-zinc-500 font-bold">Retention Subtitle Tracks</span>
                  <div className="space-y-1 text-[8px]">
                    <div className="flex items-center justify-between p-1.5 bg-[#12131e] border border-primary/20 rounded-lg">
                      <span className="text-primary font-bold">0:01s</span>
                      <span className="text-text font-medium text-[8px] truncate max-w-[80px]">Catchy 1.5s Hook</span>
                      <span className="text-[7px] text-zinc-500 font-mono">100% Ret.</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-zinc-900/50 border border-white/5 rounded-lg text-zinc-400">
                      <span>0:03s</span>
                      <span className="truncate max-w-[80px]">Core Engagement</span>
                      <span className="text-[7px] text-zinc-600">Dynamic cut</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Phone Simulated Reel Viewport (Span 5) */}
              <div className="col-span-5 h-full rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden relative flex flex-col justify-end p-2.5">
                {/* Simulated vertical video gradient background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-[#12131e] to-accent/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/20 filter blur-xl animate-pulse" />

                {/* Overlaying video components */}
                <div className="relative z-10 space-y-2">
                  {/* Phone Header */}
                  <div className="flex justify-between items-center text-[7px] text-zinc-300 font-medium">
                    <span className="px-1 py-0.5 rounded bg-black/40 border border-white/5 flex items-center gap-0.5">
                      <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                      Live
                    </span>
                    <span>13.3M</span>
                  </div>

                  {/* Dynamic Subtitle overlay */}
                  <div className="py-1.5 px-1 text-center bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
                    <p className="text-[8px] font-black text-text tracking-wide leading-tight">
                      CANT STOP
                    </p>
                    <p className="text-[8px] font-black text-secondary tracking-wide leading-tight">
                      WATCHING! 🚀
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-primary to-accent" />
                      <span className="text-[7.5px] font-bold text-text">@shanvamedia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Panel Status bar */}
            <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[8px] text-zinc-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Render Status: Complete
              </span>
              <span>Subtitles Synced (EN/TE/HI)</span>
            </div>
          </motion.div>

          {/* Floating Analytics Card: Followers */}
          <motion.div
            style={isMobile ? undefined : { x: springX2, y: springY2 }}
            initial={{ opacity: 0, x: 20, y: -40 }}
            animate={{ opacity: 1, x: 30, y: -50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`absolute -top-6 -right-6 w-[150px] glass-card p-3 rounded-2xl z-30 shadow-xl border border-white/10 flex items-center gap-2.5 ${isMobile ? 'animate-float-medium' : ''}`}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
            </div>
            <div>
              <p className="text-[8px] text-muted font-medium">Followers</p>
              <p className="text-xs font-extrabold text-text font-heading">42,800</p>
              <span className="text-[8px] text-success font-semibold flex items-center gap-0.5">
                +15.4%
              </span>
            </div>
          </motion.div>

          {/* Floating Reach Card */}
          <motion.div
            style={isMobile ? undefined : { x: springX3, y: springY3 }}
            initial={{ opacity: 0, x: -20, y: 40 }}
            animate={{ opacity: 1, x: -30, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`absolute -bottom-6 -left-6 w-[160px] glass-card p-3 rounded-2xl z-30 shadow-xl border border-white/10 space-y-1.5 ${isMobile ? 'animate-float-fast' : ''}`}
          >
            <div className="flex justify-between items-center text-[8.5px] text-zinc-400">
              <span>Weekly Reach</span>
              <span className="px-1.5 py-0.5 rounded bg-success/20 text-[7px] text-success font-semibold">
                Viral
              </span>
            </div>
            <div className="text-xs font-black text-text font-heading">30,000,000</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
