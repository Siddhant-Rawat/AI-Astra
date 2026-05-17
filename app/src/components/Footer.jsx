import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const NAV_SECTIONS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Services', id: 'services' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'Process', id: 'process' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'FAQ', id: null },
      { label: 'Privacy Policy', id: null },
      { label: 'Terms of Service', id: null },
    ],
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/siddhant-rawat/',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/Siddhant-Rawat',
    label: 'GitHub',
  },
];

export default function Footer() {
  const scrollTo = (id) => {
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-on-surface tracking-tighter mb-4">
              Astra<span className="accent-gradient-text"> AI</span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              Leading the digital frontier with intelligence-first engineering and premium
              design. Where data meets elegance.
            </p>
          </div>

          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-label-sm text-on-surface uppercase tracking-widest mb-6 font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-body-md text-on-surface-variant opacity-70">
            © 2026 Astra AI. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
