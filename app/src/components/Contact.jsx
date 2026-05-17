import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const OBJECTIVES = [
  'AI Transformation',
  'High-Performance Web Build',
  'Data Intelligence Architecture',
  'Custom LLM Integration',
];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const inputClass =
  'w-full bg-surface-container-lowest border-b border-primary/20 focus:border-primary text-on-surface px-0 py-3 text-body-md placeholder:text-on-surface-variant/40 transition-colors duration-300 bg-transparent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', objective: OBJECTIVES[0], message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          objective: form.objective,
          message: form.message,
          to_email: 'rawatsiddhant72@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', objective: OBJECTIVES[0], message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-surface to-[#0A0A0A]"
      ref={ref}
    >
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div>
            <span className="text-label-sm text-primary uppercase tracking-widest font-semibold">
              Let's Build
            </span>
            <h2 className="text-display-xl-mobile text-on-surface mt-2 leading-tight">
              Ready to lead the{' '}
              <span className="accent-gradient-text">intelligence revolution?</span>
            </h2>
          </div>
          <p className="text-body-lg text-on-surface-variant">
            Schedule a confidential consultation with our lead strategists to discuss your
            digital evolution.
          </p>

          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <span className="text-body-md text-on-surface-variant">rawatsiddhant72@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <span className="text-body-md text-on-surface-variant">Global HQ: San Francisco, CA</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          {/* Glow inside form */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClass}
                />
              </div>
              <div className="space-y-1">
                <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block">
                Project Objective
              </label>
              <select
                name="objective"
                value={form.objective}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
                style={{ appearance: 'none' }}
              >
                {OBJECTIVES.map((o) => (
                  <option key={o} value={o} className="bg-surface-container text-on-surface">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your digital goals..."
                rows={4}
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full accent-gradient text-white font-bold py-4 rounded-xl text-body-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(45,91,255,0.35)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="spinner" />
                  Sending…
                </>
              ) : (
                'Initialize Partnership'
              )}
            </button>

            {/* Status feedback */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-tertiary text-body-md"
              >
                <CheckCircle size={18} />
                Message sent! We'll be in touch shortly.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-body-md"
              >
                <AlertCircle size={18} />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
