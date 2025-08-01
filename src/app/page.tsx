'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowRight, Zap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'
import { useEffect, useState } from 'react'

export default function BrutalistPortfolio() {
  const [showNav, setShowNav] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setShowNav(scrollPosition > heroHeight - 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="min-h-screen bg-yellow-300 text-black overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 w-full bg-black text-yellow-300 z-50 border-b-4 border-black"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <motion.h2
            initial={{ rotateZ: -5 }}
            animate={{ rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-black text-2xl uppercase"
          >
            {portfolioData.firstName}!
          </motion.h2>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="flex gap-6 font-bold uppercase text-sm"
          >
            <a href="#about" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">About</a>
            <a href="#work" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">Work</a>
            <a href="#contact" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">Contact</a>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pb-20 relative">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 -rotate-12"
          />
          <motion.div
            animate={{
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rotate-45"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-black uppercase leading-none">
              <span className="block bg-black text-yellow-300 px-4 py-2 inline-block transform -rotate-2">
                {portfolioData.name.split(' ')[0]}
              </span>
              <span className="block bg-red-500 text-white px-4 py-2 inline-block transform rotate-2 mt-4">
                {portfolioData.name.split(' ')[1]}
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-black text-yellow-300 p-6 border-4 border-black transform -rotate-1"
          >
            <p className="text-2xl font-black uppercase mb-2">{portfolioData.title}</p>
            <p className="text-lg">{portfolioData.bio}</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#work"
              className="bg-red-500 text-white px-8 py-4 font-black uppercase border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2"
            >
              See Work <ArrowRight />
            </a>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-4 font-black uppercase border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              Hire Me!
            </a>
          </motion.div>
        </div>
      </section>

      {/* About/Skills Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => {
              const bgColor = category.toLowerCase() === 'languages' ? 'bg-green-500' : 
                            category.toLowerCase() === 'frontend' ? 'bg-blue-500' :
                            category.toLowerCase() === 'backend' ? 'bg-green-500' :
                            'bg-red-500'; // tools
              const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
              
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

      {/* Projects Section */}
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
              <motion.div
                key={project.title}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-yellow-300 border-8 border-black p-8 transform hover:-rotate-1 transition-transform"
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
                      className="bg-black text-yellow-300 px-4 py-2 font-bold uppercase border-4 border-black hover:bg-yellow-300 hover:text-black transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-6xl font-black uppercase mb-8"
          >
            <span className="bg-yellow-300 text-black px-4 py-2 inline-block transform -rotate-2">
              Let's Talk!
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-12 bg-black px-6 py-3 inline-block"
          >
            Ready to build something awesome?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a
              href={`mailto:${portfolioData.email}`}
              className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
            >
              <Mail size={32} />
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
            >
              <Github size={32} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
            >
              <Linkedin size={32} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
