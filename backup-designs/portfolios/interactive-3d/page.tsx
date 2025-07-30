'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Layers3, Eye, Zap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function OverlappingLayersBrutalist() {
  return (
    <div className="min-h-screen bg-cyan-400 text-black overflow-hidden relative">
      {/* Multiple Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-20 border-4 border-black"
          style={{ clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)' }}
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-15 border-4 border-black"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
        />
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-40, 40, -40] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-10 border-4 border-black"
          style={{ clipPath: 'polygon(0 20%, 80% 0, 100% 80%, 20% 100%)' }}
        />
      </div>

      {/* Layered Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="relative">
          {/* Navigation Layer 1 */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-black text-cyan-400 p-4 relative"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h2 className="font-black text-3xl uppercase flex items-center gap-2">
                <Layers3 className="w-8 h-8" />
                {portfolioData.firstName}
              </h2>
              <div className="flex gap-6">
                <a href="#about" className="font-black uppercase hover:text-white transition-colors">Layers</a>
                <a href="#work" className="font-black uppercase hover:text-white transition-colors">Depth</a>
                <a href="#contact" className="font-black uppercase hover:text-white transition-colors">Surface</a>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Layer 2 (Overlapping) */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: -8, opacity: 0.8 }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 left-4 right-4 bg-yellow-400 text-black p-3 border-4 border-black"
          />
          
          {/* Navigation Layer 3 (Overlapping) */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: -16, opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="absolute top-0 left-8 right-8 bg-red-500 text-white p-2 border-4 border-black"
          />
        </div>
      </nav>

      {/* Hero Overlapping Layers */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
        <div className="relative max-w-6xl mx-auto">
          {/* Name Layers */}
          <div className="relative">
            {/* Bottom Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-0 left-12 bg-red-500 text-white p-12 border-8 border-black transform rotate-3"
            >
              <h1 className="text-9xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[0]}
              </h1>
            </motion.div>

            {/* Middle Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-8 left-8 bg-blue-500 text-white p-12 border-8 border-black transform -rotate-2"
            >
              <h1 className="text-9xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[0]}
              </h1>
            </motion.div>

            {/* Top Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative bg-white text-black p-12 border-8 border-black transform rotate-1"
            >
              <h1 className="text-9xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[0]}
              </h1>
            </motion.div>
          </div>

          {/* Last Name Layers */}
          <div className="relative mt-8 ml-32">
            {/* Bottom Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-0 right-12 bg-green-500 text-white p-10 border-8 border-black transform -rotate-4"
            >
              <h1 className="text-8xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[1]}
              </h1>
            </motion.div>

            {/* Middle Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-8 right-8 bg-yellow-400 text-black p-10 border-8 border-black transform rotate-2"
            >
              <h1 className="text-8xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[1]}
              </h1>
            </motion.div>

            {/* Top Layer */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative bg-black text-cyan-400 p-10 border-8 border-white transform -rotate-1"
            >
              <h1 className="text-8xl font-black uppercase leading-none">
                {portfolioData.name.split(' ')[1]}
              </h1>
            </motion.div>
          </div>

          {/* Title and Bio Layers */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="relative mt-16"
          >
            <div className="relative">
              {/* Background Layers */}
              <div className="absolute top-4 left-4 bg-red-500 p-8 border-8 border-black opacity-70" />
              <div className="absolute top-2 left-2 bg-blue-500 p-8 border-8 border-black opacity-80" />
              
              {/* Top Layer */}
              <div className="relative bg-white text-black p-8 border-8 border-black">
                <h2 className="text-4xl font-black uppercase mb-4">{portfolioData.title}</h2>
                <p className="text-xl font-bold">{portfolioData.bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Layered CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center gap-8 mt-12"
          >
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 px-8 py-6 border-8 border-black opacity-60" />
              <a
                href="#work"
                className="relative block bg-yellow-400 text-black px-8 py-6 font-black uppercase text-xl border-8 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2"
              >
                <Eye className="w-6 h-6" />
                Layer Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layered Skills Section */}
      <section id="about" className="py-20 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            {/* Title Layers */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-red-500 text-white px-8 py-4 border-8 border-white opacity-60" />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-blue-500 text-white px-8 py-4 border-8 border-white opacity-80" />
            <span className="relative text-8xl font-black uppercase bg-cyan-400 text-black px-8 py-4 inline-block border-8 border-white">
              Skill Layers
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.3 }}
                className="relative"
              >
                {/* Skill Container Layers */}
                <div className="relative">
                  {/* Background Layers */}
                  <div className={`absolute top-6 left-6 w-full h-full ${
                    categoryIndex === 0 ? 'bg-red-500' :
                    categoryIndex === 1 ? 'bg-blue-500' : 'bg-green-500'
                  } border-8 border-white opacity-40`} />
                  <div className={`absolute top-3 left-3 w-full h-full ${
                    categoryIndex === 0 ? 'bg-yellow-400' :
                    categoryIndex === 1 ? 'bg-red-500' : 'bg-blue-500'
                  } border-8 border-white opacity-60`} />
                  
                  {/* Top Layer */}
                  <div className="relative bg-white text-black p-8 border-8 border-cyan-400">
                    <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-2 bg-black text-white px-4 py-2 inline-block">
                      <Zap className="w-8 h-8" />
                      {category}
                    </h3>
                    
                    <div className="space-y-3">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.3) + (skillIndex * 0.1) }}
                          className="relative"
                        >
                          {/* Skill Layers */}
                          <div className="absolute top-1 left-1 bg-red-500 px-4 py-3 border-2 border-black opacity-60" />
                          <div className="relative bg-cyan-400 text-black px-4 py-3 font-bold uppercase border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Layered Projects Section */}
      <section id="work" className="py-20 px-4 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            {/* Title Layers */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-red-500 text-white px-8 py-4 border-8 border-black opacity-50" />
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-blue-500 text-white px-8 py-4 border-8 border-black opacity-70" />
            <span className="relative text-8xl font-black uppercase bg-black text-yellow-400 px-8 py-4 inline-block border-8 border-black">
              Deep Projects
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                  {/* Project Info Layers */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Background Project Layers */}
                    <div className={`absolute top-6 left-6 w-full h-full ${
                      index % 3 === 0 ? 'bg-red-500' :
                      index % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                    } border-8 border-black opacity-30`} />
                    <div className={`absolute top-3 left-3 w-full h-full ${
                      index % 3 === 0 ? 'bg-blue-500' :
                      index % 3 === 1 ? 'bg-green-500' : 'bg-red-500'
                    } border-8 border-black opacity-50`} />
                    
                    {/* Top Project Layer */}
                    <div className="relative bg-white text-black p-10 border-8 border-black">
                      <div className="relative">
                        <div className="absolute top-1 left-1 bg-black text-white px-4 py-2 opacity-60" />
                        <h3 className="relative text-5xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-xl font-bold mb-8 relative">
                        <span className="absolute top-1 left-1 bg-cyan-400 p-4 opacity-40" />
                        <span className="relative bg-yellow-400 p-4 border-4 border-black">
                          {project.description}
                        </span>
                      </p>
                      
                      <div className="flex gap-4">
                        {project.github && (
                          <div className="relative">
                            <div className="absolute top-1 left-1 bg-red-500 px-6 py-3 border-4 border-black opacity-60" />
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative bg-black text-white px-6 py-3 font-black uppercase hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2 border-4 border-black"
                            >
                              <Github size={24} />
                              Code
                            </a>
                          </div>
                        )}
                        {project.live && (
                          <div className="relative">
                            <div className="absolute top-1 left-1 bg-blue-500 px-6 py-3 border-4 border-black opacity-60" />
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative bg-cyan-400 text-black px-6 py-3 font-black uppercase hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2 border-4 border-black"
                            >
                              <ExternalLink size={24} />
                              Live
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Tech Stack Layers */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    {/* Tech Header Layers */}
                    <div className="relative mb-6">
                      <div className="absolute top-2 left-2 bg-red-500 p-6 border-8 border-black opacity-40" />
                      <div className="relative bg-black text-yellow-400 p-6 border-8 border-black">
                        <h4 className="text-3xl font-black uppercase">Stack Depth</h4>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (techIndex * 0.1) }}
                          className="relative"
                        >
                          {/* Tech Layers */}
                          <div className="absolute top-1.5 left-1.5 bg-red-500 px-4 py-3 border-2 border-black opacity-50" />
                          <div className="absolute top-0.5 left-0.5 bg-blue-500 px-4 py-3 border-2 border-black opacity-70" />
                          <div className="relative bg-white text-black px-4 py-3 font-bold uppercase text-center border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform">
                            {tech}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Layers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center relative"
          >
            <div className="relative inline-block">
              <div className="absolute top-3 left-3 bg-red-500 text-white p-8 border-8 border-black opacity-40" />
              <div className="absolute top-1.5 left-1.5 bg-blue-500 text-white p-8 border-8 border-black opacity-60" />
              <div className="relative bg-black text-yellow-400 p-8 border-8 border-black">
                <p className="text-4xl font-black uppercase">
                  + {portfolioData.projects.filter(p => !p.featured).length} More Layer Deep
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layered Contact Section */}
      <section id="contact" className="py-20 px-4 bg-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            {/* Contact Title Layers */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-yellow-400 text-black px-8 py-4 border-8 border-black opacity-40" />
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 text-8xl font-black uppercase bg-cyan-400 text-black px-8 py-4 border-8 border-black opacity-60" />
            <span className="relative text-8xl font-black uppercase bg-white text-red-500 px-8 py-4 inline-block border-8 border-black">
              Surface Contact
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-8 py-4 border-4 border-black opacity-50" />
            <p className="relative text-3xl font-black uppercase bg-black text-red-500 px-8 py-4 inline-block border-4 border-white">
              Ready to layer up collaboration?
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { href: `mailto:${portfolioData.email}`, icon: Mail, color: 'bg-yellow-400', textColor: 'text-black' },
              { href: portfolioData.social.github, icon: Github, color: 'bg-blue-500', textColor: 'text-white' },
              { href: portfolioData.social.linkedin, icon: Linkedin, color: 'bg-green-500', textColor: 'text-white' },
              { href: portfolioData.social.twitter, icon: Twitter, color: 'bg-cyan-400', textColor: 'text-black' }
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
                className="relative"
              >
                {/* Social Layers */}
                <div className="absolute top-3 left-3 bg-red-500 p-8 border-8 border-black opacity-30" />
                <div className="absolute top-1.5 left-1.5 bg-blue-500 p-8 border-8 border-black opacity-50" />
                <a
                  href={social.href}
                  target={social.href.includes('@') ? undefined : "_blank"}
                  rel={social.href.includes('@') ? undefined : "noopener noreferrer"}
                  className={`relative ${social.color} ${social.textColor} p-8 border-8 border-black flex items-center justify-center hover:transform hover:translate-x-2 hover:translate-y-2 hover:scale-110 transition-all`}
                >
                  <social.icon size={48} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}