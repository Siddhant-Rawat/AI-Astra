import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote:
      '"Astra AI didn\'t just build a website; they architected a digital brain for our enterprise. The level of technical sophistication is unmatched in the agency space."',
    name: 'Dr. Elena Rodriguez',
    role: 'CTO, NexaCorp',
    initials: 'ER',
    gradient: 'from-[#2d5bff] to-[#571bc1]',
    accentColor: 'text-primary',
  },
  {
    quote:
      '"The transition to an AI-driven interface led to a 40% increase in user engagement within the first quarter. Their process is transparent, scientific, and results-driven."',
    name: 'Marcus Thorne',
    role: 'Founder, Thorne Ventures',
    initials: 'MT',
    gradient: 'from-[#007981] to-[#2d5bff]',
    accentColor: 'text-tertiary',
  },
  {
    quote:
      '"Exclusivity meets extreme performance. Astra AI is the secret weapon for any brand looking to dominate their market through digital excellence."',
    name: 'Sarah Chen',
    role: 'CEO, Zenith Brands',
    initials: 'SC',
    gradient: 'from-[#571bc1] to-[#007981]',
    accentColor: 'text-secondary',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between gap-8"
            >
              {/* Quote mark */}
              <div>
                <div className={`text-5xl font-bold ${t.accentColor} opacity-30 leading-none mb-4`}>"</div>
                <p className="text-body-md text-on-surface-variant italic leading-relaxed">{t.quote}</p>
              </div>

              {/* Avatar + info */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold text-white text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-body-md font-bold text-on-surface">{t.name}</div>
                  <div className={`text-label-sm uppercase tracking-wider ${t.accentColor}`}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
