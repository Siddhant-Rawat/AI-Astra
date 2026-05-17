import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function FinTechVisual({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-[#020B22] via-[#050E2A] to-[#0A0A1E]'
          : 'bg-gradient-to-br from-[#E8F0FF] via-[#EEF4FF] to-[#F5F8FF]'
      }`} />
      {/* Grid */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(45,91,255,0.15)' : 'rgba(45,91,255,0.1)'} 1px, transparent 1px),
                            linear-gradient(90deg, ${isDark ? 'rgba(45,91,255,0.15)' : 'rgba(45,91,255,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isDark ? 1 : 0.7,
        }}
      />
      {/* Chart */}
      <svg className="absolute bottom-0 left-0 w-full h-3/4" preserveAspectRatio="none"
        style={{ opacity: isDark ? 0.4 : 0.5 }}>
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%"   stopColor="#2d5bff" stopOpacity={isDark ? '0.35' : '0.2'} />
            <stop offset="100%" stopColor="#2d5bff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points="0,160 70,130 140,105 210,75 280,90 350,55 420,30 490,15 540,8"
          fill="none" stroke={isDark ? '#b8c3ff' : '#2d5bff'} strokeWidth="2" />
        <polygon
          points="0,160 70,130 140,105 210,75 280,90 350,55 420,30 490,15 540,8 540,200 0,200"
          fill="url(#chartFill)" />
      </svg>
      <div className={`absolute top-6 right-6 w-28 h-28 rounded-full blur-3xl ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`} />
      <div className={`absolute bottom-12 left-4 w-16 h-16 rounded-full blur-2xl ${isDark ? 'bg-tertiary/15' : 'bg-tertiary/8'}`} />
    </div>
  );
}

function LuxuryVisual({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-[#0C0418] via-[#130828] to-[#0F051E]'
          : 'bg-gradient-to-br from-[#F0EAFF] via-[#F5F0FF] to-[#FAF7FF]'
      }`} />
      {/* Concentric rings */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice"
        style={{ opacity: isDark ? 0.2 : 0.3 }}>
        {[50, 100, 150, 200, 260, 330].map((r, i) => (
          <circle key={i} cx="75%" cy="28%" r={r} fill="none"
            stroke={isDark ? '#d0bcff' : '#571bc1'} strokeWidth="0.6" />
        ))}
        <line x1="0" y1="60%" x2="40%" y2="0"
          stroke={isDark ? '#571bc1' : '#8b3fda'} strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="0" y1="80%" x2="60%" y2="0"
          stroke={isDark ? '#571bc1' : '#8b3fda'} strokeOpacity="0.2"  strokeWidth="0.8" />
      </svg>
      <div className={`absolute top-4 right-8 w-36 h-36 rounded-full blur-3xl ${isDark ? 'bg-secondary/20' : 'bg-secondary/10'}`} />
      <div className={`absolute bottom-8 left-12 w-20 h-20 rounded-full blur-2xl ${isDark ? 'bg-primary/10' : 'bg-primary/6'}`} />
    </div>
  );
}

const PROJECTS = [
  {
    Visual: FinTechVisual,
    tag: 'FinTech AI',
    tagColor: 'bg-primary/15 border-primary/30 text-primary',
    title: 'Lumina Capital Interface',
    desc: 'Automated predictive analytics platform for global equity markets with real-time neural forecasting.',
  },
  {
    Visual: LuxuryVisual,
    tag: 'Luxury Retail',
    tagColor: 'bg-secondary/15 border-secondary/30 text-secondary',
    title: 'Aurelius Digital Boutique',
    desc: 'Neural-powered personalization engine for bespoke fashion retail. Ambient aesthetics shift with user context.',
  },
];

export default function Portfolio() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface-container-lowest transition-colors duration-300" ref={ref}>
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">Selected Work</span>
            <h2 className="text-headline-lg text-on-surface mt-2 mb-4">Engineering the Intelligence Frontier</h2>
            <p className="text-body-md text-on-surface-variant">
              Explore how we've helped industry leaders transition into the AI-first era through cutting-edge engineering.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const { Visual } = p;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40, x: i === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-default"
              >
                <Visual isDark={isDark} />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-black/85 via-black/30' : 'from-black/60 via-black/15'
                } to-transparent`} />
                <div className="absolute bottom-0 p-7 w-full">
                  <span className={`px-3 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider mb-4 inline-block ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-headline-md text-white">{p.title}</h3>
                  <p className="text-white/70 text-body-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
