'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string | null
  live?: string | null
  featured: boolean
  image?: string
  imageGif?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // On mobile, show GIF by default; on desktop, show GIF only while hovering
  const shouldShowGif = isMobile || isHovered

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-yellow-300 border-8 border-black p-8 transform hover:-rotate-1 transition-transform flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-3xl font-black uppercase mb-4 bg-black text-yellow-300 px-2 py-1 inline-block">
        {project.title}
      </h3>
      <p className="text-xl mb-6 font-bold">{project.description}</p>
      <div className="mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-blue-500 text-white px-3 py-1 font-bold uppercase mr-2 mb-2 border-2 border-black"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex-grow"></div>
      <div className="mt-auto">
        {project.image && (
          <div className="mb-6 overflow-hidden border-4 border-black">
            <Image
              src={shouldShowGif && project.imageGif ? project.imageGif : project.image}
              alt={`${project.title} preview`}
              width={450}
              height={219}
              className="w-full h-auto object-cover transition-all duration-300"
              unoptimized={shouldShowGif && project.imageGif ? true : false}
            />
          </div>
        )}
        <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-yellow-300 px-4 py-2 font-bold uppercase border-4 border-black hover:bg-yellow-300 hover:text-black transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 font-bold uppercase border-4 border-black hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <ExternalLink size={20} />
            Live
          </a>
        )}
        </div>
      </div>
    </motion.div>
  )
}