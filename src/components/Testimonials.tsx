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
    <section className="py-24 bg-[#09090b] relative overflow-hidden" id="testimonials">
      {/* Background radial blurs */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Client Success
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
            Loved by Builders & Brands
          </h2>
        </div>

        {/* Testimonials Card Shell */}
        <div className="relative">
          {/* Quote Mark Icon */}
          <div className="absolute -top-10 -left-6 md:-left-12 text-zinc-800 opacity-20 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group glow-border"
            >
              <div className="space-y-8">
                {/* Rating & Metric */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                    {testimonials[activeIdx].metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-zinc-100 font-light leading-relaxed italic">
                  "{testimonials[activeIdx].quote}"
                </p>

                {/* Profile Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-heading font-extrabold text-sm text-text shadow-md">
                    {testimonials[activeIdx].avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-text font-heading">
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
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === idx ? 'w-8 bg-primary' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/5 text-muted hover:text-text hover:border-zinc-700 transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/5 text-muted hover:text-text hover:border-zinc-700 transition-colors flex items-center justify-center"
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
