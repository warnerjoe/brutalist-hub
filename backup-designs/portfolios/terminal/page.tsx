'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Zap, Triangle, Slash } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function AngularCutsBrutalist() {
  return (
    <div className="min-h-screen bg-pink-500 text-black overflow-hidden">
      {/* Angular Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="relative">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="bg-black text-pink-500 p-4"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
            }}
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center pr-20">
              <h2 className="font-black text-3xl uppercase flex items-center gap-2">
                <Triangle className="w-8 h-8 transform rotate-45" />
                {portfolioData.firstName}
              </h2>
              <div className="flex gap-8">
                <a href="#about" className="font-black uppercase hover:text-white transition-colors flex items-center gap-2">
                  <Slash className="w-4 h-4" />
                  Cuts
                </a>
                <a href="#work" className="font-black uppercase hover:text-white transition-colors flex items-center gap-2">
                  <Slash className="w-4 h-4" />
                  Work
                </a>
                <a href="#contact" className="font-black uppercase hover:text-white transition-colors flex items-center gap-2">
                  <Slash className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Angular Cuts */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
        {/* Background Angular Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 border-8 border-black"
            style={{ clipPath: 'polygon(0 0, 100% 30%, 70% 100%, 0% 70%)' }}
          />
          <motion.div
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 border-8 border-black"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 70%, 0% 100%)' }}
          />
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-500 border-8 border-black"
            style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Name with Angular Cuts */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-9xl font-black uppercase leading-none text-black bg-white p-8 border-8 border-black"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }}>
                {portfolioData.name.split(' ')[0]}
              </h1>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-500 border-8 border-black -z-10"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-8xl font-black uppercase leading-none text-white bg-black p-6 border-8 border-white"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
                {portfolioData.name.split(' ')[1]}
              </h1>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-yellow-400 border-8 border-black -z-10"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }} />
            </div>
          </motion.div>

          {/* Title and Bio with Angular Cuts */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="bg-blue-500 text-white p-8 border-8 border-black mx-auto max-w-4xl"
              style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)' }}>
              <h2 className="text-4xl font-black uppercase mb-4">{portfolioData.title}</h2>
              <p className="text-xl font-bold">{portfolioData.bio}</p>
            </div>
          </motion.div>

          {/* Angular CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <a
              href="#work"
              className="bg-red-500 text-white px-8 py-6 font-black uppercase text-xl border-8 border-black hover:scale-110 transition-transform flex items-center gap-2"
              style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)' }}
            >
              <Triangle className="w-6 h-6" />
              Cut Work
            </a>
            <a
              href="#contact"
              className="bg-green-500 text-white px-8 py-6 font-black uppercase text-xl border-8 border-black hover:scale-110 transition-transform flex items-center gap-2"
              style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
            >
              <Slash className="w-6 h-6" />
              Sharp Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* Angular Skills Section */}
      <section id="about" className="py-20 px-4 bg-black text-pink-500">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-pink-500 text-black px-8 py-4 inline-block border-8 border-pink-500"
              style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)' }}>
              Sharp Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ y: 100, opacity: 0, rotate: 10 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="relative"
              >
                {/* Angular Container */}
                <div 
                  className={`${
                    categoryIndex === 0 ? 'bg-red-500' :
                    categoryIndex === 1 ? 'bg-blue-500' : 'bg-green-500'
                  } text-white p-8 border-8 border-white relative overflow-hidden`}
                  style={{
                    clipPath: categoryIndex === 0 ? 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' :
                              categoryIndex === 1 ? 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' :
                              'polygon(0 15%, 85% 0, 100% 85%, 15% 100%)'
                  }}
                >
                  <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-2 bg-black text-white px-4 py-2 inline-block"
                    style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}>
                    <Triangle className="w-8 h-8 transform rotate-45" />
                    {category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className="bg-black text-pink-500 px-4 py-3 font-bold uppercase border-4 border-white transform hover:scale-105 transition-transform"
                        style={{
                          clipPath: skillIndex % 2 === 0 ? 
                            'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' :
                            'polygon(5% 0, 100% 0, 95% 100%, 0 100%)'
                        }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Angular Shadow */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-400 border-4 border-black -z-10"
                  style={{
                    clipPath: categoryIndex === 0 ? 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' :
                              categoryIndex === 1 ? 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' :
                              'polygon(0 15%, 85% 0, 100% 85%, 15% 100%)'
                  }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular Projects Section */}
      <section id="work" className="py-20 px-4 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-8xl font-black uppercase bg-black text-yellow-400 px-8 py-4 inline-block border-8 border-black"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
              Cut Projects
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
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Info with Angular Cut */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${
                      index % 3 === 0 ? 'bg-red-500' :
                      index % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                    } text-white p-10 border-8 border-black relative`}
                    style={{
                      clipPath: index % 2 === 0 ? 
                        'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 90%)' :
                        'polygon(0 10%, 100% 0, 90% 100%, 0 100%)'
                    }}
                  >
                    <h3 className="text-5xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block"
                      style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)' }}>
                      {project.title}
                    </h3>
                    <p className="text-xl font-bold mb-8 bg-white text-black p-4 border-4 border-black"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-6 py-3 font-black uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2 border-4 border-white"
                          style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)' }}
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
                          className="bg-yellow-400 text-black px-6 py-3 font-black uppercase hover:bg-white transition-colors flex items-center gap-2 border-4 border-black"
                          style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
                        >
                          <ExternalLink size={24} />
                          Live
                        </a>
                      )}
                    </div>

                    {/* Angular accent */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-pink-500 border-4 border-black -z-10"
                      style={{
                        clipPath: index % 2 === 0 ? 
                          'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 90%)' :
                          'polygon(0 10%, 100% 0, 90% 100%, 0 100%)'
                      }} />
                  </motion.div>

                  {/* Tech Stack with Angular Cuts */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="bg-black text-yellow-400 p-6 border-8 border-black"
                      style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' }}>
                      <h4 className="text-3xl font-black uppercase flex items-center gap-2">
                        <Zap className="w-8 h-8" />
                        Tech Cuts
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0, rotate: 45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (techIndex * 0.1), type: "spring", stiffness: 200 }}
                          className="bg-white text-black px-4 py-3 font-bold uppercase text-center border-4 border-black transform hover:rotate-3 transition-transform"
                          style={{
                            clipPath: techIndex % 3 === 0 ? 
                              'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' :
                              techIndex % 3 === 1 ?
                              'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' :
                              'polygon(0 10%, 90% 0, 100% 90%, 10% 100%)'
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Angular */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-pink-500 text-white p-8 border-8 border-black inline-block"
              style={{ clipPath: 'polygon(0 20%, 80% 0, 100% 80%, 20% 100%)' }}>
              <p className="text-4xl font-black uppercase">
                + {portfolioData.projects.filter(p => !p.featured).length} More Sharp Projects
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Angular Contact Section */}
      <section id="contact" className="py-20 px-4 bg-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-8xl font-black uppercase bg-white text-red-500 px-8 py-4 inline-block border-8 border-black"
              style={{ clipPath: 'polygon(0 15%, 85% 0, 100% 85%, 15% 100%)' }}>
              Sharp Contact
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-3xl font-black uppercase bg-black text-red-500 px-8 py-4 inline-block"
              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }}>
              Ready for sharp collaboration?
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <motion.a
              href={`mailto:${portfolioData.email}`}
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="bg-yellow-400 text-black p-8 border-8 border-black flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all"
              style={{ clipPath: 'polygon(0 0, 100% 25%, 75% 100%, 0 75%)' }}
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
              className="bg-blue-500 text-white p-8 border-8 border-black flex items-center justify-center hover:-rotate-12 hover:scale-110 transition-all"
              style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}
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
              className="bg-green-500 text-white p-8 border-8 border-black flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all"
              style={{ clipPath: 'polygon(0 0, 75% 0, 100% 75%, 25% 100%)' }}
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
              className="bg-pink-500 text-white p-8 border-8 border-black flex items-center justify-center hover:-rotate-12 hover:scale-110 transition-all"
              style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)' }}
            >
              <Twitter size={48} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}