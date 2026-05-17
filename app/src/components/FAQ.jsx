import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How does Astra AI differ from a traditional agency?',
    a: 'We operate at the intersection of high-end design and advanced machine learning. Unlike traditional agencies that focus purely on aesthetics, we build "active" systems that learn, adapt, and drive conversions autonomously.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'Most full-scale digital transformations take between 8 to 14 weeks, depending on the complexity of the AI integration and custom data modeling required.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes, we offer "Neural Maintenance" packages that include continuous model retraining, performance optimization, and premium security updates tailored to your business evolution.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We specialize in finance, luxury retail, healthcare, and enterprise SaaS — sectors where precision, trust, and performance are non-negotiable. However, our framework scales to any vertically.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">FAQ</span>
          <h2 className="text-headline-lg text-on-surface mt-2">Common Queries</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'border-primary/20' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center p-6 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-body-lg font-medium text-on-surface">{faq.q}</span>
                <span className={`shrink-0 transition-colors duration-300 ${openIndex === i ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-body-md text-on-surface-variant border-t border-white/5">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
