import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Terminal, Brain, Sparkles, BarChart2, MessageSquare, Palette, Zap,
  ChevronLeft, ChevronRight, CheckCircle2,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Terminal, token: 'primary', tag: 'Foundation',
    title: 'AI Web Development',
    desc: 'Custom-built web platforms integrated with large language models and predictive algorithms that adapt to user intent in real time.',
    features: ['LLM-integrated interfaces', 'Real-time AI inference', 'Edge-deployed models', 'Zero-latency responses'],
    stat: '10×', statSub: 'faster delivery vs traditional agencies',
  },
  {
    icon: Brain, token: 'tertiary', tag: 'Engagement',
    title: 'Dynamic Personalization',
    desc: 'Real-time content adaptation based on user behavior patterns and intent analysis — turning every visit into a tailored experience.',
    features: ['Behavioral intent modeling', 'Context-aware content', 'Session-level adaptation', 'Multi-variant serving'],
    stat: '+47%', statSub: 'average conversion lift across clients',
  },
  {
    icon: Sparkles, token: 'secondary', tag: 'Automation',
    title: 'Intelligent Optimization',
    desc: 'Automated A/B testing and performance tuning powered by our proprietary AI engine. Continuous improvement, zero manual effort.',
    features: ['Autonomous A/B testing', 'Revenue-aware routing', 'Multi-armed bandits', 'Auto-deploy winning variants'],
    stat: '∞', statSub: 'iteration loops, fully automated',
  },
  {
    icon: BarChart2, token: 'primary', tag: 'Intelligence',
    title: 'Predictive Analytics',
    desc: 'Transform raw user data into actionable foresight. Our ML pipelines surface trends before they become visible to competitors.',
    features: ['Churn & intent prediction', 'Revenue forecasting', 'Cohort AI analysis', 'Live dashboard feeds'],
    stat: '92%', statSub: 'forecast accuracy across verticals',
  },
  {
    icon: MessageSquare, token: 'tertiary', tag: 'Support',
    title: 'Conversational AI',
    desc: 'Deploy context-aware AI assistants that understand your product, handle support, and qualify leads — 24/7 with zero downtime.',
    features: ['Fine-tuned GPT assistants', 'RAG-powered knowledge base', 'CRM sync & lead scoring', 'Multilingual + multichannel'],
    stat: '68%', statSub: 'support ticket deflection rate',
  },
  {
    icon: Palette, token: 'secondary', tag: 'Design',
    title: 'Neural UX Architecture',
    desc: 'AI-driven interface design that evolves with your users. Layouts, CTAs, and flows self-optimize toward your north-star metric continuously.',
    features: ['AI wireframe generation', 'Micro-interaction library', 'Cognitive load scoring', 'Emotion-aware design system'],
    stat: '3.2×', statSub: 'user retention post-deployment',
  },
  {
    icon: Zap, token: 'primary', tag: 'Infrastructure',
    title: 'Performance & Edge Delivery',
    desc: 'Sub-100ms global load times via edge-first architecture. Your site is always fast, always online, always ahead of the competition.',
    features: ['Edge-native deployment', '99.99% uptime SLA', 'Core Web Vitals score 100', 'Global CDN + AI routing'],
    stat: '<80ms', statSub: 'TTFB, globally consistent',
  },
];

const TOKEN_STYLES = {
  primary:   { iconColor: 'text-primary',   iconBg: 'bg-primary/10',   statColor: 'text-primary',   tagCls: 'bg-primary/10 text-primary border-primary/20',     bar: 'from-primary to-secondary' },
  tertiary:  { iconColor: 'text-tertiary',  iconBg: 'bg-tertiary/10',  statColor: 'text-tertiary',  tagCls: 'bg-tertiary/10 text-tertiary border-tertiary/20',   bar: 'from-tertiary to-primary' },
  secondary: { iconColor: 'text-secondary', iconBg: 'bg-secondary/10', statColor: 'text-secondary', tagCls: 'bg-secondary/10 text-secondary border-secondary/20', bar: 'from-secondary to-tertiary' },
};

const slideVariants = {
  enter: (d) => ({ opacity: 0, x: d > 0 ? 70 : -70 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] } },
  exit:  (d) => ({ opacity: 0, x: d > 0 ? -70 : 70, transition: { duration: 0.28 } }),
};

export default function Services() {
  const [[active, dir], setActive] = useState([0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const go = useCallback((idx) => {
    setActive(([cur]) => [idx, idx === cur ? 0 : idx > cur ? 1 : -1]);
  }, []);

  const s = CAPABILITIES[active];
  const t = TOKEN_STYLES[s.token];
  const Icon = s.icon;

  return (
    <section id="services" ref={ref} className="py-24 md:py-32">
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">
            Core Capabilities
          </span>
          <h2 className="text-headline-lg text-on-surface">Architecting Digital Intelligence</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Our specialized services leverage advanced neural networks to create dynamic,
            self-optimizing digital ecosystems.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Desktop arrows */}
          <button
            onClick={() => go((active + CAPABILITIES.length - 1) % CAPABILITIES.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-outline-variant/40 bg-surface/60 backdrop-blur text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-200 z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go((active + 1) % CAPABILITIES.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-outline-variant/40 bg-surface/60 backdrop-blur text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-200 z-10"
          >
            <ChevronRight size={18} />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`h-[3px] bg-gradient-to-r ${t.bar}`} />

              <div className="p-8 md:p-10">
                {/* Card header row */}
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${t.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon size={26} className={t.iconColor} />
                    </div>
                    <span className={`text-label-sm px-3 py-1 rounded-full border font-semibold uppercase tracking-wide ${t.tagCls}`}>
                      {s.tag}
                    </span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant/40 font-mono shrink-0 mt-1">
                    {String(active + 1).padStart(2, '0')} / {String(CAPABILITIES.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-headline-md text-on-surface mb-3">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">{s.desc}</p>

                {/* Features 2×2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className={`${t.iconColor} shrink-0`} />
                      <span className="text-on-surface-variant text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Stat */}
                <div className="pt-6 border-t border-outline-variant/30 flex items-baseline gap-3">
                  <span className={`text-3xl font-bold ${t.statColor}`}>{s.stat}</span>
                  <span className="text-on-surface-variant text-sm">{s.statSub}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {CAPABILITIES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Capability ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-7 bg-primary' : 'w-2 bg-outline-variant hover:bg-on-surface-variant'
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-3 mt-5">
            <button
              onClick={() => go((active + CAPABILITIES.length - 1) % CAPABILITIES.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container/60 text-on-surface-variant hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go((active + 1) % CAPABILITIES.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container/60 text-on-surface-variant hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
