import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-on-surface tracking-tighter">
          Astra<span className="accent-gradient-text"> AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-on-surface-variant text-body-md font-medium hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:block accent-gradient text-white font-bold px-6 py-2 rounded-lg text-body-md hover:shadow-[0_0_20px_rgba(45,91,255,0.4)] transition-all duration-300 active:scale-95"
        >
          Get Started
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left py-3 px-4 rounded-lg text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all text-body-lg font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 accent-gradient text-white font-bold py-3 rounded-lg text-body-md active:scale-95 transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
