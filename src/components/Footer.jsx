import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-gold py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-navy/70 mb-1">Ready to invest?</p>
            <h3 className="font-display text-3xl md:text-4xl text-navy font-light">Let's talk about your future home.</h3>
          </div>
          <a
            href="https://wa.me/880XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20MPL%20projects."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-navy text-white font-body text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-navy/80 transition-all duration-300"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-display font-bold text-sm">MPL</div>
            <div>
              <p className="text-white font-display text-sm font-semibold">Mahatab Properties Limited</p>
              <p className="text-gold text-[10px] tracking-[0.2em] uppercase">Est. 2020</p>
            </div>
          </div>
          <p className="font-body text-white/50 text-sm leading-relaxed">
            Crafting landmark multi-storied developments in Pabna, built for modern living and lasting investment value.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-5">Quick Links</p>
          <div className="flex flex-col gap-3">
            {[['/', 'Home'], ['/projects', 'Our Projects'], ['/contact', 'Contact Us']].map(([to, label]) => (
              <Link key={to} to={to} className="font-body text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-5">Contact</p>
          <div className="flex flex-col gap-3 text-sm text-white/60 font-body">
            <p>Pabna, Rajshahi Division, Bangladesh</p>
            <a href="tel:+880XXXXXXXXXX" className="hover:text-white transition-colors">[Phone number]</a>
            <a href="mailto:contact@mpl.com" className="hover:text-white transition-colors">contact@mpl.com</a>
            <p className="text-white/40 text-xs">Sat – Thu: 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[12px] text-white/30">© 2026 Mahatab Properties Limited. All rights reserved.</p>
          <p className="font-body text-[12px] text-white/30">A sister concern of Mahatab Biswas Real Estate Limited</p>
        </div>
      </div>
    </footer>
  );
}
