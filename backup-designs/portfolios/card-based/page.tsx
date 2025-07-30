'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUpRight, Slash, Hash } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function DiagonalBrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Diagonal Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-orange-500 transform rotate-12 opacity-10"
        />
        <motion.div
          animate={{
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-cyan-500 transform -rotate-12 opacity-10"
        />
      </div>

      {/* Diagonal Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="relative">
          <motion.div
            initial={{ x: -200, skewX: 0 }}
            animate={{ x: 0, skewX: -12 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white text-black px-12 py-6 font-black text-lg uppercase tracking-wider inline-block"
          >
            {portfolioData.firstName}/DEV
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 right-0 flex gap-0"
          >
            {['WORK', 'SKILLS', 'CONTACT'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -50, rotate: 0 }}
                animate={{ y: 0, rotate: index % 2 === 0 ? 5 : -5 }}
                transition={{ delay: 0.1 * index }}
                className="bg-red-500 text-white px-6 py-3 font-black text-sm hover:bg-white hover:text-black transition-colors transform hover:scale-110 hover:rotate-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Layout */}
      <section className="min-h-screen flex items-center px-8 pt-32 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Main Title - Diagonal */}
            <motion.div
              initial={{ opacity: 0, x: -100, skewX: -30 }}
              animate={{ opacity: 1, x: 0, skewX: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="col-span-12 md:col-span-8"
            >
              <div className="transform -skew-x-6">
                <h1 className="text-6xl md:text-9xl font-black uppercase leading-none">
                  <span className="block bg-orange-500 text-black px-4 py-2 inline-block transform rotate-2 mb-4">
                    {portfolioData.name.split(' ')[0]}
                  </span>
                  <br />
                  <span className="block bg-cyan-500 text-black px-4 py-2 inline-block transform -rotate-1">
                    {portfolioData.name.split(' ')[1]}
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Diagonal Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 15 }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-4 transform rotate-15"
            >
              <div className="bg-white text-black p-8 border-8 border-black">
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="w-6 h-6" />
                  <span className="font-black uppercase text-sm tracking-wider">DEVELOPER</span>
                </div>
                <h2 className="text-2xl font-black mb-4 uppercase">{portfolioData.title}</h2>
                <p className="font-bold mb-6">{portfolioData.bio}</p>
                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    href="#work"
                    className="bg-black text-white px-4 py-2 font-black uppercase text-sm border-4 border-black hover:bg-orange-500 hover:text-black transition-colors flex items-center gap-1"
                  >
                    WORK <ArrowUpRight size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href="#contact"
                    className="bg-red-500 text-white px-4 py-2 font-black uppercase text-sm border-4 border-black hover:bg-white hover:text-black transition-colors"
                  >
                    HIRE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Diagonal Accent Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-20 left-1/4 transform -rotate-45"
          >
            <div className="bg-cyan-500 w-32 h-32 flex items-center justify-center font-black text-black text-lg">
              <Slash className="w-16 h-16" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Slanted Grid */}
      <section id="skills" className="py-32 px-8 bg-orange-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 transform skew-y-2"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-black uppercase mb-16 transform -skew-x-12"
          >
            <span className="bg-black text-orange-500 px-6 py-3 inline-block border-8 border-black">
              SKILLS/STACK
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="transform hover:rotate-0 transition-transform duration-300"
              >
                <div className="bg-black text-orange-500 p-8 border-8 border-black h-full">
                  <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-500 transform rotate-45"></div>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-orange-500 transform rotate-45"></div>
                        <span className="font-black uppercase text-sm tracking-wider">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Diagonal Cards */}
      <section id="work" className="py-32 px-8 bg-cyan-500 text-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-black uppercase mb-16 text-center"
          >
            <span className="bg-black text-cyan-500 px-8 py-4 inline-block transform rotate-2 border-8 border-black">
              PROJECTS
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="transform transition-all duration-300"
              >
                <div className="bg-white border-8 border-black p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black uppercase leading-tight">
                      {project.title}
                    </h3>
                    <div className="bg-black text-white p-2">
                      <Hash className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <p className="text-lg font-bold mb-6 leading-tight">{project.description}</p>
                  
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                          className="bg-orange-500 text-black px-2 py-1 font-black uppercase text-xs border-2 border-black text-center transform hover:scale-110 transition-transform"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-red-500 transition-colors flex items-center gap-2"
                      >
                        <Github size={16} />
                        CODE
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 text-white px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-black transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        LIVE
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Indicator */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-black text-cyan-500 px-8 py-4 inline-block font-black uppercase text-xl border-8 border-black transform hover:rotate-0 transition-transform">
              + {portfolioData.projects.filter(p => !p.featured).length} MORE PROJECTS
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Diagonal Layout */}
      <section id="contact" className="py-32 px-8 bg-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-red-600 transform -skew-y-3"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-black uppercase mb-8 transform -skew-x-6">
              <span className="bg-white text-red-500 px-8 py-4 inline-block border-8 border-black">
                LET'S/WORK
              </span>
            </h2>
            <p className="text-2xl font-black uppercase bg-black px-6 py-3 inline-block transform rotate-2">
              READY TO BUILD SOMETHING BRUTAL?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href={`mailto:${portfolioData.email}`}
              className="bg-white text-red-500 p-6 border-8 border-black font-black uppercase flex items-center justify-center w-20 h-20 hover:bg-black hover:text-white transition-colors"
            >
              <Mail size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -15 }}
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 p-6 border-8 border-black font-black uppercase flex items-center justify-center w-20 h-20 hover:bg-black hover:text-white transition-colors"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 15 }}
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 p-6 border-8 border-black font-black uppercase flex items-center justify-center w-20 h-20 hover:bg-black hover:text-white transition-colors"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -15 }}
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 p-6 border-8 border-black font-black uppercase flex items-center justify-center w-20 h-20 hover:bg-black hover:text-white transition-colors"
            >
              <Twitter size={32} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}