import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import NeuralNetwork from './NeuralNetwork';

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  delay: `${(i * 0.4) % 5}s`,
  duration: `${5 + (i * 0.7) % 5}s`,
  size: `${1 + (i % 3)}px`,
  opacity: 0.15 + (i % 4) * 0.08,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const { isDark } = useTheme();

  const glowA = isDark
    ? 'radial-gradient(circle, rgba(45,91,255,0.07) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(45,91,255,0.05) 0%, transparent 70%)';
  const glowB = isDark
    ? 'radial-gradient(circle, rgba(87,27,193,0.06) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(87,27,193,0.04) 0%, transparent 70%)';

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="neural-glow animate-ambient-pulse"
        style={{ width: 700, height: 700, top: '-10%', left: '-15%', background: glowA }} />
      <div className="neural-glow animate-ambient-pulse"
        style={{ width: 500, height: 500, bottom: '-5%', right: '-10%', background: glowB, animationDelay: '2s' }} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary pointer-events-none"
          style={{
            left: p.left, top: p.top, width: p.size, height: p.size,
            opacity: isDark ? p.opacity : p.opacity * 0.6,
            animation: `float ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">
                Next-Gen Web Architecture
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-display-xl-mobile lg:text-display-xl text-on-surface leading-tight">
            Websites Redefined by{' '}
            <span className="accent-gradient-text">Intelligence</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-body-lg text-on-surface-variant max-w-xl">
            Astra AI combines human creativity with artificial intelligence to deliver
            high-performance, premium websites for the next generation of business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="accent-gradient text-white font-bold px-8 py-4 rounded-xl text-body-md shadow-[0_8px_30px_rgba(45,91,255,0.25)] hover:shadow-[0_8px_40px_rgba(45,91,255,0.45)] transition-all duration-300 active:scale-95"
            >
              Start Project
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl border border-outline-variant/50 bg-surface-container/40 text-body-md text-on-surface hover:bg-surface-container hover:border-primary/30 transition-all duration-300 active:scale-95"
            >
              View Work
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-4 border-t border-outline-variant/30">
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '3×',  label: 'Avg. ROI Increase' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold accent-gradient-text">{stat.value}</div>
                <div className="text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Neural Network */}
        <div className="relative h-[380px] lg:h-[480px] flex items-center justify-center">
          <div className={`absolute inset-0 rounded-3xl blur-3xl ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`} />
          <div className="relative w-full h-full">
            <NeuralNetwork isDark={isDark} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
