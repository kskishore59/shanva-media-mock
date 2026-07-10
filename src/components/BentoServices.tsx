import { motion } from 'framer-motion';
import { Video, Brain, Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function BentoServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      } as any,
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
              What We Do
            </h2>
          </div>
          <p className="text-muted max-w-md font-light leading-relaxed text-sm md:text-base">
            We don't do boring corporate posting. We deploy creator-led storytelling frameworks to turn casual viewers into obsessed brand advocates.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {/* Card 1: Content Production (Large, Span 3 columns) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 h-[380px] rounded-[32px] glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-text">
                Viral Content Production
              </h3>
              <p className="text-sm text-muted max-w-sm font-light">
                High-converting reels, TikToks, and YouTube Shorts. We handle scripting, filming, and modern retention editing that hooks viewers in 1.2 seconds.
              </p>
            </div>

            {/* Simulated editing dashboard timeline */}
            <div className="h-28 bg-[#0a0a0c] rounded-2xl border border-white/5 p-4 flex flex-col justify-between group-hover:border-primary/20 transition-colors duration-300">
              <div className="flex justify-between items-center text-[10px] text-muted">
                <span>Timeline Project: Educational Reel</span>
                <span className="text-success font-medium">Reels (58.8% Contribution)</span>
              </div>
              <div className="flex gap-2 items-end h-12">
                <div className="h-6 w-full bg-primary/20 rounded-md border border-primary/30 flex items-center justify-center text-[8px] font-bold text-primary">Hook</div>
                <div className="h-9 w-full bg-secondary/20 rounded-md border border-secondary/30 flex items-center justify-center text-[8px] font-bold text-secondary">Story</div>
                <div className="h-12 w-full bg-accent/20 rounded-md border border-accent/30 flex items-center justify-center text-[8px] font-bold text-accent">Value Pitch</div>
                <div className="h-7 w-full bg-emerald-500/20 rounded-md border border-emerald-500/30 flex items-center justify-center text-[8px] font-bold text-emerald-400">CTA</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI Content Workflows (Span 3 columns) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 h-[380px] rounded-[32px] glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl group-hover:bg-secondary/20 transition-colors duration-500 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-text">
                AI Content & Automation
              </h3>
              <p className="text-sm text-muted max-w-sm font-light">
                Leveraging neural script ideation, automatic caption engines, and AI trend tracking. We optimize scripts for algorithm retention to scale efficiency.
              </p>
            </div>

            {/* Interactive workflow items */}
            <div className="grid grid-cols-3 gap-2 relative z-10">
              <div className="p-3 bg-[#0a0a0c] border border-white/5 rounded-xl text-center group-hover:border-secondary/20 transition-all duration-300">
                <p className="text-[10px] text-muted">Script Prompt</p>
                <div className="h-1 w-full bg-secondary/20 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-4/5 bg-secondary animate-pulse" />
                </div>
              </div>
              <div className="p-3 bg-[#0a0a0c] border border-white/5 rounded-xl text-center group-hover:border-secondary/20 transition-all duration-300">
                <p className="text-[10px] text-muted">A/B Title Test</p>
                <span className="text-[10px] text-accent font-bold mt-1 block">98% Score</span>
              </div>
              <div className="p-3 bg-[#0a0a0c] border border-white/5 rounded-xl text-center group-hover:border-secondary/20 transition-all duration-300">
                <p className="text-[10px] text-muted">SEO Tags</p>
                <span className="text-[10px] text-success font-bold mt-1 block">Auto-Sync</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Social Media Management (Span 2 columns) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 h-[320px] rounded-[32px] glass-card p-6 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-text">SMM & Distribution</h4>
              <p className="text-xs text-muted font-light">
                Complete platform management: scheduling calendars, publishing loops, interactive polls, community response strategy.
              </p>
            </div>
            
            <div className="flex gap-2 border-t border-white/5 pt-4 text-[10px] text-muted font-medium">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Launch Monthly Content Calendar</span>
            </div>
          </motion.div>

          {/* Card 4: Creator Marketing (Span 2 columns) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 h-[320px] rounded-[32px] glass-card p-6 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-text">Creator Collaborations</h4>
              <p className="text-xs text-muted font-light">
                Partnerships with key nano and micro influencers. Direct collaboration access to scale credibility and local virality.
              </p>
            </div>

            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-zinc-800 flex items-center justify-center font-bold text-[9px] text-text">
                  C{i}
                </div>
              ))}
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-zinc-900 flex items-center justify-center font-bold text-[9px] text-primary">
                +15
              </div>
            </div>
          </motion.div>

          {/* Card 5: Regional & Demographic Focus (Span 2 columns) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 h-[320px] rounded-[32px] glass-card p-6 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-text">Regional Target Insights</h4>
              <p className="text-xs text-muted font-light">
                Tailored localization. Hyderabad is our top market, targeting the hyper-active 22–44 age group.
              </p>
            </div>

            <div className="p-3 bg-[#0a0a0c] rounded-xl border border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Active Hours</span>
              <span className="text-emerald-400 font-bold">6 PM – 10 PM</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
