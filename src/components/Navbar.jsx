import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'nav-blur bg-navy/90 shadow-[0_2px_40px_rgba(0,0,0,0.25)]'
          : 'bg-transparent'
      }`}
      style={{ height: scrolled || !isHome ? '72px' : '88px', transition: 'height 0.4s ease, background 0.5s ease' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-display font-bold text-sm tracking-wider transition-transform duration-300 group-hover:scale-105">
              MPL
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-display text-[15px] font-semibold leading-none tracking-wide">Mahatab Properties</p>
              <p className="text-gold text-[10px] font-body tracking-[0.2em] uppercase leading-none mt-1">Limited</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link font-body text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === to ? 'text-gold' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/880XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border border-gold text-gold font-body text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Enquire Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-10"
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={to}
                  className="font-display text-4xl text-white hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/880XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-gold text-gold font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Enquire Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
