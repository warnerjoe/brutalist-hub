'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 px-8 bg-red-500">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-black uppercase mb-12 text-center"
        >
          <span className="bg-black text-yellow-300 px-4 py-2 inline-block transform rotate-2">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-black uppercase bg-black text-yellow-300 px-6 py-3 inline-block transform rotate-1 hover:bg-yellow-300 hover:text-black transition-colors border-4 border-black"
          >
            + More Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}