'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'
import SkillCard from './SkillCard'

export default function SkillsSection() {
  return (
    <section id="about" className="py-20 px-8 bg-black text-yellow-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-black uppercase mb-12 text-center"
        >
          <span className="bg-yellow-300 text-black px-4 py-2 inline-block transform -rotate-2">
            Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <SkillCard key={category} category={category} skills={skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}