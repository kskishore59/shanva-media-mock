import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Target, Users, BarChart3, Presentation } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StatItemProps {
  icon: ReactNode;
  targetNumber: number;
  suffix: string;
  label: string;
  decimals?: number;
  glowColor: string;
  description: string;
}

function StatCard({ icon, targetNumber, suffix, label, decimals = 0, glowColor, description }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 2.5,
        ease: 'easeOut',
      } as any);
      return controls.stop;
    }
  }, [isInView, targetNumber, count]);

  const handleHover = () => {
    // Mini confetti burst in themed colors
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.8 },
      colors: ['#7C3AED', '#3B82F6', '#EC4899']
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleHover}
      whileHover={{ scale: 1.03 }}
      className="glass-card rounded-[32px] p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between h-[250px]"
    >
      {/* Background themed glow */}
      <div className={`absolute top-0 right-0 w-36 h-36 rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${glowColor}`} />
      
      <div className="flex justify-between items-start">
        <div className="p-3.5 bg-zinc-900 border border-white/10 rounded-2xl text-text">
          {icon}
        </div>
        <span className="text-[10px] text-muted font-bold uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full">
          Verified Metric
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-5xl md:text-6xl font-black font-heading text-text tracking-tight flex items-baseline gap-1">
          <motion.span>{rounded}</motion.span>
          <span className="text-primary">{suffix}</span>
        </h3>
        <p className="text-sm font-bold text-zinc-300 font-heading">{label}</p>
        <p className="text-xs text-muted font-light leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const stats = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      targetNumber: 30,
      suffix: "M+",
      label: "Total Reach Impressions",
      glowColor: "bg-primary/20",
      description: "Aggregated organic views across client campaigns over a 6-month period."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      targetNumber: 42.8,
      suffix: "K+",
      label: "Total Followers Growth",
      decimals: 1,
      glowColor: "bg-secondary/20",
      description: "Average subscriber compounding target, growing brand visibility organically."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      targetNumber: 4.2,
      suffix: "%",
      label: "Average Engagement Rate",
      decimals: 1,
      glowColor: "bg-accent/20",
      description: "Organic save and interaction rates, far exceeding the industry standard of 1.5%."
    },
    {
      icon: <Presentation className="w-6 h-6 text-emerald-400" />,
      targetNumber: 56,
      suffix: "+",
      label: "Client Campaigns Published",
      glowColor: "bg-emerald-500/20",
      description: "High-impact social assets engineered, scripted, filmed, and optimized."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="results">
      {/* Dynamic blob background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Proven Performance
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
            Compounding Numbers
          </h2>
          <p className="text-muted font-light leading-relaxed text-sm">
            Actual performance data compiled between January and June 2026. Hover over each metric card to celebrate.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              glowColor={stat.glowColor}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
