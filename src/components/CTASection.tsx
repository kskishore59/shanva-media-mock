import { useState } from 'react';
import type { RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INTEGRATION_CONFIG } from '../config';

interface CTASectionProps {
  formRef: RefObject<HTMLDivElement | null>;
}

export default function CTASection({ formRef }: CTASectionProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form state
  const [projectData, setProjectData] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    industry: '',
    serviceNeeded: '',
    budgetRange: '',
    timeline: '',
    details: ''
  });

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectData.name || !projectData.email) return;
    setLoading(true);
    setErrorMsg('');

    // Format WhatsApp message
    const waNumber = '918977687916';
    const textMessage = `Hello Shanva Media, I'd like to talk about a project!\n\n` +
      `*Name:* ${projectData.name}\n` +
      `*Brand Name:* ${projectData.brandName}\n` +
      `*Email:* ${projectData.email}\n` +
      `*Phone:* ${projectData.phone}\n` +
      `*Industry:* ${projectData.industry}\n` +
      `*Service Needed:* ${projectData.serviceNeeded}\n` +
      `*Budget Range:* ${projectData.budgetRange}\n` +
      `*Timeline:* ${projectData.timeline}\n` +
      `*Details:* ${projectData.details}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;

    try {
      const response = await fetch(INTEGRATION_CONFIG.googleSheetsWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }, // Using text/plain is safer for CORS
        body: JSON.stringify({ type: 'project_brief', ...projectData })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setLoading(false);
      setSubmitted(true);
      triggerConfetti();
      
      // Delay redirection slightly so the user sees the success state and confetti
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 1500);
    } catch (err) {
      console.error('Form submission failed:', err);
      setLoading(false);
      setErrorMsg(
        'Failed to log brief in Google Sheets. Please ensure your Web App is deployed with "Who has access: Anyone" or email us directly.'
      );
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#0EA5E9', '#EC4899', '#10B981']
    });
  };

  return (
    <section ref={formRef} className="py-20 sm:py-28 md:py-36 bg-background relative overflow-hidden section-glow-divider" id="cta">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-mesh-footer filter blur-[160px] opacity-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Form Container Card - Clean Centered Layout */}
        <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 md:p-12 rounded-[32px] shadow-layered text-center">
          
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-text tracking-[-0.04em]">
              Let's Talk!
            </h2>
            <p className="text-sm text-muted font-light max-w-lg mx-auto">
              Start with your project brief first. Tell us about your brand, goals, and what you're looking for, and we'll outline a viral growth blueprint.
            </p>
          </div>

          <div className="w-full">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="py-10 space-y-5"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-emerald-600">
                      Project Brief Saved!
                    </h3>
                    <p className="text-xs text-muted max-w-sm mx-auto leading-[1.6]">
                      Thank you for sharing your details. We have logged your project brief and will audit your social handles shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setProjectData({ name: '', brandName: '', email: '', phone: '', industry: '', serviceNeeded: '', budgetRange: '', timeline: '', details: '' });
                    }}
                    className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 rounded-xl text-xs font-semibold text-text transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                /* Project Brief Form - Indian Rupees Options & Mobile-responsive */
                <motion.form
                  key="projectForm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleProjectSubmit}
                  className="space-y-4 w-full text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Your Name</label>
                      <input
                        type="text"
                        required
                        value={projectData.name}
                        onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Brand Name</label>
                      <input
                        type="text"
                        required
                        value={projectData.brandName}
                        onChange={(e) => setProjectData({ ...projectData, brandName: e.target.value })}
                        placeholder="Brand Name"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Email</label>
                      <input
                        type="email"
                        required
                        value={projectData.email}
                        onChange={(e) => setProjectData({ ...projectData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Phone</label>
                      <input
                        type="tel"
                        required
                        value={projectData.phone}
                        onChange={(e) => setProjectData({ ...projectData, phone: e.target.value })}
                        placeholder="Phone number"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Industry</label>
                      <input
                        type="text"
                        value={projectData.industry}
                        onChange={(e) => setProjectData({ ...projectData, industry: e.target.value })}
                        placeholder="e.g. Food, Fashion, Real E..."
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Services Needed</label>
                      <div className="relative">
                        <select
                          required
                          value={projectData.serviceNeeded}
                          onChange={(e) => setProjectData({ ...projectData, serviceNeeded: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 pr-10 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all appearance-none cursor-pointer placeholder:text-zinc-400"
                        >
                          <option value="">Select a service</option>
                          <option value="Branding & Design">Branding & Design</option>
                          <option value="Websites & E-commerce">Websites & E-commerce</option>
                          <option value="Online Marketing">Online Marketing</option>
                          <option value="Content & Storytelling">Content & Storytelling</option>
                          <option value="AI Content & Automation">AI Content & Automation</option>
                          <option value="Social Media Management">Social Media Management</option>
                          <option value="SEO & Analytics">SEO & Analytics</option>
                          <option value="Video Production">Video Production</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Budget Range</label>
                      <div className="relative">
                        <select
                          required
                          value={projectData.budgetRange}
                          onChange={(e) => setProjectData({ ...projectData, budgetRange: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 pr-10 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a range</option>
                          <option value="< ₹50,000">Less than ₹50,000</option>
                          <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                          <option value="₹1,50,000 - ₹3,00,000">₹1,50,000 - ₹3,00,000</option>
                          <option value="₹3,00,000+">₹3,00,000+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-500 font-bold tracking-tight">Timeline</label>
                      <div className="relative">
                        <select
                          required
                          value={projectData.timeline}
                          onChange={(e) => setProjectData({ ...projectData, timeline: e.target.value })}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 pr-10 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediate">Immediate</option>
                          <option value="1-3 Months">1 - 3 Months</option>
                          <option value="3+ Months">3+ Months</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-bold tracking-tight">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      value={projectData.details}
                      onChange={(e) => setProjectData({ ...projectData, details: e.target.value })}
                      placeholder="Tell us about your brand, goals, and what you're looking for..."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:bg-white focus:border-primary/50 transition-all placeholder:text-zinc-400 resize-none resize-y"
                    />
                  </div>

                  {errorMsg && <p className="text-xs text-red-500 font-medium">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-center font-bold text-white btn-gradient-primary relative overflow-hidden group flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
                  >
                    {loading ? <span>Logging Details...</span> : <span>Send Project Brief</span>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
