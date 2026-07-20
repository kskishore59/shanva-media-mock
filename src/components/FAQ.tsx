import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What makes Shanva Media different from traditional social media agencies?",
      answer: "Traditional agencies focus on simple calendars and vanity metric likes. We focus on creator-first storytelling, short-form retention scripting, and AI-powered workflows to build real audiences who save and share. We treat social media as an active growth engine."
    },
    {
      question: "How do you align content with our specific target audience?",
      answer: "We perform a thorough demographic audit. For instance, for local brands targeting Hyderabad, we structure our timelines around core active hours (6 PM - 10 PM), content interests (nutrition, education, food), and demographics (dominant 22-44 age group) to maximize direct audience resonance."
    },
    {
      question: "Do you handle the entire content production pipeline?",
      answer: "Yes, we are end-to-end. We manage the research, script-writing with custom hook variations, professional studio or mobile filming, high-retention post-production (custom fonts, sound design, transitions), meta-tag SEO, and cross-platform scheduling."
    },
    {
      question: "What platforms do you support?",
      answer: "We optimize for the four major digital growth channels: Instagram (viral reels & brand building), YouTube (educational storytelling & Shorts), LinkedIn (thought leadership & corporate branding), and Facebook (community engagement)."
    },
    {
      question: "How quickly can we expect to see measurable results?",
      answer: "Our strategy begins within 14 days of onboarding. Once publishing cycles launch, we track weekly metrics. Accounts typical see organic reach impressions and follower growth escalations (such as our standard 15% subscriber spikes) within the first 30 days."
    }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="faq">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text tracking-[-0.04em]"
          >
            Frequently Asked
          </motion.h2>
        </div>

        {/* FAQ Accordion List — Glass styling */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl overflow-hidden transition-all duration-400 ${
                  isOpen 
                    ? 'glass-card shadow-layered' 
                    : 'glass-card'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 px-6 md:px-8 flex justify-between items-center text-left gap-4 group"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-text tracking-[-0.02em] group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-primary/15 border border-primary/25 text-primary rotate-0' 
                        : 'bg-zinc-100 border border-zinc-200 text-zinc-500 group-hover:text-text group-hover:border-zinc-300'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-sm md:text-base text-muted font-light leading-[1.7] border-t border-zinc-200/80 pt-5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
