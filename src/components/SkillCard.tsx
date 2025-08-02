'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface SkillCardProps {
  category: string
  skills: string[]
  index: number
}

export default function SkillCard({ category, skills, index }: SkillCardProps) {
  const getBgColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return 'bg-green-500'
      case 'frontend':
        return 'bg-blue-500'
      case 'backend':
        return 'bg-green-500'
      case 'tools':
        return 'bg-red-500'
      default:
        return 'bg-red-500'
    }
  }

  const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2']
  const bgColor = getBgColor(category)
  const rotation = rotations[index]

  return (
    <motion.div
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
  )
}