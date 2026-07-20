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
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#6366F1', '#0EA5E9', '#EC4899']
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleHover}
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 70, damping: 13, mass: 0.8 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-card rounded-[28px] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between min-h-[220px] sm:min-h-[240px] md:h-[260px]"
    >
      {/* Background themed glow — larger, pulsing */}
      <div className={`absolute -top-10 -right-10 w-44 h-44 rounded-full filter blur-[60px] opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none ${glowColor}`} />
      
      <div className="flex justify-between items-start relative z-10">
        <div className="p-3.5 bg-zinc-100 border border-zinc-200/80 rounded-2xl text-text group-hover:shadow-glow-sm transition-shadow duration-300">
          {icon}
        </div>
        <span className="text-[10px] text-muted font-bold uppercase tracking-[0.2em] border border-zinc-200/80 px-2.5 py-1 rounded-full badge-pill">
          Verified Metric
        </span>
      </div>

      <div className="space-y-1 relative z-10">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-text tracking-[-0.04em] flex items-baseline gap-1">
          <motion.span>{rounded}</motion.span>
          <span className="text-primary">{suffix}</span>
        </h3>
        <p className="text-sm font-bold text-text font-heading tracking-[-0.02em]">{label}</p>
        <p className="text-xs text-muted font-light leading-[1.6]">{description}</p>
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
    <section className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="results">
      {/* Dynamic blob background — larger */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Proven Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text tracking-[-0.04em]"
          >
            Compounding Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted font-light leading-[1.6] text-sm"
          >
            Actual performance data compiled between January and June 2026. Hover over each metric card to celebrate.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
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
