import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/* ─── Visuals ────────────────────────────────────────────────────────────── */

function FinTechVisual({ isDark }) {
  const tickers = [
    { sym: 'AAPL', val: '+2.4%', up: true },
    { sym: 'ETH',  val: '+7.1%', up: true },
    { sym: 'NVDA', val: '-0.8%', up: false },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#020B22] via-[#050E2A] to-[#0A0A1E]' : 'bg-gradient-to-br from-[#E8F0FF] via-[#EEF4FF] to-[#F5F8FF]'}`} />
      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(${isDark ? 'rgba(45,91,255,0.12)' : 'rgba(45,91,255,0.08)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${isDark ? 'rgba(45,91,255,0.12)' : 'rgba(45,91,255,0.08)'} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      {/* Chart */}
      <svg className="absolute bottom-0 left-0 w-full h-3/4" preserveAspectRatio="none" style={{ opacity: isDark ? 0.45 : 0.5 }}>
        <defs>
          <linearGradient id="ftFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%"   stopColor="#2d5bff" stopOpacity={isDark ? '0.35' : '0.18'} />
            <stop offset="100%" stopColor="#2d5bff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points="0,160 70,130 140,105 210,75 280,90 350,55 420,30 490,15 540,8"
          fill="none" stroke={isDark ? '#b8c3ff' : '#2d5bff'} strokeWidth="2" />
        <polygon points="0,160 70,130 140,105 210,75 280,90 350,55 420,30 490,15 540,8 540,200 0,200"
          fill="url(#ftFill)" />
      </svg>
      {/* Live ticker rows */}
      <svg className="absolute" style={{ top: '10%', left: '5%', opacity: isDark ? 0.75 : 0.65 }} aria-hidden="true">
        {tickers.map((tick, i) => (
          <g key={i} transform={`translate(0, ${i * 36})`}>
            <rect width="130" height="28" rx="5" fill={isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)'} />
            <text x="9" y="18" fontSize="10" fill={isDark ? '#b8c3ff' : '#2d5bff'} fontFamily="monospace">{tick.sym}</text>
            <text x="55" y="18" fontSize="10" fontWeight="bold"
              fill={tick.up ? (isDark ? '#4ade80' : '#16a34a') : (isDark ? '#f87171' : '#dc2626')}>{tick.val}</text>
            <text x="112" y="18" fontSize="9" fill={isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)'}>{tick.up ? '▲' : '▼'}</text>
          </g>
        ))}
      </svg>
      <div className={`absolute top-6 right-6 w-28 h-28 rounded-full blur-3xl ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`} />
    </div>
  );
}

function LuxuryVisual({ isDark }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#0C0418] via-[#130828] to-[#0F051E]' : 'bg-gradient-to-br from-[#F0EAFF] via-[#F5F0FF] to-[#FAF7FF]'}`} />
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" style={{ opacity: isDark ? 0.2 : 0.28 }}>
        {[50, 100, 155, 210, 275, 350].map((r, i) => (
          <circle key={i} cx="75%" cy="28%" r={r} fill="none" stroke={isDark ? '#d0bcff' : '#571bc1'} strokeWidth="0.6" />
        ))}
        <line x1="0" y1="60%" x2="40%" y2="0" stroke={isDark ? '#571bc1' : '#8b3fda'} strokeOpacity="0.35" strokeWidth="0.8" />
      </svg>
      {/* Product card mock */}
      <svg className="absolute" style={{ top: '10%', left: '5%', opacity: isDark ? 0.7 : 0.6 }} aria-hidden="true">
        <rect width="140" height="110" rx="10" fill={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'} />
        <rect x="12" y="12" width="116" height="68" rx="6" fill={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} />
        <line x1="30" y1="40" x2="110" y2="40" stroke={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'} strokeWidth="0.5" />
        <line x1="30" y1="52" x2="90"  y2="52" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'} strokeWidth="0.5" />
        <text x="12" y="96"  fontSize="8"  fill={isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'}>Silk Noir Ensemble</text>
        <text x="12" y="108" fontSize="11" fontWeight="bold" fill={isDark ? '#d0bcff' : '#571bc1'}>$2,450</text>
      </svg>
      <div className={`absolute top-4 right-8 w-36 h-36 rounded-full blur-3xl ${isDark ? 'bg-secondary/20' : 'bg-secondary/10'}`} />
    </div>
  );
}

function HealthTechVisual({ isDark }) {
  const metrics = [
    { label: 'Heart Rate',     val: '72 bpm',  color: isDark ? '#f87171' : '#dc2626' },
    { label: 'O₂ Saturation',  val: '98%',     color: isDark ? '#00dbe9' : '#007981' },
    { label: 'Risk Score',     val: 'Low',     color: isDark ? '#4ade80' : '#16a34a' },
    { label: 'Blood Pressure', val: '118/76',  color: isDark ? '#d0bcff' : '#571bc1' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#001820] via-[#002530] to-[#001A20]' : 'bg-gradient-to-br from-[#E0FFFE] via-[#EEFFFE] to-[#F5FFFF]'}`} />
      {/* ECG line */}
      <svg className="absolute" style={{ bottom: '28%', left: 0, width: '100%', height: '54px', opacity: isDark ? 0.38 : 0.32 }} preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,27 100,27 120,27 136,4 148,50 160,27 210,27 230,27 246,4 258,50 270,27 320,27 340,27 356,4 368,50 380,27 450,27 700,27 1000,27 1400,27"
          fill="none" stroke={isDark ? '#00dbe9' : '#007981'} strokeWidth="1.8" />
      </svg>
      {/* Circular health gauge */}
      <svg className="absolute" style={{ top: '8%', right: '8%', width: 108, height: 108 }} aria-hidden="true">
        <circle cx="54" cy="54" r="42" fill="none" stroke={isDark ? 'rgba(0,219,233,0.18)' : 'rgba(0,121,129,0.12)'} strokeWidth="7" />
        <circle cx="54" cy="54" r="42" fill="none" stroke={isDark ? '#00dbe9' : '#007981'} strokeWidth="7"
          strokeDasharray="264" strokeDashoffset="46" strokeLinecap="round" transform="rotate(-90 54 54)" style={{ opacity: isDark ? 0.85 : 0.75 }} />
        <text x="54" y="50" textAnchor="middle" fontSize="17" fontWeight="bold" fill={isDark ? '#00dbe9' : '#007981'}>87</text>
        <text x="54" y="65" textAnchor="middle" fontSize="7.5" fill={isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'}>HEALTH SCORE</text>
      </svg>
      {/* Patient metric rows */}
      <svg className="absolute" style={{ top: '10%', left: '5%', opacity: isDark ? 0.68 : 0.58 }} aria-hidden="true">
        {metrics.map((m, i) => (
          <g key={i} transform={`translate(0, ${i * 36})`}>
            <rect width="158" height="29" rx="6" fill={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'} />
            <text x="9"   y="19" fontSize="9"  fill={isDark ? 'rgba(255,255,255,0.42)' : 'rgba(0,0,0,0.38)'}>{m.label}</text>
            <text x="106" y="20" fontSize="10" fontWeight="bold" fill={m.color}>{m.val}</text>
          </g>
        ))}
      </svg>
      <div className={`absolute top-6 right-1/3 w-28 h-28 rounded-full blur-3xl ${isDark ? 'bg-tertiary/18' : 'bg-tertiary/10'}`} />
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'fintech',
    Visual: FinTechVisual,
    tag: 'FinTech AI',
    tagCls: 'bg-primary/15 border-primary/30 text-primary',
    title: 'Lumina Capital Interface',
    subtitle: 'Real-time equity analytics & neural forecasting platform',
    metric: '+312%', metricLabel: 'Signal accuracy',
    stack: ['React', 'GPT-4', 'WebSocket', 'Python'],
    wide: false,
  },
  {
    id: 'luxury',
    Visual: LuxuryVisual,
    tag: 'Luxury Retail',
    tagCls: 'bg-secondary/15 border-secondary/30 text-secondary',
    title: 'Aurelius Digital Boutique',
    subtitle: 'Neural personalization for bespoke fashion retail',
    metric: '2.8×', metricLabel: 'Revenue / visitor',
    stack: ['Next.js', 'Claude AI', 'Shopify'],
    wide: false,
  },
  {
    id: 'health',
    Visual: HealthTechVisual,
    tag: 'HealthTech AI',
    tagCls: 'bg-tertiary/15 border-tertiary/30 text-tertiary',
    title: 'QuantumMed Patient Portal',
    subtitle: 'AI diagnostics & real-time monitoring for 10,000+ patients across 12 hospital networks',
    metric: '94%', metricLabel: 'Diagnostic accuracy',
    stack: ['React', 'TensorFlow', 'FHIR API', 'D3.js'],
    wide: true,
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface-container-lowest transition-colors duration-300" ref={ref}>
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">

        {/* Header */}
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
          <div className="shrink-0 flex items-center gap-2 text-on-surface-variant text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            3 case studies
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const { Visual } = p;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group relative overflow-hidden rounded-2xl cursor-default ${
                  p.wide ? 'md:col-span-2' : ''
                } ${p.wide ? 'h-64 md:h-72' : 'aspect-[4/3]'}`}
              >
                <Visual isDark={isDark} />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-black/85 via-black/25' : 'from-black/70 via-black/15'
                } to-transparent`} />

                {/* Floating metric — top right */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center gap-2">
                    <span className="text-white font-bold text-sm">{p.metric}</span>
                    <span className="text-white/55 text-xs">{p.metricLabel}</span>
                  </div>
                </div>

                {/* Bottom overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider mb-3 inline-block ${p.tagCls}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1.5">{p.title}</h3>
                  <p className="text-white/65 text-sm leading-snug mb-4 max-w-lg">{p.subtitle}</p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-white/75 border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
