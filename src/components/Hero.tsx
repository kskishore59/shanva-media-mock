import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX1 = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY1 = useSpring(mouseY, { stiffness: 50, damping: 18 });
  const springX2 = useSpring(mouseX, { stiffness: 35, damping: 14 });
  const springY2 = useSpring(mouseY, { stiffness: 35, damping: 14 });
  const springX3 = useSpring(mouseX, { stiffness: 40, damping: 16 });
  const springY3 = useSpring(mouseY, { stiffness: 40, damping: 16 });

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  const headingLines = [
    { text: "We Don't Just Manage", delay: 0.3 },
    { text: "Social Media.", delay: 0.45 },
  ];

  const gradientLine = {
    text: "We Build Brands People Can't Stop Watching.",
    delay: 0.6,
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-dot-grid bg-noise"
      id="hero"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full mesh-glow-1 opacity-50 animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] md:w-[550px] md:h-[550px] rounded-full mesh-glow-2 opacity-40 animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full mesh-glow-3 opacity-20 pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-7">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.15 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full badge-pill text-[11px] sm:text-xs font-semibold text-primary tracking-wide"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin-slow" />
            <span>AI + Creator Powered Content Studio</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black font-heading leading-[1.05] tracking-[-0.04em] sm:tracking-[-0.05em]">
            {headingLines.map((line, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring', stiffness: 80, damping: 12, mass: 0.8, delay: line.delay
                }}
                className="block text-text"
              >
                {line.text}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring', stiffness: 80, damping: 12, mass: 0.8, delay: gradientLine.delay
              }}
              className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-1 sm:pb-2 pt-2 sm:pt-3 animate-gradient-shift"
              style={{ backgroundSize: '200% auto' }}
            >
              {gradientLine.text}
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.8 }}
            className="text-base md:text-xl text-muted max-w-xl font-light leading-[1.6]"
          >
            Creator-led storytelling. Viral short-form video. Regional marketing.
            Powered by trend intelligence to build hyper-engaged audiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-1 sm:pt-2"
          >
            <button
              onClick={onContactClick}
              className="btn-gradient-primary px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2.5 group text-sm sm:text-[15px]"
            >
              Start Growing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: 3D Dashboard Mockup */}
        <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] flex items-center justify-center">
          <div className={`w-full h-full relative flex items-center justify-center ${!isMobile ? 'perspective-1200' : ''}`}>
            {/* Centered card-wrapper: holds main card + floating cards in one reference frame */}
            <div className={`relative w-[calc(100%-24px)] max-w-[432px] h-[300px] sm:h-[370px] md:h-[400px] ${isMobile ? 'animate-float-slow' : ''}`}>
              {/* Main Dashboard Card */}
              <motion.div
                style={isMobile ? undefined : { x: springX1, y: springY1 }}
                initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{
                  type: 'spring', stiffness: 60, damping: 14, mass: 1, delay: 0.5
                }}
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border border-zinc-200/80 shadow-card-3d p-3 sm:p-4 flex flex-col justify-between overflow-hidden group text-text"
              >
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] via-transparent to-secondary/[0.01] pointer-events-none rounded-2xl sm:rounded-3xl" />

                {/* Window Top Bar */}
                <div className="flex justify-between items-center border-b border-zinc-100 pb-2 sm:pb-3 relative z-10">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ef4444]/80" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#eab308]/80" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#22c55e]/80" />
                    <span className="text-[7px] sm:text-[9px] text-zinc-400 font-bold ml-1 sm:ml-2 font-mono hidden sm:inline">shanva_growth_os.app</span>
                  </div>
                  <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-primary/10 border border-primary/20 text-[7px] sm:text-[8px] font-bold text-primary animate-pulse">
                    Growth Engine Active
                  </span>
                </div>

                {/* Main Inside Panels Split */}
                <div className="grid grid-cols-12 gap-2 sm:gap-3 h-full pt-2 sm:pt-3 pb-1 sm:pb-2 overflow-hidden relative z-10 flex-1">
                  {/* Left Side: Editor Tracks Timeline */}
                  <div className="col-span-7 flex flex-col justify-between h-full space-y-2 sm:space-y-3">
                    <div className="p-2 sm:p-3 bg-zinc-50 border border-zinc-100 rounded-xl sm:rounded-2xl flex flex-col justify-between flex-grow">
                      <div className="space-y-0.5 sm:space-y-1">
                        <span className="text-[6px] sm:text-[7px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Trend Hook Generator</span>
                        <p className="text-[7px] sm:text-[9px] font-semibold text-text leading-relaxed">
                          "We don't just manage social media... we build viral brands."
                        </p>
                      </div>
                      <div className="h-6 sm:h-8 flex items-center justify-between gap-px sm:gap-0.5 mt-1.5 sm:mt-2">
                        {[30, 60, 45, 90, 40, 75, 20, 85, 50, 70, 35, 95, 60, 40, 80, 20, 55, 30].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                            transition={{ duration: 1.2 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[2px] sm:w-[3px] bg-gradient-to-t from-primary to-secondary rounded-full"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-2 sm:p-2.5 bg-zinc-50 border border-zinc-100 rounded-xl sm:rounded-2xl space-y-1 sm:space-y-1.5">
                      <span className="text-[6px] sm:text-[7px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Retention Subtitle Tracks</span>
                      <div className="space-y-0.5 sm:space-y-1 text-[7px] sm:text-[8px]">
                        <div className="flex items-center justify-between p-1 sm:p-1.5 bg-white border border-primary/20 rounded-md sm:rounded-lg">
                          <span className="text-primary font-bold text-[6px] sm:text-[7px]">0:01s</span>
                          <span className="text-text font-medium truncate max-w-[60px] sm:max-w-[80px]">Catchy 1.5s Hook</span>
                          <span className="text-[6px] text-zinc-400 font-mono hidden sm:inline">100% Ret.</span>
                        </div>
                        <div className="flex items-center justify-between p-1 sm:p-1.5 bg-zinc-100/50 border border-zinc-200/20 rounded-md sm:rounded-lg text-zinc-400">
                          <span className="text-[6px] sm:text-[7px]">0:03s</span>
                          <span className="truncate max-w-[60px] sm:max-w-[80px]">Core Engagement</span>
                          <span className="text-[6px] text-zinc-400 hidden sm:inline">Dynamic cut</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Phone Simulated Reel Viewport */}
                  <div className="col-span-5 h-full rounded-lg sm:rounded-2xl bg-zinc-950 border border-zinc-200/20 overflow-hidden relative flex flex-col justify-end p-2 sm:p-2.5 vignette">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-[#12131e] to-accent/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/20 filter blur-xl animate-pulse" />

                    <div className="relative z-10 space-y-1 sm:space-y-2">
                      <div className="flex justify-between items-center text-[6px] sm:text-[7px] text-zinc-300 font-medium">
                        <span className="px-0.5 sm:px-1 py-0.5 rounded bg-black/40 border border-white/[0.05] flex items-center gap-0.5">
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-red-500 rounded-full animate-pulse" />
                          Live
                        </span>
                        <span>13.3M</span>
                      </div>
                      <div className="py-1 sm:py-1.5 px-0.5 sm:px-1 text-center bg-black/40 backdrop-blur-sm rounded-md sm:rounded-lg border border-white/[0.05]">
                        <p className="text-[7px] sm:text-[8px] font-black text-white tracking-wide leading-tight">
                          CANT STOP
                        </p>
                        <p className="text-[7px] sm:text-[8px] font-black text-secondary tracking-wide leading-tight">
                          WATCHING!
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-tr from-primary to-accent" />
                        <span className="text-[6px] sm:text-[7.5px] font-bold text-white">@shanvamedia</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel Status bar */}
                <div className="border-t border-zinc-100 pt-1.5 sm:pt-2 flex justify-between items-center text-[7px] sm:text-[8px] text-zinc-400 relative z-10">
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-success animate-pulse" />
                    Render Status: Complete
                  </span>
                  <span className="hidden sm:inline">Subtitles Synced (EN/TE/HI)</span>
                </div>
              </motion.div>

              {/* Floating Analytics Card: Followers */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 1.2 }}
                style={isMobile ? undefined : { x: springX2, y: springY2 }}
                className="absolute -top-2 sm:-top-3 -right-3 sm:-right-4 w-[120px] sm:w-[155px] glass-card p-2 sm:p-3 rounded-xl sm:rounded-2xl z-30 shadow-card border border-zinc-200/80 flex items-center gap-2 sm:gap-2.5"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                </div>
                <div>
                  <p className="text-[6px] sm:text-[8px] text-muted font-medium">Followers</p>
                  <p className="text-[10px] sm:text-xs font-extrabold text-text font-heading">42,800</p>
                  <span className="text-[6px] sm:text-[8px] text-success font-semibold">+15.4%</span>
                </div>
              </motion.div>

              {/* Floating Reach Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 1.4 }}
                style={isMobile ? undefined : { x: springX3, y: springY3 }}
                className="absolute -bottom-2 sm:-bottom-3 -left-3 sm:-left-4 w-[130px] sm:w-[165px] glass-card p-2 sm:p-3 rounded-xl sm:rounded-2xl z-30 shadow-card border border-zinc-200/80 space-y-1"
              >
                <div className="flex justify-between items-center text-[7px] sm:text-[8.5px] text-zinc-400">
                  <span>Weekly Reach</span>
                  <span className="px-1 sm:px-1.5 py-0.5 rounded-sm sm:rounded-md bg-success/15 text-[6px] sm:text-[7px] text-success font-semibold">Viral</span>
                </div>
                <div className="text-[10px] sm:text-xs font-black text-text font-heading">30,000,000</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
