import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const statusColors = {
  Ongoing:   { dot: 'bg-blue-400',  text: 'text-blue-300',  badge: 'border-blue-400/30 bg-blue-400/10' },
  Completed: { dot: 'bg-green-400', text: 'text-green-300', badge: 'border-green-400/30 bg-green-400/10' },
  Upcoming:  { dot: 'bg-amber-400', text: 'text-amber-300', badge: 'border-amber-400/30 bg-amber-400/10' },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-6 pt-20">
        <p className="font-display text-3xl text-navy font-light">Project not found.</p>
        <Link to="/projects" className="font-body text-sm text-gold hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  const sc = statusColors[project.status] || statusColors.Upcoming;
  const whatsappMsg = encodeURIComponent(`Hello, I am interested in ${project.name}. Please share more details.`);
  const otherProjects = projectsData.filter(p => p.id !== project.id);

  return (
    <div className="bg-cream min-h-screen">

      {/* ── HERO ── */}
      <div className="relative bg-navy overflow-hidden pt-24" style={{ minHeight: '60vh' }}>
        {/* Gradient base */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #020c1b 0%, #0A2342 50%, #0d2d55 100%)'
        }} />

        {/* Project image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${project.image}')` }}
        />

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-16 pt-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8 font-body text-[12px] text-white/40"
          >
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white/70 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/70">{project.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${sc.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} animate-pulse`} />
                <span className={`font-body text-[11px] tracking-[0.18em] uppercase ${sc.text}`}>{project.status}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display text-xl2 text-white font-light leading-tight mb-3"
              >
                {project.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-xl text-gold/80 italic font-light mb-6"
              >
                {project.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 text-sm font-body text-white/50"
              >
                <span className="flex items-center gap-1.5"><span className="text-gold">◎</span>{project.location}</span>
                <span className="flex items-center gap-1.5"><span className="text-gold">◎</span>{project.type}</span>
                <span className="flex items-center gap-1.5"><span className="text-gold">◎</span>{project.floors}</span>
              </motion.div>
            </div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end"
            >
              <a
                href={`https://wa.me/880XXXXXXXXXX?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-body text-[12px] tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:bg-white hover:text-navy transition-all duration-300 font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire on WhatsApp
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body text-[12px] tracking-[0.15em] uppercase px-7 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                ← All Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-14">

            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Overview</p>
              <h2 className="font-display text-3xl text-navy font-light mb-5">About This Project</h2>
              <div className="w-10 h-[1.5px] bg-gold mb-6" />
              <p className="font-body text-navy/65 leading-relaxed text-[15px]">{project.description}</p>
            </motion.section>

            {/* Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Key Features</p>
              <h2 className="font-display text-3xl text-navy font-light mb-6">Project Highlights</h2>
              <div className="space-y-4">
                {project.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="font-body text-[15px] text-navy/70 leading-relaxed">{h}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Amenities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Facilities</p>
              <h2 className="font-display text-3xl text-navy font-light mb-6">Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-[14px] text-navy/70">{a}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Image gallery placeholder */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Visuals</p>
              <h2 className="font-display text-3xl text-navy font-light mb-6">Project Gallery</h2>
              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <div key={i} className={`rounded-xl overflow-hidden bg-navy/10 img-zoom ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                    <img
                      src={img}
                      alt={`${project.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={e => {
                        e.target.parentElement.style.background = `linear-gradient(135deg, #0A2342, #0d2d55)`;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-center font-body text-xs text-muted mt-3 italic">
                * Renders are indicative. Actual project may vary slightly.
              </p>
            </motion.section>
          </div>

          {/* Right column — specs & sticky CTA */}
          <div className="space-y-6">
            {/* Specs card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-8 sticky top-24"
            >
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-gold mb-5">Project Details</p>
              <div className="divide-y divide-gray-100">
                {project.specs.map(({ label, value }, i) => (
                  <div key={i} className="py-4">
                    <p className="font-body text-[11px] text-muted uppercase tracking-wider mb-1">{label}</p>
                    <p className="font-body text-[14px] text-navy font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/880XXXXXXXXXX?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-navy text-white font-body text-[12px] tracking-[0.15em] uppercase py-4 rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  Enquire on WhatsApp →
                </a>
                <Link
                  to="/contact"
                  className="block w-full text-center border border-navy text-navy font-body text-[12px] tracking-[0.15em] uppercase py-4 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gray-200">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Explore More</p>
            <h2 className="font-display text-3xl text-navy font-light mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map(p => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-400">
                  <div className="img-zoom aspect-[16/7] bg-navy/10">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover"
                      onError={e => { e.target.parentElement.style.background = 'linear-gradient(135deg,#0A2342,#0d2d55)'; e.target.style.display='none'; }} />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p className="font-display text-xl text-navy font-light group-hover:text-gold transition-colors">{p.name}</p>
                      <p className="font-body text-sm text-muted mt-1">{p.location}</p>
                    </div>
                    <span className="text-gold text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
