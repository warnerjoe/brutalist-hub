'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

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
          {Object.entries(portfolioData.skills).map(([category, skills], index) => {
            const bgColor = category.toLowerCase() === 'languages' ? 'bg-green-500' : 
                          category.toLowerCase() === 'frontend' ? 'bg-blue-500' :
                          category.toLowerCase() === 'backend' ? 'bg-green-500' :
                          'bg-red-500'; // tools
            const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2'];
            const rotation = rotations[index];
            
            return (
              <motion.div
                key={category}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${bgColor} p-6 border-4 border-yellow-300 transform ${rotation}`}
              >
                <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                  <Zap className="w-8 h-8" />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="font-bold uppercase bg-black text-yellow-300 px-2 py-1 inline-block mr-2 mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}