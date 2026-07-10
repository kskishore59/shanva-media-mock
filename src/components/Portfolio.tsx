import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Heart, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  metrics: {
    views: string;
    likes: string;
    growth: string;
  };
  videoUrl: string;
  beforeStats: string;
  afterStats: string;
}

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "The Nutrition Catalyst",
      category: "Healthcare & Wellness",
      metrics: {
        views: "13.3M",
        likes: "362K",
        growth: "1,200% Organic Reach"
      },
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-preparing-a-healthy-salad-41555-large.mp4",
      beforeStats: "1.2K views average",
      afterStats: "13.3M views (Viral Hook)"
    },
    {
      id: 2,
      title: "Epicurean Flavors",
      category: "Premium Restaurant",
      metrics: {
        views: "10.5M",
        likes: "176K",
        growth: "18% Save Rate"
      },
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-41561-large.mp4",
      beforeStats: "400 likes average",
      afterStats: "176K likes (Cinematic B-roll)"
    },
    {
      id: 3,
      title: "Aesthetic Urban Spaces",
      category: "Real Estate & Architecture",
      metrics: {
        views: "5.8M",
        likes: "210K",
        growth: "+45K Followers"
      },
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-real-estate-agent-holding-house-keys-40742-large.mp4",
      beforeStats: "Low local engagement",
      afterStats: "Hyderabad Target Breakthrough"
    },
    {
      id: 4,
      title: "Alpha Force Athletic",
      category: "Fitness & Apparel",
      metrics: {
        views: "8.2M",
        likes: "295K",
        growth: "4.2% Avg. Engagement"
      },
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-with-a-punching-bag-40810-large.mp4",
      beforeStats: "Struggled with retention",
      afterStats: "8.2M views (Speed Ramp Cut)"
    }
  ];

  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden" id="portfolio">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-text">
              Case Studies
            </h2>
          </div>
          <p className="text-muted max-w-sm font-light leading-relaxed text-sm">
            Hover over each card to experience cinematic loops. We build content that makes brand visibility skyrocket.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="relative h-[480px] rounded-[32px] overflow-hidden border border-white/5 bg-zinc-950 group cursor-pointer"
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              {/* Looping video fallback logic */}
              <video
                src={proj.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  hoveredId === proj.id || isMobile ? 'opacity-40 scale-105' : 'opacity-20'
                }`}
              />

              {/* Static visual overlay if video load is slow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Hover overlay highlights */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 rounded-full bg-black/50 text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 backdrop-blur-md">
                  {proj.category}
                </span>
              </div>

              {/* Before/After Overlay */}
              <div className="absolute top-6 right-6 z-20 flex flex-col sm:flex-row gap-1 sm:gap-2 items-end sm:items-center">
                <div className="px-2.5 py-1 rounded-lg bg-zinc-950/80 text-[9px] text-zinc-400 border border-white/5 backdrop-blur-sm">
                  Before: {proj.beforeStats}
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-[9px] text-emerald-400 border border-emerald-500/20 backdrop-blur-sm font-semibold">
                  After: {proj.afterStats}
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end space-y-4">
                <h3 className="text-2xl font-bold font-heading text-text group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>

                {/* Metrics stats row */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold flex items-center gap-1">
                      <Eye className="w-3 h-3 text-secondary" /> Views
                    </span>
                    <p className="text-lg font-black font-heading text-text">{proj.metrics.views}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold flex items-center gap-1">
                      <Heart className="w-3 h-3 text-accent" /> Likes
                    </span>
                    <p className="text-lg font-black font-heading text-text">{proj.metrics.likes}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-success" /> Growths
                    </span>
                    <p className="text-xs font-bold text-success truncate">{proj.metrics.growth}</p>
                  </div>
                </div>
              </div>

              {/* Animated hover play cursor inside card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: hoveredId === proj.id ? 1 : 0, opacity: hoveredId === proj.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-text"
                >
                  <Play className="w-6 h-6 fill-current text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
