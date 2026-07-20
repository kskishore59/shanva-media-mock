import { motion } from 'framer-motion';
import { 
  Palette, Globe, Target, Sparkles, Brain, 
  Calendar, TrendingUp, Video
} from 'lucide-react';

export default function BentoServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="services">
      {/* Visual background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/[0.03] filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text tracking-[-0.04em]"
          >
            Services Designed to Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted font-light leading-[1.6] text-sm md:text-base"
          >
            We merge creators' intuition with analytical systems to offer modern brand solutions that capture and sustain attention.
          </motion.p>
        </div>

        {/* Custom Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          
          {/* Card 1: Branding & Design */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                <Palette className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  Branding & Design
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Visual systems, cohesive brand books, assets, and modern guidelines.
                </p>
              </div>
            </div>
            
            {/* Embedded Micro Mockup */}
            <div className="flex items-center gap-1.5 pt-3">
              <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-sky-400 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-pink-400 shadow-sm" />
              <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md font-bold font-mono ml-auto">
                Brand Book Ready
              </span>
            </div>
          </motion.div>

          {/* Card 2: Websites & E-commerce */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-650 shadow-sm">
                <Globe className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  Websites & Funnels
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Fast responsive experiences designed for maximum conversion.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 text-[10px]">
              <span className="text-zinc-400 font-mono">Mobile responsive</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md font-bold font-mono">
                99 PageSpeed Score
              </span>
            </div>
          </motion.div>

          {/* Card 3: AI Content & Automation (Spans 2 columns on lg screens for bento styling) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="col-span-1 bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer overflow-hidden relative"
          >
            <div className="space-y-4 text-left relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary shadow-sm">
                <Brain className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  AI Content & Automation
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Leveraging neural scripts, auto caption systems, and A/B title tracking.
                </p>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3 relative z-10">
              <div className="flex-1 space-y-1 text-left">
                <div className="flex justify-between text-[9px] font-bold text-text">
                  <span>Script Generation</span>
                  <span>80% Efficiency</span>
                </div>
                <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
              <span className="text-[10px] text-pink-700 bg-pink-50 border border-pink-100 px-2 py-0.5 rounded-md font-bold font-mono">
                SEO Tags Sync
              </span>
            </div>
          </motion.div>

          {/* Card 4: Online Marketing */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-650 shadow-sm">
                <Target className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  Online Marketing
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Paid media distribution campaigns aimed at maximizing overall ROAS.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 text-[10px]">
              <span className="text-zinc-400 font-mono">Performance Paid Channels</span>
              <span className="text-pink-700 bg-pink-50 border border-pink-100 px-2 py-0.5 rounded-md font-bold font-mono">
                4.8x Avg ROAS
              </span>
            </div>
          </motion.div>

          {/* Card 5: Social Media Management (Spans 2 columns on medium & large screens for bento styling) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="sm:col-span-2 bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="flex flex-col justify-between flex-1 text-left">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-650 shadow-sm">
                  <Calendar className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                    Social Media Management
                  </h3>
                  <p className="text-xs text-muted font-light leading-relaxed mt-1">
                    Complete calendar scheduling, posting loops, community reply systems, and platform distribution.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <span className="text-[10px] text-purple-750 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md font-bold font-mono">
                  Calendar Synced
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md font-bold font-mono">
                  Community Active
                </span>
              </div>
            </div>

            {/* Simulated mini dashboard timeline for the bento layout */}
            <div className="hidden sm:flex flex-col justify-center gap-2 w-44 p-3 bg-zinc-50 border border-zinc-200/60 rounded-2xl text-[9px]">
              <span className="text-zinc-400 font-bold uppercase tracking-wider text-[8px]">Next scheduled posts</span>
              <div className="p-1.5 bg-white border border-zinc-200/80 rounded-lg flex items-center justify-between font-mono">
                <span className="text-purple-600 font-bold">MON 10AM</span>
                <span className="text-zinc-500">Reel Clip</span>
              </div>
              <div className="p-1.5 bg-white border border-zinc-200/80 rounded-lg flex items-center justify-between font-mono">
                <span className="text-purple-600 font-bold">WED 4PM</span>
                <span className="text-zinc-500">Slide Carousel</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Content & Storytelling */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-650 shadow-sm">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  Content & Storytelling
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Creator-led storytelling, viral hooks, and templates that retain interest.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-3 text-left">
              <div className="flex justify-between text-[9px] font-bold text-text">
                <span>Hook Retention</span>
                <span>88% Target</span>
              </div>
              <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '88%' }} />
              </div>
            </div>
          </motion.div>

          {/* Card 7: SEO & Analytics */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-650 shadow-sm">
                <TrendingUp className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  SEO & Analytics
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Organic rankings, keyword research, and dashboard metric indexing.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 text-[10px]">
              <span className="text-zinc-400 font-mono">Organic rankings</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md font-bold font-mono">
                Top #1 Rank
              </span>
            </div>
          </motion.div>

          {/* Card 8: Video Production */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-layered hover:border-primary/20 transition-all duration-400 group cursor-pointer"
          >
            <div className="space-y-4 text-left">
              <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center text-red-650 shadow-sm">
                <Video className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-text tracking-tight group-hover:text-primary transition-colors">
                  Video Production
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed mt-1">
                  Full post-production, editing, grading, sound finish, and styling.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3">
              <span className="text-[10px] text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md font-bold font-mono">
                4K UHD Pipeline
              </span>
              <span className="text-[10px] text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md font-bold font-mono ml-auto">
                Stereo Finish
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
