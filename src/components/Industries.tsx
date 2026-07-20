import { motion } from 'framer-motion';
import { Heart, Utensils, Home, GraduationCap, Sparkles, Shirt, ShoppingBag, Dumbbell, Hotel, Compass } from 'lucide-react';

export default function Industries() {
  const sectors = [
    { name: "Healthcare & Nutrition", icon: Heart, hoverClasses: "hover:border-purple-200 hover:bg-purple-50/50 hover:text-purple-600 text-purple-600" },
    { name: "Restaurants & Cafes", icon: Utensils, hoverClasses: "hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 text-blue-600" },
    { name: "Real Estate & Spaces", icon: Home, hoverClasses: "hover:border-pink-200 hover:bg-pink-50/50 hover:text-pink-600 text-pink-600" },
    { name: "Education & Academies", icon: GraduationCap, hoverClasses: "hover:border-emerald-200 hover:bg-emerald-50/50 hover:text-emerald-600 text-emerald-600" },
    { name: "Creators & Influencers", icon: Sparkles, hoverClasses: "hover:border-amber-200 hover:bg-amber-50/50 hover:text-amber-600 text-amber-600" },
    { name: "Fashion & Lifestyle", icon: Shirt, hoverClasses: "hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600 text-indigo-600" },
    { name: "Retail & E-commerce", icon: ShoppingBag, hoverClasses: "hover:border-rose-200 hover:bg-rose-50/50 hover:text-rose-600 text-rose-600" },
    { name: "Gyms & Fitness Centers", icon: Dumbbell, hoverClasses: "hover:border-cyan-200 hover:bg-cyan-50/50 hover:text-cyan-600 text-cyan-600" },
    { name: "Hospitality & Dining", icon: Hotel, hoverClasses: "hover:border-teal-200 hover:bg-teal-50/50 hover:text-teal-600 text-teal-600" },
    { name: "Travel & Leisure", icon: Compass, hoverClasses: "hover:border-yellow-200 hover:bg-yellow-50/50 hover:text-yellow-600 text-yellow-600" },
  ];

  return (
    <section className="py-24 md:py-28 bg-background relative overflow-hidden section-glow-divider" id="industries">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Sectors Covered
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text tracking-[-0.04em]"
          >
            Industries We Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted max-w-md mx-auto font-light text-sm leading-[1.6]"
          >
            Whether premium lifestyle brands or regional leaders, our creator growth models are custom-fit for your demographic.
          </motion.p>
        </div>

        {/* Chips Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {sectors.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl glass-card flex items-center gap-2 sm:gap-2.5 cursor-pointer text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 border border-zinc-200/60 text-slate-700 hover:text-text group ${sec.hoverClasses}`}
            >
              <div className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-200/60 group-hover:bg-white transition-colors duration-300 shrink-0">
                <sec.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="font-heading tracking-wide text-left leading-tight">
                {sec.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
