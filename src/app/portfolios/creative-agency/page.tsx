'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Split, Divide, ArrowRight } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function SplitScreenBrutalist() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Split Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="flex h-20">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="flex-1 bg-red-500 text-black border-r-4 border-black flex items-center justify-center"
          >
            <h2 className="font-black text-3xl uppercase flex items-center gap-2">
              <Split className="w-8 h-8" />
              {portfolioData.firstName}
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="flex-1 bg-white text-black flex items-center justify-center gap-8"
          >
            <a href="#about" className="font-black uppercase hover:bg-black hover:text-white px-4 py-2 transition-colors">Split</a>
            <a href="#work" className="font-black uppercase hover:bg-black hover:text-white px-4 py-2 transition-colors">Work</a>
            <a href="#contact" className="font-black uppercase hover:bg-black hover:text-white px-4 py-2 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Split Screen */}
      <section className="min-h-screen flex pt-20">
        {/* Left Split */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-red-500 text-black flex flex-col justify-center items-center p-12 relative"
        >
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-8 border-black transform rotate-45"
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-8xl font-black uppercase leading-none mb-8"
            >
              {portfolioData.name.split(' ')[0]}
              <span className="block bg-black text-red-500 px-4 py-2 inline-block transform rotate-3 mt-4">
                {portfolioData.name.split(' ')[1]}
              </span>
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-black text-red-500 p-6 border-8 border-black transform -rotate-2"
            >
              <h2 className="text-2xl font-black uppercase mb-2">Left Side</h2>
              <p className="text-lg font-bold">Creative</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-8 bg-yellow-400 border-l-8 border-r-8 border-black flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-4 h-4 bg-black transform rotate-45"
          />
        </motion.div>

        {/* Right Split */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white text-black flex flex-col justify-center items-center p-12 relative"
        >
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ rotate: [360, 180, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-8 border-black transform -rotate-45"
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-black uppercase bg-black text-white px-6 py-3 inline-block transform rotate-2">
                {portfolioData.title}
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl font-bold mb-8 bg-red-500 text-white p-4 border-4 border-black"
            >
              {portfolioData.bio}
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-black text-white p-6 border-8 border-black transform rotate-1"
            >
              <h3 className="text-2xl font-black uppercase mb-2">Right Side</h3>
              <p className="text-lg font-bold">Technical</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Split Skills Section */}
      <section id="about" className="min-h-screen flex">
        <div className="flex-1 bg-black text-red-500 p-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-black uppercase mb-12 text-center"
          >
            <span className="bg-red-500 text-black px-6 py-3 inline-block transform -rotate-3">
              Skills
            </span>
          </motion.h2>
          <div className="space-y-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-red-500 text-black p-6 border-8 border-white transform hover:rotate-1 transition-transform"
              >
                <h3 className="text-3xl font-black uppercase mb-4 flex items-center gap-2">
                  <Divide className="w-8 h-8" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black text-red-500 px-3 py-2 font-bold uppercase text-sm border-2 border-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-8 bg-yellow-400 border-8 border-black flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 bg-black mb-4"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 bg-black mt-4"
          />
        </div>

        <div className="flex-1 bg-white text-black p-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-black uppercase mb-12 text-center"
          >
            <span className="bg-black text-white px-6 py-3 inline-block transform rotate-3">
              About
            </span>
          </motion.h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-red-500 text-white p-8 border-8 border-black transform -rotate-1">
              <h3 className="text-3xl font-black uppercase mb-4">Location</h3>
              <p className="text-2xl font-bold">{portfolioData.location}</p>
            </div>
            <div className="bg-black text-white p-8 border-8 border-red-500 transform rotate-2">
              <h3 className="text-3xl font-black uppercase mb-4">Contact</h3>
              <p className="text-xl font-bold">{portfolioData.email}</p>
            </div>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-yellow-400 text-black p-6 font-black uppercase text-2xl text-center border-8 border-black transform hover:rotate-1 transition-transform"
            >
              <ArrowRight className="w-8 h-8 inline-block mr-2" />
              View Split Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Split Projects Section */}
      <section id="work" className="py-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-8xl font-black uppercase bg-yellow-400 text-black px-8 py-4 inline-block border-8 border-black">
            Split Projects
          </span>
        </motion.h2>

        <div className="space-y-8 max-w-7xl mx-auto px-4">
          {portfolioData.projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className="flex min-h-[400px]"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Project Info */}
                  <div className="flex-1 bg-red-500 text-black p-12 border-8 border-black flex flex-col justify-center">
                    <motion.h3
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-5xl font-black uppercase mb-6 bg-black text-red-500 px-4 py-2 inline-block transform -rotate-2"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold mb-6"
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-4"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-red-500 px-6 py-3 font-black uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2 border-4 border-black"
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
                          className="bg-white text-black px-6 py-3 font-black uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-2 border-4 border-black"
                        >
                          <ExternalLink size={24} />
                          Live
                        </a>
                      )}
                    </motion.div>
                  </div>
                  {/* Divider */}
                  <div className="w-8 bg-yellow-400 border-8 border-black flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 bg-black transform rotate-45"
                    />
                  </div>
                  {/* Right Tech Stack */}
                  <div className="flex-1 bg-white text-black p-12 border-8 border-black flex flex-col justify-center">
                    <motion.h4
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block transform rotate-2"
                    >
                      Tech Stack
                    </motion.h4>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (techIndex * 0.1) }}
                          className="bg-red-500 text-white px-4 py-2 font-bold uppercase text-center border-4 border-black"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Tech Stack */}
                  <div className="flex-1 bg-black text-white p-12 border-8 border-white flex flex-col justify-center">
                    <motion.h4
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl font-black uppercase mb-6 bg-white text-black px-4 py-2 inline-block transform -rotate-2"
                    >
                      Tech Stack
                    </motion.h4>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (techIndex * 0.1) }}
                          className="bg-red-500 text-white px-4 py-2 font-bold uppercase text-center border-4 border-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  {/* Divider */}
                  <div className="w-8 bg-yellow-400 border-8 border-black flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 bg-black transform rotate-45"
                    />
                  </div>
                  {/* Right Project Info */}
                  <div className="flex-1 bg-white text-black p-12 border-8 border-black flex flex-col justify-center">
                    <motion.h3
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-5xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block transform rotate-2"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold mb-6"
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-4"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2 border-4 border-black"
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
                          className="bg-red-500 text-white px-6 py-3 font-black uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-2 border-4 border-black"
                        >
                          <ExternalLink size={24} />
                          Live
                        </a>
                      )}
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* More Projects Split */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex mt-16 max-w-7xl mx-auto px-4"
        >
          <div className="flex-1 bg-red-500 text-black p-8 border-8 border-black text-center transform -rotate-1">
            <p className="text-4xl font-black uppercase">
              + {portfolioData.projects.filter(p => !p.featured).length}
            </p>
          </div>
          <div className="w-8 bg-yellow-400 border-8 border-black" />
          <div className="flex-1 bg-white text-black p-8 border-8 border-black text-center transform rotate-1">
            <p className="text-4xl font-black uppercase">More Projects</p>
          </div>
        </motion.div>
      </section>

      {/* Split Contact Section */}
      <section id="contact" className="min-h-screen flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-red-500 text-black flex flex-col justify-center items-center p-12"
        >
          <h2 className="text-8xl font-black uppercase mb-8 text-center">
            <span className="bg-black text-red-500 px-4 py-2 inline-block transform -rotate-3">
              Let's
            </span>
          </h2>
          <p className="text-3xl font-black uppercase bg-white text-black px-6 py-3 inline-block border-4 border-black">
            Split the difference
          </p>
        </motion.div>

        <div className="w-8 bg-yellow-400 border-8 border-black flex items-center justify-center">
          <motion.div
            animate={{ scaleY: [1, 2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-8 bg-black"
          />
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-white text-black flex flex-col justify-center items-center p-12"
        >
          <h2 className="text-8xl font-black uppercase mb-8 text-center">
            <span className="bg-black text-white px-4 py-2 inline-block transform rotate-3">
              Connect!
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 text-white p-6 border-8 border-black flex items-center justify-center"
            >
              <Mail size={40} />
            </motion.a>
            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black text-white p-6 border-8 border-red-500 flex items-center justify-center"
            >
              <Github size={40} />
            </motion.a>
            <motion.a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black text-white p-6 border-8 border-red-500 flex items-center justify-center"
            >
              <Linkedin size={40} />
            </motion.a>
            <motion.a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 text-white p-6 border-8 border-black flex items-center justify-center"
            >
              <Twitter size={40} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}