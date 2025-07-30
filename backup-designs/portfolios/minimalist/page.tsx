'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Square, Grid3X3, Zap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function GeometricGridBrutalist() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Fixed Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-2">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() > 0.7 ? 1 : 0.3 }}
              transition={{ delay: i * 0.01, duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="bg-orange-500 border border-orange-400"
            />
          ))}
        </div>
      </div>

      {/* Navigation Grid */}
      <nav className="fixed top-0 w-full bg-orange-500 text-black z-50 border-b-8 border-black">
        <div className="grid grid-cols-12 gap-0 max-w-7xl mx-auto">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="col-span-4 bg-black text-orange-500 p-4 border-r-4 border-black"
          >
            <h2 className="font-black text-2xl uppercase flex items-center gap-2">
              <Grid3X3 className="w-6 h-6" />
              {portfolioData.firstName}
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="col-span-8 flex"
          >
            <a href="#about" className="flex-1 bg-orange-500 hover:bg-black hover:text-orange-500 text-center py-4 font-black uppercase border-r-2 border-black transition-colors">Grid</a>
            <a href="#work" className="flex-1 bg-orange-500 hover:bg-black hover:text-orange-500 text-center py-4 font-black uppercase border-r-2 border-black transition-colors">Work</a>
            <a href="#contact" className="flex-1 bg-orange-500 hover:bg-black hover:text-orange-500 text-center py-4 font-black uppercase transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Grid Section */}
      <section className="min-h-screen grid grid-cols-12 grid-rows-12 gap-4 p-4 pt-24 relative">
        {/* Name Grid */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="col-span-6 row-span-4 bg-orange-500 border-8 border-black flex items-center justify-center transform -rotate-1"
        >
          <h1 className="text-6xl font-black uppercase text-black text-center leading-none">
            {portfolioData.name.replace(' ', '\n').split('\n').map((word, i) => (
              <div key={i} className={`${i === 1 ? 'bg-black text-orange-500 px-2' : ''}`}>
                {word}
              </div>
            ))}
          </h1>
        </motion.div>

        {/* Title Grid */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-6 row-span-2 bg-black border-8 border-orange-500 p-6 flex items-center"
        >
          <p className="text-2xl font-black uppercase text-orange-500">{portfolioData.title}</p>
        </motion.div>

        {/* Bio Grid */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-6 row-span-2 bg-white text-black border-8 border-black p-6 transform rotate-1"
        >
          <p className="font-bold text-lg">{portfolioData.bio}</p>
        </motion.div>

        {/* Geometric Accent Elements */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="col-span-2 row-span-2 bg-red-500 border-4 border-black"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="col-span-2 row-span-2 bg-blue-500 border-4 border-black"
        />
        <motion.div
          animate={{ rotateY: [0, 180, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="col-span-2 row-span-2 bg-green-500 border-4 border-black"
        />

        {/* CTA Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="col-span-4 row-span-2 bg-red-500 border-8 border-black flex items-center justify-center"
        >
          <a
            href="#work"
            className="bg-black text-red-500 px-8 py-4 font-black uppercase hover:bg-red-500 hover:text-black transition-colors flex items-center gap-2 border-4 border-black"
          >
            <Square className="w-6 h-6" />
            View Grid
          </a>
        </motion.div>

        {/* Location Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="col-span-2 row-span-2 bg-yellow-400 text-black border-8 border-black flex items-center justify-center transform -rotate-2"
        >
          <p className="font-black text-center uppercase">{portfolioData.location}</p>
        </motion.div>
      </section>

      {/* Skills Grid Section */}
      <section id="about" className="py-20 px-4 bg-orange-500">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-8xl font-black uppercase bg-black text-orange-500 px-8 py-4 inline-block border-8 border-black transform rotate-1">
              Skills Grid
            </span>
          </motion.h2>

          <div className="grid grid-cols-12 gap-4">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`col-span-4 bg-black border-8 border-white p-6 ${categoryIndex % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
              >
                <h3 className="text-3xl font-black uppercase mb-6 text-orange-500 flex items-center gap-2">
                  <Zap className="w-8 h-8" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="bg-orange-500 text-black px-3 py-2 font-bold uppercase text-sm border-2 border-white text-center"
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

      {/* Projects Grid Section */}
      <section id="work" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-8xl font-black uppercase bg-orange-500 text-black px-8 py-4 inline-block border-8 border-orange-500 transform -rotate-2">
              Work Grid
            </span>
          </motion.h2>

          <div className="grid grid-cols-12 gap-4">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="col-span-6 bg-white text-black border-8 border-orange-500 p-8 transform hover:scale-105 transition-transform"
              >
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="col-span-4 bg-black text-white p-2">
                    <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                  </div>
                </div>
                <p className="font-bold mb-6 text-lg">{project.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.tech.slice(0, 6).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`text-center py-2 px-1 font-bold uppercase text-xs border-2 border-black ${
                        techIndex % 3 === 0 ? 'bg-red-500 text-white' :
                        techIndex % 3 === 1 ? 'bg-blue-500 text-white' :
                        'bg-green-500 text-white'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white py-3 font-black uppercase text-center border-4 border-orange-500 hover:bg-orange-500 hover:text-black transition-colors flex items-center justify-center gap-2"
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
                      className="bg-orange-500 text-black py-3 font-black uppercase text-center border-4 border-black hover:bg-black hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Grid Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4 mt-8"
          >
            <div className="col-span-12 bg-red-500 border-8 border-black p-6 text-center transform rotate-1">
              <p className="text-4xl font-black uppercase text-black">
                + {portfolioData.projects.filter(p => !p.featured).length} More in the Grid
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section id="contact" className="py-20 px-4 bg-orange-500">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-8xl font-black uppercase bg-black text-orange-500 px-8 py-4 inline-block border-8 border-black">
              Connect
            </span>
          </motion.h2>

          <div className="grid grid-cols-8 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-8 bg-black text-orange-500 p-8 border-8 border-white text-center transform -rotate-1"
            >
              <p className="text-3xl font-black uppercase mb-4">Ready to build something in the grid?</p>
            </motion.div>

            <motion.a
              href={`mailto:${portfolioData.email}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-2 aspect-square bg-white text-black border-8 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors transform hover:rotate-6"
            >
              <Mail size={48} />
            </motion.a>

            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-2 aspect-square bg-red-500 text-white border-8 border-black flex items-center justify-center hover:bg-black transition-colors transform hover:-rotate-6"
            >
              <Github size={48} />
            </motion.a>

            <motion.a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 aspect-square bg-blue-500 text-white border-8 border-black flex items-center justify-center hover:bg-black transition-colors transform hover:rotate-6"
            >
              <Linkedin size={48} />
            </motion.a>

            <motion.a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 aspect-square bg-green-500 text-white border-8 border-black flex items-center justify-center hover:bg-black transition-colors transform hover:-rotate-6"
            >
              <Twitter size={48} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}