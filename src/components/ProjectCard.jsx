import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const statusColors = {
  Ongoing:   'bg-blue-500/10 text-blue-700 border-blue-200',
  Completed: 'bg-green-500/10 text-green-700 border-green-200',
  Upcoming:  'bg-amber-500/10 text-amber-700 border-amber-200',
};

export default function ProjectCard({ project }) {
  const whatsappMsg = encodeURIComponent(`Hello, I am interested in ${project.name}. Please share more details.`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="luxury-card bg-white rounded-2xl overflow-hidden border border-gray-100/80 flex flex-col group"
    >
      {/* Clickable image area → detail page */}
      <Link to={`/projects/${project.slug}`} className="block img-zoom relative aspect-[4/3] bg-navy/10">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={e => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg,#0A2342,#0d2d55)';
          }}
        />
        {/* Status badge */}
        <span className={`absolute top-4 left-4 text-[11px] font-body font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full border ${statusColors[project.status] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
          {project.status}
        </span>
        {/* View details overlay */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-400 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-[12px] tracking-[0.2em] uppercase text-white border border-white/60 px-5 py-2.5 rounded-full backdrop-blur-sm">
            View Details →
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <Link to={`/projects/${project.slug}`} className="block group/title">
          <h3 className="font-display text-[1.6rem] text-navy font-light leading-tight mb-1 group-hover/title:text-gold transition-colors duration-300">{project.name}</h3>
        </Link>
        <div className="w-8 h-[1.5px] bg-gold mb-5"></div>

        <div className="space-y-2 mb-6 text-sm font-body text-muted">
          <p className="flex items-center gap-2">
            <span className="text-gold">◎</span> {project.location}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-gold">◎</span> Total Area: {project.area}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-gold">◎</span> {project.floors}
          </p>
        </div>

        {/* Amenities */}
        <div className="flex-grow mb-7">
          <p className="font-body text-[11px] text-gold tracking-[0.2em] uppercase mb-3">Amenities</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {project.amenities.slice(0, 4).map((a, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-body text-navy/70">
                <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <Link
            to={`/projects/${project.slug}`}
            className="flex-1 text-center border border-navy text-navy font-body text-[12px] tracking-[0.15em] uppercase py-3.5 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/880XXXXXXXXXX?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-navy text-white font-body text-[12px] tracking-[0.15em] uppercase py-3.5 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 font-medium"
          >
            Enquire →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
