import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Shanva', href: '#why-shanva' },
    { name: 'Process', href: '#process' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 15,
          mass: 0.8,
          duration: 1
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-4'
          }`}
      >
        <div className={`mx-auto px-4 sm:px-6 max-w-7xl transition-all duration-500 ${scrolled ? '' : ''
          }`}>
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled
              ? 'glass-pill rounded-[20px] px-4 sm:px-6 py-3 shadow-layered border border-zinc-200/80'
              : 'px-4 sm:px-6 py-3'
            }`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <BrandLogo className="w-10 h-10 hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-text">
                  SHANVA<span className="text-primary">MEDIA</span>
                </span>
                {/* <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-muted -mt-0.5 font-semibold">
                  Creator-First Growth Studio
                </span> */}
              </div>
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-muted hover:text-text transition-colors duration-300 relative group rounded-lg hover:bg-zinc-800/[0.03]"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onContactClick}
                className="btn-gradient-primary px-5 py-2.5 rounded-full text-sm font-semibold relative group"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                <span className="relative flex items-center gap-1.5 z-10 text-white">
                  Start Growing
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted hover:text-text transition-colors rounded-xl hover:bg-zinc-800/[0.05]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-sm z-30 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[68px] left-3 right-3 z-40 lg:hidden glass-pill rounded-2xl border border-zinc-200/80 shadow-layered-lg overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    className="text-base font-semibold text-muted hover:text-text transition-colors py-2.5 px-3 rounded-xl hover:bg-zinc-800/[0.04]"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="border-t border-zinc-200/80 my-2" />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3.5 rounded-xl text-center text-sm font-semibold text-white btn-gradient-primary flex items-center justify-center gap-2 mt-1"
                >
                  Start Growing
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
