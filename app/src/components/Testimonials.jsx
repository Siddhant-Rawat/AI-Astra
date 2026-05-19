import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Astra AI didn't just build a website; they architected a digital brain for our enterprise. The level of technical sophistication is genuinely unmatched in the agency space.",
    name: 'Dr. Elena Rodriguez', role: 'CTO', company: 'NexaCorp',
    initials: 'ER', avatarGradient: 'from-[#2d5bff] to-[#571bc1]',
    metric: '+312%', metricLabel: 'Organic traffic growth', accent: 'primary',
  },
  {
    quote: "The transition to an AI-driven interface led to a 40% increase in user engagement within the first quarter. Their process is transparent, scientific, and results-driven.",
    name: 'Marcus Thorne', role: 'Founder & CEO', company: 'Thorne Ventures',
    initials: 'MT', avatarGradient: 'from-[#007981] to-[#2d5bff]',
    metric: '+40%', metricLabel: 'User engagement Q1', accent: 'tertiary',
  },
  {
    quote: "Exclusivity meets extreme performance. Astra AI is the secret weapon for any brand looking to dominate their market through digital excellence and intelligence-led personalization.",
    name: 'Sarah Chen', role: 'CEO', company: 'Zenith Brands',
    initials: 'SC', avatarGradient: 'from-[#571bc1] to-[#007981]',
    metric: '2.8×', metricLabel: 'Revenue per visitor', accent: 'secondary',
  },
  {
    quote: "We replaced three expensive tools with a single Astra AI platform. The AI-native approach didn't just cut costs — it unlocked capabilities we didn't know were possible for our stack.",
    name: 'James Okafor', role: 'Chief Product Officer', company: 'TechNova AI',
    initials: 'JO', avatarGradient: 'from-[#2d5bff] to-[#00dbe9]',
    metric: '−60%', metricLabel: 'Tooling cost reduction', accent: 'primary',
  },
  {
    quote: "The neural UX layer is remarkable. Our site recognizes returning users and adapts the entire experience to their context within milliseconds. Our guests genuinely feel understood.",
    name: 'Priya Sharma', role: 'VP Digital Experience', company: 'Luxe Group',
    initials: 'PS', avatarGradient: 'from-[#571bc1] to-[#2d5bff]',
    metric: '+58%', metricLabel: 'Session duration lift', accent: 'secondary',
  },
];

const ACCENT = {
  primary:   { text: 'text-primary',   ring: 'bg-primary/8',   badge: 'bg-primary/10 border-primary/25 text-primary',   bar: 'bg-primary'   },
  tertiary:  { text: 'text-tertiary',  ring: 'bg-tertiary/8',  badge: 'bg-tertiary/10 border-tertiary/25 text-tertiary',  bar: 'bg-tertiary'  },
  secondary: { text: 'text-secondary', ring: 'bg-secondary/8', badge: 'bg-secondary/10 border-secondary/25 text-secondary', bar: 'bg-secondary' },
};

const quoteVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 28 : -28 }),
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:  (d) => ({ opacity: 0, y: d > 0 ? -18 : 18, transition: { duration: 0.3, ease: 'easeIn' } }),
};

export default function Testimonials() {
  const [[active, dir], setActive] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const go = (idx) => setActive(([cur]) => [idx, idx > cur ? 1 : -1]);
  const next = () => go((active + 1) % TESTIMONIALS.length);
  const prev = () => go((active + TESTIMONIALS.length - 1) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, 5200);
    return () => clearTimeout(id);
  }, [active, paused]);

  const t = TESTIMONIALS[active];
  const a = ACCENT[t.accent];

  return (
    <section className="py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">
            Client Voices
          </span>
          <h2 className="text-headline-lg text-on-surface mt-2">What Our Partners Say</h2>
        </motion.div>

        {/* Spotlight slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 hidden md:flex w-11 h-11 items-center justify-center rounded-full border border-outline-variant/40 bg-surface/60 backdrop-blur text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 hidden md:flex w-11 h-11 items-center justify-center rounded-full border border-outline-variant/40 bg-surface/60 backdrop-blur text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all z-10"
          >
            <ChevronRight size={18} />
          </button>

          {/* Card */}
          <div className="glass-card rounded-3xl overflow-hidden relative">

            {/* Ambient bg glow that changes per testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`glow-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none ${a.ring}`}
              />
            </AnimatePresence>

            {/* Decorative background quote mark */}
            <div className="absolute top-4 left-8 text-[9rem] leading-none font-bold text-on-surface/[0.04] pointer-events-none select-none">
              "
            </div>

            <div className="relative p-10 md:p-14">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  variants={quoteVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1.5 mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-on-surface font-light leading-relaxed text-center italic mb-10 max-w-3xl mx-auto">
                    "{t.quote}"
                  </blockquote>

                  {/* Author + metric */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center font-bold text-white text-base shrink-0 shadow-lg`}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-on-surface font-bold text-body-lg">{t.name}</div>
                        <div className="text-on-surface-variant text-sm mt-0.5">
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>

                    <div className={`flex flex-col items-center px-6 py-3 rounded-2xl border shrink-0 ${a.badge}`}>
                      <span className={`text-2xl font-bold ${a.text}`}>{t.metric}</span>
                      <span className="text-xs text-on-surface-variant mt-0.5 whitespace-nowrap">{t.metricLabel}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Auto-advance progress bar */}
            {!paused && (
              <motion.div
                key={`bar-${active}`}
                className={`absolute bottom-0 left-0 h-[3px] ${a.bar} opacity-50`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.2, ease: 'linear' }}
              />
            )}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-7 bg-primary' : 'w-2 bg-outline-variant hover:bg-on-surface-variant'
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-3 mt-5">
            <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container/60 text-on-surface-variant hover:text-primary transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container/60 text-on-surface-variant hover:text-primary transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
