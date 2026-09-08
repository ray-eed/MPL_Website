import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Office Address',
    value: '[Full address, Pabna, Rajshahi Division, Bangladesh]',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '[Click-to-call number]',
    href: 'tel:+880XXXXXXXXXX',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: '[Email address]',
    href: 'mailto:contact@mpl.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Office Hours',
    value: 'Saturday – Thursday: 10:00 AM – 6:00 PM',
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero banner */}
      <div className="relative bg-navy pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #020c1b 0%, #0A2342 50%, #0d2d55 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-xl2 text-white font-light"
          >
            Let's Build Your<br />Future Together
          </motion.h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid lg:grid-cols-5 gap-16">
        {/* Left — CTA */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">WhatsApp Us</p>
            <h2 className="font-display text-section text-navy font-light mb-5">
              Ready to invest in your future?
            </h2>
            <div className="w-10 h-[1.5px] bg-gold mb-6" />
            <p className="font-body text-navy/60 leading-relaxed mb-8">
              Our team is available to answer your questions about floor plans, pricing, and unit availability. Reach out and we'll get back to you promptly.
            </p>
            <a
              href="https://wa.me/880XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20MPL%27s%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-body text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-[#20b858] transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — Contact details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-3 grid sm:grid-cols-2 gap-6"
        >
          {contactItems.map(({ icon, label, value, href }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-400 group"
            >
              <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {icon}
              </div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-2">{label}</p>
              {href ? (
                <a href={href} className="font-body text-sm text-navy/70 hover:text-navy transition-colors leading-relaxed">{value}</a>
              ) : (
                <p className="font-body text-sm text-navy/70 leading-relaxed">{value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom navy strip */}
      <div className="bg-navy py-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-display text-2xl text-white font-light mb-2">Mahatab Properties Limited</p>
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-gold">Pabna, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
