import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Ongoing', 'Completed', 'Upcoming'];

  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.status === filter);

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
            transition={{ duration: 0.6 }}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-xl2 text-white font-light"
          >
            Landmark Developments<br />in Pabna
          </motion.h1>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-[72px] z-30 bg-cream/95 backdrop-blur-sm border-b border-gray-100 py-5 px-6">
        <div className="max-w-[1200px] mx-auto flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-body text-[11px] tracking-[0.18em] uppercase px-6 py-2.5 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-navy text-white border-navy'
                  : 'border-navy/30 text-navy/60 hover:border-navy hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-body text-[12px] text-muted self-center">
            {filtered.length} development{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="font-display text-2xl text-navy/40 font-light">No projects in this category yet.</p>
              <p className="font-body text-sm text-muted mt-3">Check back soon — we're always building.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
