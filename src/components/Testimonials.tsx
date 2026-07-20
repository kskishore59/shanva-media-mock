import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Shanva Media didn't just boost our views; they redefined how we communicate our brand values. Their micro-educational scripts drove 13.3M organic impressions and established high credibility.",
      name: "Dr. Ananya Reddy",
      role: "Founder & Chief Nutritionist",
      company: "The Nutrition Catalyst",
      rating: 5,
      metric: "13.3M Views Achieved",
      avatar: "AR"
    },
    {
      id: 2,
      quote: "Their trend intelligence is phenomenal. Within hours of an algorithm shift, they re-filmed and adapted our hooks. Our restaurant save rate shot up to 18%, filling our reservations week after week.",
      name: "Vikram Malhotra",
      role: "Managing Director",
      company: "Epicurean Bistro",
      rating: 5,
      metric: "18% Save Rate",
      avatar: "VM"
    },
    {
      id: 3,
      quote: "Their team's creator-first DNA is apparent. They understand how modern audiences consume content. We gained over 45,000 highly engaged regional followers in less than 4 months.",
      name: "Sanjay K.",
      role: "Head of Marketing",
      company: "Aesthetic Spaces",
      rating: 5,
      metric: "+45K Local Followers",
      avatar: "SK"
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="testimonials">
      {/* Background radial blurs — bigger */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text tracking-[-0.04em]"
          >
            Loved by Builders & Brands
          </motion.h2>
        </div>

        {/* Testimonials Card Shell */}
        <div className="relative">
          {/* Quote Mark — bigger, more subtle */}
          <div className="absolute -top-8 -left-4 sm:-top-12 sm:-left-8 md:-left-14 text-zinc-200/50 pointer-events-none select-none">
            <Quote className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 25, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -25, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[28px] p-8 md:p-12 relative overflow-hidden group glow-border shadow-layered"
            >
              <div className="space-y-8">
                {/* Rating & Metric */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-4 py-1.5 rounded-full badge-pill text-xs font-bold text-primary">
                    {testimonials[activeIdx].metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-text font-light leading-[1.7] italic tracking-[-0.01em]">
                  "{testimonials[activeIdx].quote}"
                </p>

                {/* Profile Row */}
                <div className="flex items-center gap-4 pt-5 border-t border-zinc-200/80">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-heading font-extrabold text-sm text-white shadow-glow-sm">
                    {testimonials[activeIdx].avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-text font-heading tracking-[-0.02em]">
                      {testimonials[activeIdx].name}
                    </h4>
                    <p className="text-xs text-muted">
                      {testimonials[activeIdx].role} &bull; <span className="text-secondary font-medium">{testimonials[activeIdx].company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex justify-between items-center mt-8 px-2">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    activeIdx === idx ? 'w-8 bg-gradient-to-r from-primary to-secondary' : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl bg-white border border-zinc-200 text-muted hover:text-text hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl bg-white border border-zinc-200 text-muted hover:text-text hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
