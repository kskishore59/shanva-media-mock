import { motion } from 'framer-motion';
import { Sparkles, Compass, Globe, Zap, Cpu, BarChart3 } from 'lucide-react';

export default function WhyShanva() {
  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Creator-First DNA",
      desc: "Built from active creator experience. We understand real retention psychology, not theoretical corporate posting templates.",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-600",
      glowColor: "bg-purple-500",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Trend Intelligence",
      desc: "We scan real-time platform signals. Our hooks adapt within hours of algorithm updates and trending format breakouts.",
      color: "from-blue-500/20 to-sky-500/20",
      iconColor: "text-blue-600",
      glowColor: "bg-blue-500",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Regional Expertise",
      desc: "Hyper-focused on cultural localization, especially within local high-impact circles (Hyderabad & regional centers).",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-600",
      glowColor: "bg-pink-500",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Powered Workflow",
      desc: "Scripting, SEO keyword tags, hook variations, and frame trimming enhanced by neural algorithms for peak turnaround speed.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-600",
      glowColor: "bg-emerald-500",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Content That Converts",
      desc: "Views are vanity. We design storytelling lines that establish high trust, prompting saves, shares, and high commercial conversions.",
      color: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-600",
      glowColor: "bg-amber-500",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Performance Tracking",
      desc: "Granular weekly reports showing actual organic traffic, follower growth patterns, and engagement targets.",
      color: "from-indigo-500/20 to-cyan-500/20",
      iconColor: "text-indigo-600",
      glowColor: "bg-indigo-500",
    }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="why-shanva">
      {/* Background gradients — bigger */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.04] filter blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
        {/* Left Side: Massive typography */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Why Shanva Media
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.05] text-text tracking-[-0.04em] sm:tracking-[-0.05em]"
          >
            We Don't Follow <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Trends.
            </span>{" "}
            We <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Engineer Them.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted font-light leading-[1.6] max-w-sm"
          >
            Conventional agencies post content. We manufacture audience retention using a scientific framework that builds deep consumer trust.
          </motion.p>
        </div>

        {/* Right Side: 3D animated cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 perspective-800">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                type: 'spring', 
                stiffness: 70, 
                damping: 13, 
                mass: 0.8,
                delay: idx * 0.08 
              }}
              whileHover={{ y: -6, rotateY: 3 }}
              className="glass-card p-6 rounded-[24px] relative overflow-hidden group card-3d"
            >
              {/* Dynamic corner glow — bigger, animated */}
              <div className={`absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br ${p.color} rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="space-y-4 relative z-10">
                <div className={`w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center ${p.iconColor} group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-text group-hover:text-primary transition-colors duration-300 tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="text-xs text-muted font-light leading-[1.6]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
