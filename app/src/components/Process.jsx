import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    color: 'text-primary',
    borderIdle: 'border-primary/20',
    borderHover: 'hover:border-primary',
    title: 'Discovery',
    desc: 'Deep audit of your business data, user psychology, and digital infrastructure to define the intelligence blueprint.',
  },
  {
    num: '02',
    color: 'text-tertiary',
    borderIdle: 'border-tertiary/20',
    borderHover: 'hover:border-tertiary',
    title: 'AI Integration',
    desc: 'Defining and training neural models tailored to your specific domain, user signals, and conversion objectives.',
  },
  {
    num: '03',
    color: 'text-secondary',
    borderIdle: 'border-secondary/20',
    borderHover: 'hover:border-secondary',
    title: 'Neural Design',
    desc: 'Crafting glassmorphic interfaces that respond to AI inputs — every pixel informed by data, not guesswork.',
  },
  {
    num: '04',
    color: 'text-primary',
    borderIdle: 'border-primary/20',
    borderHover: 'hover:border-primary',
    title: 'Launch & Optimize',
    desc: 'Deployment with continuous machine-learning-led refinement — your site learns and improves every day.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="py-24 md:py-32 bg-surface-container-low relative" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(45,91,255,0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">How It Works</span>
          <h2 className="text-headline-lg text-on-surface mt-2">Intelligence Lifecycle</h2>
          <p className="text-body-md text-on-surface-variant mt-4 max-w-xl mx-auto">
            Our proprietary four-stage framework for evolving traditional web platforms into
            AI-native assets.
          </p>
        </motion.div>

        {/* Connector line (desktop) */}
        <div className="relative">
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(184,195,255,0.25), transparent)' }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px z-0 origin-left"
            style={{ background: 'linear-gradient(90deg, #2d5bff, #571bc1, #00dbe9)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10 flex flex-col items-center text-center group cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-background border-2 ${step.borderIdle} ${step.borderHover} flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(184,195,255,0.15)]`}
                >
                  <span className={`text-headline-md font-bold ${step.color}`}>{step.num}</span>
                </div>
                <h3 className="text-headline-md text-on-surface mb-3">{step.title}</h3>
                <p className="text-body-md text-on-surface-variant">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
