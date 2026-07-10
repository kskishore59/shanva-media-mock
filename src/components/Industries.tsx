import { motion } from 'framer-motion';
import { Heart, Utensils, Home, GraduationCap, Sparkles, Shirt, ShoppingBag, Dumbbell, Hotel, Compass } from 'lucide-react';

export default function Industries() {
  const sectors = [
    { name: "Healthcare & Nutrition", icon: <Heart className="w-4 h-4" />, color: "hover:border-purple-500 hover:text-purple-400" },
    { name: "Restaurants & Cafes", icon: <Utensils className="w-4 h-4" />, color: "hover:border-blue-500 hover:text-blue-400" },
    { name: "Real Estate & Spaces", icon: <Home className="w-4 h-4" />, color: "hover:border-pink-500 hover:text-pink-400" },
    { name: "Education & Academies", icon: <GraduationCap className="w-4 h-4" />, color: "hover:border-emerald-500 hover:text-emerald-400" },
    { name: "Creators & Influencers", icon: <Sparkles className="w-4 h-4" />, color: "hover:border-amber-500 hover:text-amber-400" },
    { name: "Fashion & Lifestyle", icon: <Shirt className="w-4 h-4" />, color: "hover:border-indigo-500 hover:text-indigo-400" },
    { name: "Retail & E-commerce", icon: <ShoppingBag className="w-4 h-4" />, color: "hover:border-rose-500 hover:text-rose-400" },
    { name: "Gyms & Fitness Centers", icon: <Dumbbell className="w-4 h-4" />, color: "hover:border-cyan-500 hover:text-cyan-400" },
    { name: "Hospitality & Dining", icon: <Hotel className="w-4 h-4" />, color: "hover:border-teal-500 hover:text-teal-400" },
    { name: "Travel & Leisure", icon: <Compass className="w-4 h-4" />, color: "hover:border-yellow-500 hover:text-yellow-400" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="industries">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Sectors Covered
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
            Industries We Scale
          </h2>
          <p className="text-muted max-w-md mx-auto font-light text-sm">
            Whether premium lifestyle brands or regional leaders, our creator growth models are custom-fit for your demographic.
          </p>
        </div>

        {/* Chips Container */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sectors.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-3 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-2.5 cursor-pointer text-sm font-semibold transition-all duration-300 ${sec.color} hover:bg-zinc-900`}
            >
              <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/5">
                {sec.icon}
              </div>
              <span className="font-heading tracking-wide text-zinc-300 group-hover:text-inherit">
                {sec.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
