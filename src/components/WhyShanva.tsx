import { motion } from 'framer-motion';
import { Sparkles, Compass, Globe, Zap, Cpu, BarChart3 } from 'lucide-react';

export default function WhyShanva() {
  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Creator-First DNA",
      desc: "Built from active creator experience. We understand real retention psychology, not theoretical corporate posting templates.",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Trend Intelligence",
      desc: "We scan real-time platform signals. Our hooks adapt within hours of algorithm updates and trending format breakouts.",
      color: "from-blue-500/20 to-sky-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Regional Expertise",
      desc: "Hyper-focused on cultural localization, especially within local high-impact circles (Hyderabad & regional centers).",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Powered Workflow",
      desc: "Scripting, SEO keyword tags, hook variations, and frame trimming enhanced by neural algorithms for peak turnaround speed.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Content That Converts",
      desc: "Views are vanity. We design storytelling lines that establish high trust, prompting saves, shares, and high commercial conversions.",
      color: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Performance Tracking",
      desc: "Granular weekly reports showing actual organic traffic, follower growth patterns, and engagement targets.",
      color: "from-indigo-500/20 to-cyan-500/20",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="py-28 bg-[#09090b] relative overflow-hidden" id="why-shanva">
      {/* Background gradients */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Massive agency typography */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Why Shanva Media
          </span>
          <h2 className="text-5xl sm:text-6xl font-black font-heading leading-[1.1] text-text">
            We Don't Follow <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Trends.
            </span>{" "}
            We <br />
            Engineer Them.
          </h2>
          <p className="text-base text-muted font-light leading-relaxed max-w-sm">
            Conventional agencies post content. We manufacture audience retention using a scientific framework that builds deep consumer trust.
          </p>
        </div>

        {/* Right Side: Animated cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-[28px] border border-white/5 relative overflow-hidden group"
            >
              {/* Dynamic corner gradient glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="space-y-4 relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-text group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted font-light leading-relaxed">
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
