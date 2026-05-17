import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Brain, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    icon: Terminal,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10 group-hover:bg-primary/20',
    title: 'AI Web Development',
    desc: 'Custom-built web platforms integrated with large language models and predictive algorithms that adapt to user intent in real time.',
  },
  {
    icon: Brain,
    iconColor: 'text-tertiary',
    bgColor: 'bg-tertiary/10 group-hover:bg-tertiary/20',
    title: 'Dynamic Personalization',
    desc: 'Real-time content adaptation based on user behavior patterns and intent analysis — turning every visit into a tailored experience.',
  },
  {
    icon: Sparkles,
    iconColor: 'text-secondary',
    bgColor: 'bg-secondary/10 group-hover:bg-secondary/20',
    title: 'Intelligent Optimization',
    desc: 'Automated A/B testing and performance tuning powered by our proprietary AI engine. Continuous improvement, zero manual effort.',
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

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
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
          <h2 className="text-headline-lg text-on-surface mt-2">
            Architecting Digital Intelligence
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Our specialized services leverage advanced neural networks to create dynamic,
            self-optimizing digital ecosystems.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="glass-card p-8 rounded-2xl group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${s.bgColor} flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon size={22} className={s.iconColor} />
                </div>
                <h3 className="text-headline-md text-on-surface mb-4">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
