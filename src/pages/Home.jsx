import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

/* ── Reusable scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Animated counter ── */
function StatCounter({ end, suffix = '', label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = end / 60;
      const timer = setInterval(() => {
        start = Math.min(start + step, end);
        el.textContent = Math.floor(start) + suffix;
        if (start >= end) clearInterval(timer);
      }, 25);
      obs.disconnect();
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, suffix]);

  return (
    <div className="text-center">
      <div className="font-display text-[clamp(3rem,6vw,5rem)] text-gold font-light leading-none">
        <span ref={ref}>0{suffix}</span>
      </div>
      <div className="font-body text-[11px] tracking-[0.25em] uppercase text-white/50 mt-2">{label}</div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <main>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background — gradient + image overlay when real photo is added */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #020c1b 0%, #0A2342 40%, #0d2d55 70%, #071828 100%)'
        }} />
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center scale-105 opacity-30" />

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        {/* Thin gold horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-[11px] tracking-[0.35em] uppercase text-gold mb-6"
          >
            Mahatab Properties Limited — Pabna
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-hero text-white font-light leading-tight mb-6"
          >
            Where Vision<br />
            <em className="text-gold not-italic">Meets Architecture</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Crafting landmark multi-storied residences across Pabna — designed for modern living, built for generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/projects"
              className="bg-gold text-navy font-body text-[12px] tracking-[0.18em] uppercase px-9 py-4 rounded-full hover:bg-white hover:text-navy transition-all duration-300 font-medium"
            >
              Explore Projects
            </Link>
            <a
              href="#about"
              className="border border-white/40 text-white font-body text-[12px] tracking-[0.18em] uppercase px-9 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Discover MPL
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════ ABOUT ══════════════════════ */}
      <section id="about" className="py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <p className="reveal-up font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h2 className="reveal-up font-display text-xl2 text-navy font-light leading-tight mb-6">
              Building Pabna's<br />Premium Skyline
            </h2>
            <div className="reveal-up w-12 h-[1.5px] bg-gold mb-7" />
            <p className="reveal-up font-body text-[15px] text-navy/65 leading-relaxed mb-5">
              Mahatab Properties Limited is a sister concern of Mahatab Biswas Real Estate Limited, established to focus exclusively on premium multi-storied residential and commercial developments.
            </p>
            <p className="reveal-up font-body text-[15px] text-navy/65 leading-relaxed mb-9">
              Based in Pabna, we are committed to delivering thoughtfully designed buildings that combine structural quality, modern amenities, and lasting value for our residents and investors.
            </p>
            <Link
              to="/projects"
              className="reveal-up inline-block border border-navy text-navy font-body text-[12px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>

          {/* Stats panel */}
          <div className="reveal-up bg-navy rounded-2xl p-12 lg:p-16">
            <div className="grid grid-cols-2 gap-10">
              <StatCounter end={2} suffix="+" label="Projects in Pabna" />
              <StatCounter end={100} suffix="%" label="Quality Commitment" />
              <StatCounter end={5} suffix="+" label="Years of Excellence" />
              <StatCounter end={24} suffix="/7" label="Client Support" />
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-body text-white/40 text-[13px] text-center leading-relaxed">
                A trusted name in Pabna real estate — delivering modern architecture with lasting structural integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURED PROJECTS ══════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="reveal-up font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Portfolio</p>
            <h2 className="reveal-up font-display text-xl2 text-navy font-light">Featured Developments</h2>
            <p className="reveal-up font-body text-muted mt-4 max-w-md mx-auto">
              Multi-storied developments crafted for modern Pabna — where every detail is considered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-navy text-white font-body text-[12px] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY US ══════════════════════ */}
      <section className="py-28 bg-navy">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="reveal-up font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Why Choose MPL</p>
            <h2 className="reveal-up font-display text-xl2 text-white font-light">Built on Trust, Delivered with Excellence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '◈', title: 'Premium Architecture', desc: 'Every building is designed by experienced architects who prioritize both beauty and function.' },
              { icon: '◈', title: 'Structural Integrity', desc: 'Built to the highest construction standards, ensuring safety and durability for generations.' },
              { icon: '◈', title: 'Modern Amenities', desc: 'Dedicated parking, 24/7 security, rooftop access, and more — all standard in our developments.' },
              { icon: '◈', title: 'Prime Locations', desc: 'Strategically located in Pabna for maximum connectivity, convenience, and future value growth.' },
              { icon: '◈', title: 'Transparent Process', desc: 'Clear pricing, straightforward documentation, and honest communication throughout.' },
              { icon: '◈', title: 'Lasting Investment', desc: 'Properties designed to appreciate in value — a true investment in your family\'s future.' },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border border-white/10 rounded-2xl p-8 hover:border-gold/30 hover:bg-white/5 transition-all duration-400 group"
              >
                <div className="text-gold text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <h4 className="font-display text-xl text-white font-light mb-3">{title}</h4>
                <p className="font-body text-sm text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CONTACT TEASER ══════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 60% 50%, #C9A84C 0%, transparent 60%), radial-gradient(circle at 20% 80%, #0A2342 0%, transparent 50%)' }}
        />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <p className="reveal-up font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Get In Touch</p>
          <h2 className="reveal-up font-display text-xl2 text-navy font-light mb-6">Ready to Make Your Move?</h2>
          <p className="reveal-up font-body text-navy/60 text-lg mb-10 leading-relaxed">
            Our team is available to discuss floor plans, pricing, and availability. Reach out today and let's build your future together.
          </p>
          <div className="reveal-up flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-navy text-white font-body text-[12px] tracking-[0.18em] uppercase px-9 py-4 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/880XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy text-navy font-body text-[12px] tracking-[0.18em] uppercase px-9 py-4 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
