import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Eye, Heart, BarChart2 } from 'lucide-react';

interface PlatformData {
  followers: number;
  followersGrowth: string;
  reach: string;
  engagement: string;
  graphPoints: string;
  topContent: {
    title: string;
    type: string;
    views: string;
    likes: string;
    metric: string;
    metricLabel: string;
  };
}

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<'ig' | 'yt' | 'li' | 'fb'>('ig');
  const [realtimeFollowers, setRealtimeFollowers] = useState(42800);
  const [realtimeLikes, setRealtimeLikes] = useState(362000);
  const [pulseMetric, setPulseMetric] = useState<string | null>(null);

  // Increase numbers slightly to simulate a "live dashboard"
  useEffect(() => {
    const interval = setInterval(() => {
      const isFollowerInc = Math.random() > 0.4;
      if (isFollowerInc) {
        setRealtimeFollowers(prev => prev + Math.floor(Math.random() * 3) + 1);
        setPulseMetric('follower');
        setTimeout(() => setPulseMetric(null), 1000);
      }
      setRealtimeLikes(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data: Record<'ig' | 'yt' | 'li' | 'fb', PlatformData> = {
    ig: {
      followers: 42800,
      followersGrowth: "+15.4%",
      reach: "30,000,000",
      engagement: "4.2%",
      graphPoints: "M10 80 Q 25 15, 40 45 T 70 20 T 100 10",
      topContent: {
        title: "Educational Reel (Why traditional hooks fail)",
        type: "Instagram Reel",
        views: "13.3M",
        likes: "362K",
        metric: "3,100",
        metricLabel: "Comments"
      }
    },
    yt: {
      followers: 12500,
      followersGrowth: "+18.2%",
      reach: "10,500,000",
      engagement: "6.8%",
      graphPoints: "M10 80 Q 25 60, 40 50 T 70 30 T 100 5",
      topContent: {
        title: "Short-Form Production Framework",
        type: "YouTube Short",
        views: "10.5M",
        likes: "176K",
        metric: "18%",
        metricLabel: "Save Rate"
      }
    },
    li: {
      followers: 8400,
      followersGrowth: "+24.1%",
      reach: "2,400,000",
      engagement: "8.1%",
      graphPoints: "M10 90 Q 25 70, 40 40 T 70 35 T 100 15",
      topContent: {
        title: "CEO Personal Branding Strategy",
        type: "Carousel",
        views: "500K",
        likes: "22K",
        metric: "450",
        metricLabel: "Reposts"
      }
    },
    fb: {
      followers: 24100,
      followersGrowth: "+8.9%",
      reach: "7,800,000",
      engagement: "3.9%",
      graphPoints: "M10 70 Q 25 65, 40 55 T 70 45 T 100 25",
      topContent: {
        title: "Interactive Story & Poll Quiz",
        type: "Interactive Story",
        views: "2.4M",
        likes: "95K",
        metric: "11.8%",
        metricLabel: "Poll Interaction"
      }
    }
  };

  const current = data[activeTab];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="dashboard">
      {/* Mesh Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-secondary/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            SaaS Content Engine
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
            Live Analytics Dashboard
          </h2>
          <p className="text-muted font-light leading-relaxed text-sm md:text-base">
            Witness how our retention strategies drive real-time engagement loops, organic followers, and exponential reach.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="glass-panel rounded-[32px] border border-white/8 overflow-hidden shadow-2xl">
          {/* Dashboard Header / Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0a0c] border-b border-border px-8 py-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold font-heading uppercase tracking-wider text-muted">
                Shanva Live Performance Engine
              </span>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-1.5 bg-zinc-950 p-1.5 rounded-2xl border border-white/5 overflow-x-auto max-w-full scrollbar-none shrink-0">
              {[
                { id: 'ig', name: 'Instagram', icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { id: 'yt', name: 'YouTube', icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> },
                { id: 'li', name: 'LinkedIn', icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { id: 'fb', name: 'Facebook', icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-tr from-primary to-secondary text-text shadow-md'
                      : 'text-zinc-400 hover:text-text hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout inside Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-8">
            {/* Left Metrics column (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Followers metric */}
              <div className="p-6 bg-zinc-950 rounded-2xl border border-white/5 space-y-2 relative overflow-hidden">
                <div className="flex justify-between items-center text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary" /> Followers
                  </span>
                  <span className="px-2 py-0.5 rounded bg-success/20 text-[10px] text-success font-semibold">
                    {current.followersGrowth}
                  </span>
                </div>
                <div className="text-3xl font-black font-heading text-text flex items-baseline gap-2">
                  <span>
                    {activeTab === 'ig' ? realtimeFollowers.toLocaleString() : current.followers.toLocaleString()}
                  </span>
                  {pulseMetric === 'follower' && activeTab === 'ig' && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: -5 }}
                      className="text-xs text-success font-bold"
                    >
                      +1
                    </motion.span>
                  )}
                </div>
                <p className="text-[10px] text-muted">Real-time follower compounding</p>
              </div>

              {/* Impressions/Reach metric */}
              <div className="p-6 bg-zinc-950 rounded-2xl border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-secondary" /> Impressions
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-[10px] text-primary font-semibold">
                    Viral Loop
                  </span>
                </div>
                <div className="text-3xl font-black font-heading text-text">
                  {current.reach}
                </div>
                <p className="text-[10px] text-muted">Organic content impressions (Jan-Jun)</p>
              </div>

              {/* Engagement Rate */}
              <div className="p-6 bg-zinc-950 rounded-2xl border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-accent" /> Engagement
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] text-text font-semibold">
                    Target: 4%
                  </span>
                </div>
                <div className="text-3xl font-black font-heading text-text">
                  {current.engagement}
                </div>
                <p className="text-[10px] text-muted">Average rate per published asset</p>
              </div>
            </div>

            {/* Middle Graph Column (Span 5) */}
            <div className="lg:col-span-5 bg-zinc-950 border border-white/5 rounded-2xl p-6 flex flex-col justify-between relative min-h-[300px]">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold font-heading text-text">Reach Trend (Weekly)</h3>
                  <p className="text-[10px] text-muted">Monthly targets hit ahead of schedule</p>
                </div>
                <span className="text-[11px] text-zinc-400 font-medium">Jan &mdash; Jun 2026</span>
              </div>

              {/* SVG Animated Chart */}
              <div className="h-44 w-full relative mt-4">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  
                  {/* Path */}
                  <AnimatePresence mode="wait">
                    <motion.path
                      key={activeTab}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' } as any}
                      d={current.graphPoints}
                      fill="none"
                      stroke="url(#chart-grad-stroke)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </AnimatePresence>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="chart-grad-stroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex justify-between text-[9px] text-muted pt-2 border-t border-white/5">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            {/* Right Top Content Column (Span 3) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Top Performing Asset */}
              <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-4">
                <span className="text-[10px] text-primary uppercase font-bold tracking-widest block">
                  Top Performing Asset
                </span>
                
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-text line-clamp-2">
                    {current.topContent.title}
                  </h4>
                  <span className="text-[9px] text-muted px-2 py-0.5 rounded bg-white/5 inline-block">
                    {current.topContent.type}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Views
                    </span>
                    <span className="font-bold text-text">{current.topContent.views}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" /> Likes
                    </span>
                    <span className="font-bold text-text">
                      {activeTab === 'ig' ? realtimeLikes.toLocaleString() : current.topContent.likes}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted">{current.topContent.metricLabel}</span>
                    <span className="font-bold text-primary">{current.topContent.metric}</span>
                  </div>
                </div>
              </div>

              {/* Geographic Insight */}
              <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl space-y-2">
                <span className="text-[10px] text-secondary uppercase font-bold tracking-widest block">
                  Primary Demographic
                </span>
                <div className="text-lg font-bold text-text font-heading">Hyderabad Local</div>
                <div className="flex justify-between text-xs text-muted">
                  <span>Age dominant</span>
                  <span className="text-text font-semibold">22–44 (65% M, 35% F)</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-secondary h-full" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
