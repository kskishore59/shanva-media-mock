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
    <section className="py-24 bg-[#09090b] relative overflow-hidden" id="faq">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
            Frequently Asked
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden transition-all duration-300 hover:border-zinc-800"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 px-8 flex justify-between items-center text-left gap-4"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-text tracking-wide group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary border-primary/20' : ''
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-6 text-sm md:text-base text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
