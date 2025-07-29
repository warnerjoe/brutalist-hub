'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Layers, Box, Database } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function StackedBlocksBrutalist() {
  return (
    <div className="min-h-screen bg-purple-900 text-white overflow-hidden">
      {/* Stacked Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-lime-400 text-black border-b-8 border-black p-4"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="font-black text-3xl uppercase flex items-center gap-2">
              <Layers className="w-8 h-8" />
              {portfolioData.firstName}
            </h2>
            <div className="flex gap-0">
              <a href="#about" className="bg-black text-lime-400 px-6 py-3 font-black uppercase border-r-4 border-lime-400 hover:bg-lime-400 hover:text-black transition-colors">Blocks</a>
              <a href="#work" className="bg-black text-lime-400 px-6 py-3 font-black uppercase border-r-4 border-lime-400 hover:bg-lime-400 hover:text-black transition-colors">Stack</a>
              <a href="#contact" className="bg-black text-lime-400 px-6 py-3 font-black uppercase hover:bg-lime-400 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Stacked Blocks */}
      <section className="min-h-screen pt-24 px-4 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Stack of blocks building upward */}
          <div className="relative">
            {/* Base Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-lime-400 text-black p-12 border-8 border-black mb-4 transform -rotate-1"
            >
              <h1 className="text-8xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[0]}
              </h1>
            </motion.div>

            {/* Second Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-red-500 text-white p-10 border-8 border-black mb-4 transform rotate-2 ml-12"
            >
              <h1 className="text-7xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[1]}
              </h1>
            </motion.div>

            {/* Third Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-yellow-400 text-black p-8 border-8 border-black mb-4 transform -rotate-1 ml-24"
            >
              <h2 className="text-4xl font-black uppercase">{portfolioData.title}</h2>
            </motion.div>

            {/* Fourth Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-blue-500 text-white p-6 border-8 border-black mb-4 transform rotate-1 ml-36"
            >
              <p className="text-xl font-bold">{portfolioData.bio}</p>
            </motion.div>

            {/* Top Block */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-green-500 text-white p-4 border-8 border-black transform -rotate-2 ml-48"
            >
              <p className="text-lg font-black uppercase">{portfolioData.location}</p>
            </motion.div>

            {/* Floating Action Block */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
            >
              <a
                href="#work"
                className="block bg-orange-500 text-white p-8 font-black uppercase text-2xl border-8 border-black hover:rotate-12 transition-transform"
              >
                <Box className="w-12 h-12 mx-auto mb-2" />
                Stack Work
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stacked Skills Blocks */}
      <section id="about" className="py-20 px-4 bg-lime-400">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-black text-lime-400 px-8 py-4 inline-block border-8 border-black transform rotate-3">
              Skill Blocks
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <div key={category} className="relative">
                {/* Create stacked blocks for each skill category */}
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="space-y-2"
                >
                  {/* Header Block */}
                  <div className={`${
                    categoryIndex === 0 ? 'bg-red-500' :
                    categoryIndex === 1 ? 'bg-blue-500' : 'bg-green-500'
                  } text-white p-6 border-8 border-black transform ${
                    categoryIndex % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  }`}>
                    <h3 className="text-3xl font-black uppercase flex items-center gap-2">
                      <Database className="w-8 h-8" />
                      {category}
                    </h3>
                  </div>

                  {/* Skill Blocks Stack */}
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className={`bg-black text-lime-400 p-4 border-4 border-white font-bold uppercase transform ${
                        skillIndex % 2 === 0 ? 'ml-4' : 'ml-8'
                      } hover:rotate-2 transition-transform`}
                      style={{ zIndex: skills.length - skillIndex }}
                    >
                      {skill}
                    </motion.div>
                  ))}

                  {/* Base Block */}
                  <div className="bg-gray-800 h-4 border-4 border-black transform rotate-1" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacked Projects Section */}
      <section id="work" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-lime-400 text-black px-8 py-4 inline-block border-8 border-lime-400 transform -rotate-2">
              Project Stack
            </span>
          </motion.h2>

          <div className="space-y-12">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="relative"
              >
                {/* Project Stack */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Main Project Block */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`flex-1 ${
                      index % 3 === 0 ? 'bg-red-500' :
                      index % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                    } text-white p-8 border-8 border-white transform ${
                      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                    }`}
                  >
                    <h3 className="text-5xl font-black uppercase mb-4 bg-black text-white px-4 py-2 inline-block">
                      {project.title}
                    </h3>
                    <p className="text-xl font-bold mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2 border-4 border-white"
                        >
                          <Github size={24} />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-lime-400 text-black px-6 py-3 font-black uppercase hover:bg-white transition-colors flex items-center gap-2 border-4 border-black"
                        >
                          <ExternalLink size={24} />
                          Live
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Tech Stack Blocks */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 space-y-2"
                  >
                    {/* Tech Header */}
                    <div className="bg-lime-400 text-black p-4 border-8 border-black transform rotate-2">
                      <h4 className="text-2xl font-black uppercase">Tech Stack</h4>
                    </div>
                    
                    {/* Stacked Tech Blocks */}
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (techIndex * 0.1) }}
                        className={`bg-yellow-400 text-black p-3 border-4 border-black font-bold uppercase transform ${
                          techIndex % 2 === 0 ? 'ml-2' : 'ml-6'
                        } hover:scale-105 transition-transform`}
                        style={{ zIndex: project.tech.length - techIndex }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                    
                    {/* Base Tech Block */}
                    <div className="bg-gray-800 h-3 border-4 border-white transform -rotate-1" />
                  </motion.div>
                </div>

                {/* Shadow Block */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-800 border-4 border-gray-600 -z-10 transform rotate-1" />
              </motion.div>
            ))}
          </div>

          {/* More Projects Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="bg-red-500 text-white p-6 border-8 border-white font-black uppercase text-3xl transform rotate-2">
                + {portfolioData.projects.filter(p => !p.featured).length}
              </div>
              <div className="bg-blue-500 text-white p-6 border-8 border-white font-black uppercase text-3xl transform -rotate-1 mt-2">
                More Blocks
              </div>
              <div className="bg-green-500 text-white p-6 border-8 border-white font-black uppercase text-3xl transform rotate-1 mt-2">
                In Stack
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-800 border-4 border-gray-600 -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Stacked Blocks */}
      <section id="contact" className="py-20 px-4 bg-lime-400 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-black text-lime-400 px-8 py-4 inline-block border-8 border-black">
              Stack Up!
            </span>
          </motion.h2>

          <div className="flex justify-center">
            <div className="relative">
              {/* Contact Message Block */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-black text-lime-400 p-8 border-8 border-black mb-4 text-center transform -rotate-2"
              >
                <p className="text-3xl font-black uppercase">Ready to build the stack?</p>
              </motion.div>

              {/* Social Media Blocks Stack */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href={`mailto:${portfolioData.email}`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="bg-red-500 text-white p-8 border-8 border-black flex items-center justify-center transform hover:rotate-6 hover:scale-110 transition-all"
                >
                  <Mail size={48} />
                </motion.a>

                <motion.a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="bg-blue-500 text-white p-8 border-8 border-black flex items-center justify-center transform hover:-rotate-6 hover:scale-110 transition-all"
                >
                  <Github size={48} />
                </motion.a>

                <motion.a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="bg-green-500 text-white p-8 border-8 border-black flex items-center justify-center transform hover:rotate-6 hover:scale-110 transition-all"
                >
                  <Linkedin size={48} />
                </motion.a>

                <motion.a
                  href={portfolioData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="bg-yellow-400 text-black p-8 border-8 border-black flex items-center justify-center transform hover:-rotate-6 hover:scale-110 transition-all"
                >
                  <Twitter size={48} />
                </motion.a>
              </div>

              {/* Base Platform Block */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="bg-gray-800 h-6 border-8 border-black mt-4 transform rotate-1"
              />

              {/* Shadow Stack */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-700 border-4 border-gray-600 -z-10 transform rotate-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}