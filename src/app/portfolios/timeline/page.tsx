'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Type, Hash, Quote } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function TextHeavyTypographyBrutalist() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Typography Heavy Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black text-white border-b-8 border-black">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="max-w-7xl mx-auto px-8 py-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-black uppercase tracking-widest">
              <span className="bg-white text-black px-2 py-1">{portfolioData.firstName}</span>
              <span className="ml-2 text-white">TYPOGRAPHY</span>
            </h1>
            <div className="flex gap-8 text-xl font-black uppercase tracking-wider">
              <a href="#about" className="hover:bg-white hover:text-black px-2 py-1 transition-colors">TYPE</a>
              <a href="#work" className="hover:bg-white hover:text-black px-2 py-1 transition-colors">WORK</a>
              <a href="#contact" className="hover:bg-white hover:text-black px-2 py-1 transition-colors">TALK</a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Typography Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Background Typography */}
          <div className="absolute inset-0 overflow-hidden opacity-5 select-none">
            <motion.div
              animate={{ x: [-200, 200, -200] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="text-9xl font-black uppercase whitespace-nowrap"
            >
              TYPOGRAPHY DESIGN CODE BRUTALIST FONT TEXT LETTERS
            </motion.div>
            <motion.div
              animate={{ x: [200, -200, 200] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="text-8xl font-black uppercase whitespace-nowrap mt-16"
            >
              DEVELOPER PORTFOLIO LAYOUT GRID SYSTEM MINIMAL
            </motion.div>
          </div>

          {/* Main Typography Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h1 className="text-9xl md:text-[12rem] font-black uppercase leading-none mb-8">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block bg-black text-white px-4 py-2 inline-block transform -rotate-2"
              >
                {portfolioData.name.split(' ')[0]}
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block bg-red-500 text-white px-4 py-2 inline-block transform rotate-1 mt-4"
              >
                {portfolioData.name.split(' ')[1]}
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl font-black uppercase mb-8 tracking-wider"
            >
              <span className="bg-yellow-400 text-black px-6 py-2 inline-block border-8 border-black transform rotate-1">
                {portfolioData.title.split(' ')[0]}
              </span>
              <br />
              <span className="bg-blue-500 text-white px-6 py-2 inline-block border-8 border-black transform -rotate-1 mt-4">
                {portfolioData.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-2xl font-bold leading-relaxed bg-black text-white p-8 border-8 border-black transform rotate-0.5">
                <Quote className="w-8 h-8 inline-block mr-2" />
                {portfolioData.bio}
                <Quote className="w-8 h-8 inline-block ml-2 transform rotate-180" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="text-xl font-black uppercase tracking-widest"
            >
              <a
                href="#work"
                className="inline-block bg-green-500 text-white px-12 py-6 border-8 border-black hover:transform hover:scale-110 transition-transform mr-4"
              >
                <Type className="w-8 h-8 inline-block mr-2" />
                READ WORK
              </a>
              <a
                href="#contact"
                className="inline-block bg-white text-black px-12 py-6 border-8 border-black hover:transform hover:scale-110 transition-transform"
              >
                <Hash className="w-8 h-8 inline-block mr-2" />
                TYPE CONTACT
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Typography Skills Section */}
      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-white text-black px-8 py-4 inline-block border-8 border-white transform -rotate-2">
              SKILL TYPOGRAPHY
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-white text-black p-8 border-8 border-white relative overflow-hidden"
              >
                {/* Background Text */}
                <div className="absolute inset-0 opacity-5 select-none overflow-hidden">
                  <div className="text-6xl font-black uppercase transform rotate-45 whitespace-nowrap mt-8">
                    {category} {category} {category}
                  </div>
                </div>

                <h3 className="text-5xl font-black uppercase mb-8 relative z-10 bg-black text-white px-4 py-2 inline-block transform rotate-1">
                  {category}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className={`text-2xl font-black uppercase p-4 border-4 border-black ${
                        skillIndex % 3 === 0 ? 'bg-red-500 text-white' :
                        skillIndex % 3 === 1 ? 'bg-blue-500 text-white' :
                        'bg-yellow-400 text-black'
                      } transform hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Projects Section */}
      <section id="work" className="py-20 px-4 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            {/* Background Typography */}
            <div className="absolute inset-0 opacity-10 select-none">
              <div className="text-9xl font-black uppercase">PROJECTS</div>
            </div>
            <span className="relative text-8xl font-black uppercase bg-black text-yellow-400 px-8 py-4 inline-block border-8 border-black transform rotate-1">
              TEXT PROJECTS
            </span>
          </motion.h2>

          <div className="space-y-16">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="bg-white border-8 border-black p-12 relative overflow-hidden"
              >
                {/* Background Project Text */}
                <div className="absolute inset-0 opacity-5 select-none overflow-hidden">
                  <div className="text-8xl font-black uppercase transform -rotate-12 whitespace-nowrap mt-16">
                    {project.title} {project.title} {project.title}
                  </div>
                </div>

                <div className="relative z-10">
                  <motion.h3
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-7xl font-black uppercase mb-8 leading-none"
                  >
                    <span className="bg-black text-white px-4 py-2 inline-block transform -rotate-1">
                      {project.title.split(' ')[0]}
                    </span>
                    {project.title.split(' ').slice(1).map((word, i) => (
                      <span key={i} className="block bg-red-500 text-white px-4 py-2 inline-block transform rotate-1 mt-2">
                        {word}
                      </span>
                    ))}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <p className="text-3xl font-bold leading-relaxed bg-blue-500 text-white p-6 border-4 border-black transform rotate-0.5">
                      {project.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h4 className="text-4xl font-black uppercase mb-4 bg-green-500 text-white px-4 py-2 inline-block">
                      TECH STACK:
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`text-xl font-black uppercase px-6 py-3 border-4 border-black ${
                            techIndex % 3 === 0 ? 'bg-red-500 text-white' :
                            techIndex % 3 === 1 ? 'bg-blue-500 text-white' :
                            'bg-green-500 text-white'
                          } transform hover:rotate-3 transition-transform`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-6"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-8 py-4 font-black uppercase text-xl border-4 border-black hover:transform hover:scale-110 transition-transform flex items-center gap-2"
                      >
                        <Github size={24} />
                        read code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-8 py-4 font-black uppercase text-xl border-4 border-black hover:transform hover:scale-110 transition-transform flex items-center gap-2"
                      >
                        <ExternalLink size={24} />
                        view live
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="text-6xl font-black uppercase bg-black text-yellow-400 px-8 py-4 inline-block border-8 border-black transform -rotate-2">
              + {portfolioData.projects.filter(p => !p.featured).length} MORE TEXT PROJECTS
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Contact Section */}
      <section id="contact" className="py-20 px-4 bg-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            {/* Background Contact Text */}
            <div className="absolute inset-0 opacity-10 select-none">
              <div className="text-9xl font-black uppercase">CONTACT</div>
            </div>
            <span className="relative text-8xl font-black uppercase bg-white text-red-500 px-8 py-4 inline-block border-8 border-black">
              TYPE CONTACT
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-4xl font-black uppercase leading-tight bg-black text-red-500 px-8 py-6 inline-block border-8 border-white transform rotate-1">
              READY TO CREATE
              <br />
              TYPOGRAPHY TOGETHER?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-400 text-black p-8 border-8 border-black flex flex-col items-center justify-center aspect-square"
            >
              <Mail size={48} className="mb-2" />
              <span className="font-black uppercase text-sm">EMAIL</span>
            </motion.a>

            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black text-white p-8 border-8 border-white flex flex-col items-center justify-center aspect-square"
            >
              <Github size={48} className="mb-2" />
              <span className="font-black uppercase text-sm">CODE</span>
            </motion.a>

            <motion.a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white p-8 border-8 border-black flex flex-col items-center justify-center aspect-square"
            >
              <Linkedin size={48} className="mb-2" />
              <span className="font-black uppercase text-sm">WORK</span>
            </motion.a>

            <motion.a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white p-8 border-8 border-black flex flex-col items-center justify-center aspect-square"
            >
              <Twitter size={48} className="mb-2" />
              <span className="font-black uppercase text-sm">TALK</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}