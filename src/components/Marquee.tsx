import { Sparkles, Target, Zap, Shield, Flame, Activity } from 'lucide-react';

export default function Marquee() {
  const items = [
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, text: "INSTAGRAM VIRALITY" },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, text: "YOUTUBE SHORTS" },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, text: "LINKEDIN AUTHOR-BRAND" },
    { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, text: "FACEBOOK COMMUNITIES" },
    { icon: <Sparkles className="w-5 h-5" />, text: "CREATOR STORYTELLING" },
    { icon: <Target className="w-5 h-5" />, text: "REGIONAL INFLUENCE" },
    { icon: <Zap className="w-5 h-5" />, text: "TREND INTELLIGENCE" },
    { icon: <Shield className="w-5 h-5" />, text: "HYDERABAD SOCIAL CIRCLES" },
    { icon: <Flame className="w-5 h-5" />, text: "ORGANIC VIRAL LOOPS" },
    { icon: <Activity className="w-5 h-5" />, text: "AUDIENCE-DRIVEN GROWTH" },
  ];

  const scrollerItems = [...items, ...items];

  return (
    <div className="w-full bg-white border-y border-zinc-200/80 py-6 sm:py-8 overflow-hidden relative">
      {/* Wider fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee-slow">
        {scrollerItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 sm:gap-3 mx-5 sm:mx-8 md:mx-10 text-muted/40 hover:text-primary transition-all duration-400 cursor-pointer group"
          >
            <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 group-hover:border-primary/20 group-hover:bg-primary/[0.06] group-hover:shadow-glow-sm transition-all duration-400">
              {item.icon}
            </div>
            <span className="font-heading font-extrabold text-sm tracking-[0.2em] whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
