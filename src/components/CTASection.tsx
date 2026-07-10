import { useState } from 'react';
import type { RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INTEGRATION_CONFIG } from '../config';

interface CTASectionProps {
  formRef: RefObject<HTMLDivElement | null>;
}

export default function CTASection({ formRef }: CTASectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setErrorMsg('');
    
    try {
      // Live POST request to the Google Sheets Webhook / Endpoint
      await fetch(INTEGRATION_CONFIG.googleSheetsWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });
      
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#3B82F6', '#EC4899', '#22C55E']
      });
    } catch (err: any) {
      console.warn("CORS warning, falling back to no-cors mode:", err);
      // Fallback: POST in no-cors mode so the request still reaches Google Apps Script
      try {
        await fetch(INTEGRATION_CONFIG.googleSheetsWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        setLoading(false);
        setSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#7C3AED', '#3B82F6', '#EC4899', '#22C55E']
        });
      } catch (fallbackErr) {
        setLoading(false);
        setErrorMsg('Failed to submit form. Please call or email us directly.');
      }
    }
  };

  return (
    <section ref={formRef} className="py-24 bg-background relative overflow-hidden" id="cta">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-mesh-footer filter blur-[150px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-zinc-950/80 border border-white/8 p-8 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 shadow-2xl">
          {/* Neon side borders */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          {/* Left Details */}
          <div className="lg:w-1/2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>Get Free Discovery Call</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-tight text-text">
              Ready to Become <br />
              the Brand Everyone <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% auto' }}>
                Talks About?
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-md">
              Book a 15-minute strategy call. We'll audit your current handles and outline a viral blueprint custom-fit for your brand.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 8977687916, +91 7416007557</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <Mail className="w-4 h-4 text-secondary" />
                <span>shanvamedia@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:w-1/2 w-full">
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-[#0a0a0c] border border-white/5 rounded-xl px-4 py-3 text-base md:text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Business Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full bg-[#0a0a0c] border border-white/5 rounded-xl px-4 py-3 text-base md:text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Company / Brand Name</label>
                        <input
                          type="text"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          placeholder="Brand Name"
                          className="w-full bg-[#0a0a0c] border border-white/5 rounded-xl px-4 py-3 text-base md:text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Current Social Handles / Goals</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="E.g., @brandname on Instagram. We want to double our organic reach."
                        className="w-full bg-[#0a0a0c] border border-white/5 rounded-xl px-4 py-3 text-base md:text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700 resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-center font-bold text-text bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden group shadow-lg shadow-primary/10 flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      {loading ? (
                        <span>Logging Details...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-text animate-pulse" />
                          <span>Book a Strategy Call</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-heading text-emerald-400">Inquiry Logged!</h3>
                      <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
                        Thank you, {formData.name}. We have saved your brand details. To lock in your strategy call session instantly, please select a calendar slot below:
                      </p>
                    </div>
                    
                    <a
                      href={INTEGRATION_CONFIG.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-text font-bold shadow-xl shadow-primary/20 hover:shadow-accent/20 transition-all duration-300 text-xs uppercase tracking-wider"
                    >
                      <Calendar className="w-4 h-4 text-text animate-bounce" />
                      Pick Calendar Slot
                    </a>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', business: '', notes: '' });
                          setErrorMsg('');
                        }}
                        className="text-[10px] text-zinc-500 hover:text-text underline"
                      >
                        or Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
