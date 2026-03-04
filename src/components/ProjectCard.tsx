import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  className?: string;
  showPlayButton?: boolean;
  href?: string;
}

export default function ProjectCard({ project, className = '', showPlayButton = false, href }: Props) {
  return (
    <motion.a
      href={href ?? `/projects/${project.slug}`}
      className={`group relative block rounded-[30px] overflow-hidden bg-gray-50 cursor-pointer ${className}`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)' }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image container */}
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* YouTube play button overlay */}
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black" className="ml-1">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        )}

        {/* Hover overlay with info */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
          <div className="w-full p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-white text-xs font-medium uppercase tracking-widest">
              {project.subtitle}
            </span>
            <h3 className="text-white text-lg font-semibold leading-tight mt-0.5">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
